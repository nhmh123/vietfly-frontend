<template>
  <div class="bg-white  p-3 transition-all shadow-md cursor-pointer hover:border hover:border-primary">
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="lg:w-1/4 flex lg:flex-col items-center lg:items-start gap-3">
        <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50">
          <!-- <img src="https://download.logo.wine/logo/Vietnam_Airlines/Vietnam_Airlines-Logo.wine.png"
            class="object-contain" alt="Airline"> -->
        </div>

        <div>
          <p class="text-lg font-medium text-gray-800">{{ airlineName }}</p>
          <p class="text-base text-gray-500 mt-0.5">
            {{ flightNumber }} • {{ aircraft }}
          </p>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-between gap-4 px-4">
        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight text-gray-900">
            {{ departureTime }}
          </p>
          <p class="text-sm font-medium text-dark mt-0.5">
            {{ origin }}
          </p>
        </div>

        <div class="flex-1 flex flex-col items-center px-4">
          <span class="text-dark px-2 py-0.5 rounded-full">
            {{ stopLabel }}
          </span>

          <div class="w-full flex items-center gap-1 my-2">
            <div class="w-2 h-2 rounded-full border-2 border-gray-300"></div>
            <div class="flex-1 border-t-2" :class="routeLineClass"></div>

            <div v-if="hasStop" class="w-2.5 h-2.5 rounded-full bg-white border-2" :class="stopDotClass"></div>

            <i class="fa-solid fa-plane text-sm" :class="planeClass"></i>

            <div class="flex-1 border-t-2" :class="routeLineClass"></div>
            <div class="w-2 h-2 rounded-full border-2 border-gray-300"></div>
          </div>

          <span class="text-sm text-dark">
            {{ durationText }}
          </span>

          <div v-if="hasStop" class="mt-1 text-center">
            <p class="text-base text-dark font-medium">
              {{ stopPointText }}
            </p>
          </div>
        </div>

        <div class="text-center">
          <p class="text-2xl font-bold tracking-tight text-gray-900">
            {{ arrivalTime }}
          </p>
          <p class="text-sm font-medium text-dark mt-0.5">
            {{ destination }}
          </p>
        </div>
      </div>

      <div
        class="lg:w-1/5 flex flex-row lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6">
        <div class="text-right">
          <p class="text-left md:text-right text-dark">
            {{ fareClass }}
          </p>

          <p class="text-2xl font-bold text-primary mt-1">
            {{ priceText }}
          </p>
        </div>

        <div class="flex flex-row lg:flex-col lg:grow items-center lg:w-full lg:items-end gap-4 lg:gap-1">
          <button type="button"
            class="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-nowrap md:px-0 text-gray-500 hover:bg-gray-50 hover:text-primary transition-all"
            @click="isDetailOpen = true">
            <i class="fa-solid fa-circle-info"></i>
            <span>Chi tiết</span>
          </button>
          <button
            class="bg-primary hover:bg-primary-dark cursor-pointer text-white px-6 py-2 font-semibold transition-transform active:scale-95 self-stretch">
            CHỌN
          </button>
        </div>
      </div>
    </div>

    <FlightDetailModal v-model="isDetailOpen" :airline-name="airlineName" :flight-number="flightNumber"
      :aircraft="aircraft" :origin="origin" :destination="destination" :departure-time="departureTime"
      :arrival-time="arrivalTime" :duration-text="durationText" :stop-num="stopNum" :stop-points="stopPoints"
      :fare-class="fareClass" :price-text="priceText" :fare-conditions="fareConditions" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import FlightDetailModal from '@/components/FlightDetailModal.vue'

const props = defineProps({
  airlineName: {
    type: String,
    default: 'Vietravel Airlines',
  },
  flightNumber: {
    type: String,
    default: 'VU797',
  },
  aircraft: {
    type: String,
    default: 'Airbus A321',
  },
  origin: {
    type: String,
    default: 'HAN',
  },
  destination: {
    type: String,
    default: 'SGN',
  },
  departureTime: {
    type: String,
    default: '22:05',
  },
  arrivalTime: {
    type: String,
    default: '00:20',
  },
  durationText: {
    type: String,
    default: '2h 15m',
  },
  stopNum: {
    type: Number,
    default: 0,
  },
  stopPoints: {
    type: Array,
    default: () => [],
  },
  fareClass: {
    type: String,
    default: 'Economy Saver',
  },
  priceText: {
    type: String,
    default: '1.326.440 đ',
  },
  fareConditions: {
    type: Array,
    default: () => [
      'Giá vé đã bao gồm thuế và phí cơ bản.',
      'Không hoàn vé sau khi xuất vé.',
      'Đổi lịch bay có thể mất phí theo quy định của hãng.',
      'Hành lý ký gửi tùy theo điều kiện hạng vé.',
    ],
  },
})

const isDetailOpen = ref(false)

const hasStop = computed(() => props.stopNum > 0)

const stopLabel = computed(() => {
  return props.stopNum === 0
    ? 'Bay thẳng'
    : `${props.stopNum} điểm dừng`
})

const stopPointText = computed(() => {
  if (!hasStop.value) return ''

  return props.stopPoints
    .map(stop => `${stop.airport} (${stop.duration})`)
    .join(' • ')
})

const routeLineClass = computed(() => {
  return hasStop.value
    ? 'border-solid border-amber-300'
    : 'border-dashed border-gray-300'
})

const planeClass = computed(() => {
  return hasStop.value
    ? 'text-amber-500'
    : 'text-gray-400'
})

const stopDotClass = computed(() => {
  return hasStop.value
    ? 'border-amber-400'
    : 'border-gray-300'
})
</script>
