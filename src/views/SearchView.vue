<template>
  <!-- <FlightSearchHeader /> -->
  <div class="grid grid-cols-1 lg:grid-cols-4 mt-8 mb-12 gap-x-4  px-4 md:px-0">
    <aside class="lg:col-span-1">
      <div class="pb-6">
        <FlightFilterSkeleton v-if="loading" />
        <FlightFilter v-else :airlines="airlineOptions" :sort-options="sortOptions"
          :stop-point-options="stopPointOptions" :selected-sort="selectedSort" :selected-stop-point="selectedStopPoint"
          :selected-airlines="selectedAirlines" @update:selected-sort="selectedSort = $event"
          @update:selected-stop-point="selectedStopPoint = $event" @update:selected-airlines="selectedAirlines = $event"
          @reset="resetFilter" />
      </div>
    </aside>
    <section class="lg:col-span-3 space-y-10">
      <div v-if="loading" class="space-y-10">
        <div class="space-y-6">
          <FlightCardSkeleton v-for="item in 8" :key="item" />
        </div>
      </div>
      <div v-else-if="error" class="md:mt-13">
        <ErrorState title="Không thể tải danh sách chuyến bay"
          message="Hệ thống đang gặp sự cố khi tìm kiếm chuyến bay. Vui lòng thử lại." :error-code="errorCode"
          @retry="fetchFlights" />
      </div>
      <div v-else-if="hasNoFlights" class="md:mt-13">
        <EmptyState title="Không tìm thấy chuyến bay"
          message="Không có chuyến bay nào phù hợp với bộ lọc hiện tại. Hãy thử đổi ngày bay, điểm đến hoặc xóa bộ lọc."
          action-text="Xóa bộ lọc" @action="resetFilter" />
      </div>
      <div v-else class="space-y-10">
        <section>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-1 h-7 rounded-full bg-primary"></div>
            <h2 class="text-2xl font-bold text-gray-900">
              {{ stepTitle }}
            </h2>
          </div>
          <TransitionGroup name="flight-list" tag="ul" class="space-y-4">
            <FlightCard v-for="flight in currentFlights" :key="flight.option_id"
              :airline-name="getAirlineName(flight.airline)" :flight-number="flight.flight_number"
              :origin="flight.origin" :destination="flight.destination"
              :departure-time="formatTime(flight.departure_date)" :arrival-time="formatTime(flight.arrival_date)"
              :duration-text="formatDuration(flight.duration)" :stop-num="flight.stop_num" :stop-points="[]"
              :fare-class="flight.fare_class" :price-text="formatCurrency(flight.total_fare, flight.currency)"
              :is-selected="currentSelection?.option_id === flight.option_id" :is-blured="!!currentSelection &&
                currentSelection.option_id !== flight.option_id
                " @select=" handleSelectFlight(flight)" />
          </TransitionGroup>
        </section>
      </div>
    </section>
  </div>
  <SelectedFlightStickyBar v-if="showSelectedFlightBar" :trip-type="tripType" :selected-flight="selectedFlight"
    @back="handleBack" @continue="handleContinue" />
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import FlightFilter from '@/components/FlightFilter.vue';
import FlightFilterSkeleton from '@/components/FlightFilterSkeleton.vue';
import FlightCard from '@/components/FlightCard.vue';
import FlightCardSkeleton from '@/components/FlightCardSkeleton.vue';
import EmptyState from '@/components/EmptyState.vue';
import ErrorState from '@/components/ErrorState.vue';
import { useRoute } from 'vue-router';
import { searchFlights } from '@/services/flight.service'
import { AIRLINES } from '@/constants/airlines';
import { formatCurrency } from '@/utils/currency'
import SelectedFlightStickyBar from '@/components/SelectedFlightStickyBar.vue';


