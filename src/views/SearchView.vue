<template>
  <!-- <TempComponent /> -->

  <div class="grid grid-cols-1 lg:grid-cols-4 mt-8 mb-12">
    <!-- Filter -->
    <aside class="lg:col-span-1">
      <div class="sticky top-22.5">
        <FlightFilter @reset="resetFilter" />
      </div>
    </aside>

    <!-- Danh sách chuyến bay -->
    <section class="lg:col-span-3 space-y-10">

      <!-- Loading -->
      <div v-if="loading" class="space-y-10">
        <section v-for="section in flightSections" :key="section.key" class="px-4">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-1 h-7 rounded-full bg-primary"></div>

            <h2 class="text-2xl font-bold text-gray-900">
              {{ section.title }}
            </h2>
          </div>

          <div class="space-y-6">
            <FlightCardSkeleton v-for="item in 8" :key="item" />
          </div>
        </section>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="px-4 mt-13">
        <ErrorState title="Không thể tải danh sách chuyến bay"
          message="Hệ thống đang gặp sự cố khi tìm kiếm chuyến bay. Vui lòng thử lại." :error-code="errorCode"
          @retry="fetchFlights" />
      </div>

      <!-- Empty -->
      <div v-else-if="hasNoFlights" class="px-4 mt-13">
        <EmptyState title="Không tìm thấy chuyến bay"
          message="Không có chuyến bay nào phù hợp với bộ lọc hiện tại. Hãy thử đổi ngày bay, điểm đến hoặc xóa bộ lọc."
          action-text="Xóa bộ lọc" @action="resetFilter" />
      </div>

      <!-- Success -->
      <div v-else class="space-y-10">
        <section v-for="section in flightSections" :key="section.key" class="px-4">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-1 h-7 rounded-full bg-primary"></div>

            <h2 class="text-2xl font-bold text-gray-900">
              {{ section.title }}
            </h2>
          </div>

          <ul class="space-y-4">
            <FlightCard v-for="flight in section.flights" :key="flight.id" :stop-num="flight.stopNum"
              :stop-points="flight.stopPoints" />
          </ul>
        </section>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import FlightFilter from '@/components/FlightFilter.vue';
import FlightCard from '@/components/FlightCard.vue';
import FlightCardSkeleton from '@/components/FlightCardSkeleton.vue';
import EmptyState from '@/components/EmptyState.vue';
import ErrorState from '@/components/ErrorState.vue';
// import TempComponent from '@/components/TempComponent.vue';


const loading = ref(true)
const error = ref(false)
const errorCode = ref('')

const tripType = ref('roundTrip')

const outboundFlights = ref([1, 2, 3])
const inboundFlights = ref([])

const flightSections = computed(() => {
  const sections = [
    {
      key: 'outbound',
      title: 'Chuyến bay đi',
      flights: outboundFlights.value,
    },
  ]

  if (tripType.value === 'roundTrip') {
    sections.push({
      key: 'inbound',
      title: 'Chuyến bay về',
      flights: inboundFlights.value,
    })
  }

  return sections
})

const hasNoFlights = computed(() => {
  if (tripType.value === 'roundTrip') {
    return outboundFlights.value.length === 0 || inboundFlights.value.length === 0
  }

  return outboundFlights.value.length === 0
})

function fetchFlights() {
  console.log('retry fetch flights')
}

onMounted(() => {
  const timer = setInterval(() => {
    loading.value = false
    clearInterval(timer)
  }, 3000)
})

function resetFilter() {
  console.log('Reset filter')
}
</script>