const route = useRoute()
const loading = ref(true)
const error = ref(false)
const errorCode = ref('')
const outboundFlights = ref([])
const inboundFlights = ref([])
const selectedAirlines = ref([])
const selectedSort = ref('recommended')
const sortOptions = [
  { value: 'recommended', label: 'Đề xuất' },
  { value: 'price_asc', label: 'Giá thấp nhất' },
  { value: 'duration_asc', label: 'Thời gian bay ngắn nhất' },
  { value: 'departure_asc', label: 'Giờ khởi hành sớm nhất' },
  { value: 'departure_desc', label: 'Giờ khởi hành muộn nhất' },
]
const selectedStopPoint = ref('all')
const selectedFlight = ref({
  outboundFlight: null,
  inboundFlight: null,
})
const BOOKING_STEPS = {
  OUTBOUND_SELECTION: 'OUTBOUND_SELECTION',
  INBOUND_SELECTION: 'INBOUND_SELECTION',
  PASSENGER_INFO: 'PASSENGER_INFO',
  PAYMENT: 'PAYMENT'
};
const currentStep = ref(BOOKING_STEPS.OUTBOUND_SELECTION);
const currentSelection = computed(() => {
  switch (currentStep.value) {
    case BOOKING_STEPS.OUTBOUND_SELECTION:
      return selectedFlight.value.outboundFlight;

    case BOOKING_STEPS.INBOUND_SELECTION:
      return selectedFlight.value.inboundFlight;

    default:
      return null;
  }
});
const stepTitle = computed(() => {
  switch (currentStep.value) {
    case BOOKING_STEPS.OUTBOUND_SELECTION: return 'Chọn chuyến bay đi';
    case BOOKING_STEPS.INBOUND_SELECTION: return 'Chọn chuyến bay về';
    default: return 'Đặt vé';
  }
});
const tripType = computed(() => route.query.flightType || 'one-way')
const currentFlights = computed(() => {
  switch (currentStep.value) {
    case BOOKING_STEPS.OUTBOUND_SELECTION:
      return filteredOutboundFlights.value;
    case BOOKING_STEPS.INBOUND_SELECTION:
      return filteredInboundFlights.value;
    default:
      return [];
  }
});
const hasNoFlights = computed(() => {
  if (tripType.value === 'round-trip') {
    return filteredOutboundFlights.value.length === 0 || filteredInboundFlights.value.length === 0
  }
  return filteredOutboundFlights.value.length === 0
})
const airlineOptions = computed(() => {
  return Object.values(
    allFlights.value.reduce((result, flight) => {
      const airline = AIRLINES[flight.airline]
      if (!airline) return result
      if (!result[airline.code]) {
        result[airline.code] = {
          ...airline,
          count: 0,
          minPrice: flight.total_fare,
        }
      }
      result[airline.code].count++
      result[airline.code].minPrice = Math.min(
        result[airline.code].minPrice,
        flight.total_fare,
      )
      return result
    }, {}),
  )
})
const allFlights = computed(() => [
  ...outboundFlights.value,
  ...inboundFlights.value,
])
const airlineFilteredAllFlights = computed(() => {
  return filterByAirline(allFlights.value)
})
const stopPointCountMap = computed(() => {
  return airlineFilteredAllFlights.value.reduce(
    (result, flight) => {
      const stopNum = Number(flight.stop_num ?? 0)
      result.all += 1
      if (stopNum === 0) {
        result.direct += 1
      }
      if (stopNum === 1) {
        result.max_1_stop += 1
      }
      if (stopNum >= 2) {
        result.min_2_stops += 1
      }
      return result
    },
    {
      direct: 0,
      max_1_stop: 0,
      min_2_stops: 0,
      all: 0,
    },
  )
})
const stopPointOptions = computed(() => [
  {
    value: 'direct',
    label: 'Bay thẳng',
    count: stopPointCountMap.value.direct,
  },
  {
    value: 'max-1-stop',
    label: '1 điểm dừng',
    count: stopPointCountMap.value.max_1_stop,
  },
  {
    value: 'min-2-stops',
    label: 'Từ 2 điểm dừng',
    count: stopPointCountMap.value.min_2_stops,
  },
  {
    value: 'all',
    label: 'Tất cả',
    count: stopPointCountMap.value.all,
  },
])
const showSelectedFlightBar = computed(() => {
  return (
    selectedFlight.value.outboundFlight !== null ||
    selectedFlight.value.inboundFlight !== null
  );
});
const filterByStopPoint = (flightList) => {
  let result = [...flightList]
  switch (selectedStopPoint.value) {
    case 'direct':
      result = result.filter(flight => flight.stop_num === 0)
      break
    case 'max-1-stop':
      result = result.filter(flight => flight.stop_num === 1)
      break
    case 'min-2-stops':
      result = result.filter(flight => flight.stop_num >= 2)
      break
    case 'all':
    default:
      break
  }
  return result;
}
const fetchFlights = async () => {
  loading.value = true
  error.value = null
  try {
    const payload = {
      trip_type: route.query.flightType,
      origin: route.query.startPoint,
      destination: route.query.endPoint,
      departure_date: route.query.departureDate,
      return_date: route.query.returnDate || null,
      adults: Number(route.query.adt),
      children: Number(route.query.chd),
      infants: Number(route.query.inf),
    }
    const result = await searchFlights(payload)
    outboundFlights.value = result.outbound_flights ?? []
    inboundFlights.value = result.inbound_flights ?? []
  } catch (e) {
    const code = e.response?.data?.code || 'UNKNOWN_ERROR'
    error.value = {
      code,
      message: getErrorMessage(code),
      status: e.response?.status || null,
    }
  } finally {
    loading.value = false
  }
}
const filterByAirline = (flightList) => {
  if (selectedAirlines.value.length === 0) {
    return flightList
  }
  return flightList.filter(flight =>
    selectedAirlines.value.includes(flight.airline)
  )
}
const filteredOutboundFlights = computed(() => {
  return filterFlights(outboundFlights.value)
})
const filteredInboundFlights = computed(() => {
  return filterFlights(inboundFlights.value)
})
const filterFlights = (flightList) => {
  let result = [...flightList]
  result = filterByAirline(result)
  result = filterByStopPoint(result)
  result = sortFlights(result)
  return result
}
onMounted(fetchFlights)
function formatTime(dateString) {
  if (!dateString) return '--:--'
  return new Date(dateString).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
function formatDuration(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}
function getAirlineName(code) {
  const airlines = {
    VN: 'Vietnam Airlines',
    VJ: 'VietJet Air',
    QH: 'Bamboo Airways',
    VU: 'Vietravel Airlines',
    BL: 'Pacific Airlines',
    P8: 'Air Mekong',
  }
  return airlines[code] ?? code
}
const getErrorMessage = (code) => {
  const messages = {
    PROVIDER_BUSINESS_ERROR: 'Giá vé không còn khả dụng. Vui lòng tìm kiếm lại.',
    PROVIDER_TIMEOUT: 'Hệ thống tìm kiếm chuyến bay phản hồi quá lâu. Vui lòng thử lại.',
    PROVIDER_CONNECTION_ERROR: 'Không thể kết nối tới hệ thống vé máy bay. Vui lòng thử lại sau.',
    PROVIDER_INVALID_SCHEMA: 'Dữ liệu chuyến bay chưa hợp lệ. Vui lòng thử lại.',
    TOO_MANY_REQUESTS: 'Bạn thao tác quá nhanh. Vui lòng thử lại sau ít phút.',
  }
  return messages[code] || 'Hệ thống đang gặp sự cố. Vui lòng thử lại.'
}
function resetFilter() {
  selectedStopPoint.value = 'all';
  selectedAirlines.value = [];
  selectedSort.value = 'recommended';
}
const sortFlights = (flightList) => {
  let result = [...flightList];
  switch (selectedSort.value) {
    case 'recommend':
      break;
    case 'price_asc':
      result.sort((a, b) => a.total_fare - b.total_fare)
      break;
    case 'duration_asc':
      result.sort((a, b) => a.duration - b.duration)
      break;
    case 'departure_asc':
      return result.sort((a, b) => new Date(a.departure_date) - new Date(b.departure_date))
      break;
    case 'departure_desc':
      return result.sort((a, b) => new Date(b.departure_date) - new Date(a.departure_date))
      break;
    default:
      break;
  }
  return result;
}
const handleSelectFlight = (flight) => {
  console.log('Selected flight:', flight);
  switch (currentStep.value) {
    case BOOKING_STEPS.OUTBOUND_SELECTION:
      selectedFlight.value.outboundFlight = flight;
      break;
    case BOOKING_STEPS.INBOUND_SELECTION:
      selectedFlight.value.inboundFlight = flight;
      break;
  }
};

const handleBack = () => {
  if (tripType.value === 'one-way') {
    currentStep.value = BOOKING_STEPS.OUTBOUND_SELECTION;
  } else if (tripType.value === 'round-trip') {
    if (currentStep.value === BOOKING_STEPS.INBOUND_SELECTION) {
      currentStep.value = BOOKING_STEPS.OUTBOUND_SELECTION;
    } else if (currentStep.value === BOOKING_STEPS.PASSENGER_INFO) {
      currentStep.value = BOOKING_STEPS.INBOUND_SELECTION;
    }
  }
}

const handleContinue = () => {
  if (tripType.value === 'round-trip') {
    currentStep.value = BOOKING_STEPS.INBOUND_SELECTION;
  } else {
    currentStep.value = BOOKING_STEPS.PASSENGER_INFO;
  }
  console.log(selectedFlight.value);
};
</script>
<style scoped>
.flight-list-move,
.flight-list-enter-active,
.flight-list-leave-active {
  transition: all 0.25s ease;
}

.flight-list-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.flight-list-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.flight-list-leave-active {
  position: absolute;
}
</style>
