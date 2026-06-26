<template>
  <div class="bg-white border border-gray-200 rounded-xl p-3 transition-all hover:shadow-md">
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="lg:w-1/4 flex lg:flex-col items-center lg:items-start gap-3">
        <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50">
          <img src="https://download.logo.wine/logo/Vietnam_Airlines/Vietnam_Airlines-Logo.wine.png"
            class="object-contain" alt="Airline">
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
          <p class="text-sm text-left text-gray-500">
            {{ fareClass }}
          </p>

          <p class="text-2xl font-bold text-primary mt-1">
            {{ priceText }}
          </p>
        </div>

        <div class="flex flex-row items-center gap-4">
          <button type="button"
            class="inline-flex items-center gap-1.5 rounded-lg px-2 lg:px-0 py-1 text-sm text-nowrap text-gray-500 hover:bg-gray-50 hover:text-primary transition-all cursor-pointer"
            @click="isDetailOpen = true">
            <i class="fa-solid fa-circle-info"></i>
            <span>Chi tiết</span>
          </button>
          <button
            class="bg-primary hover:bg-primary-dark cursor-pointer text-white px-6 py-2 rounded-xl font-semibold transition-transform active:scale-95">
            Chọn
          </button>
        </div>
      </div>
    </div>

    <div v-if="isDetailOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      @click.self="isDetailOpen = false">
      <div class="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Chi tiết chuyến bay</h3>
            <p class="text-sm text-gray-500">{{ airlineName }} • {{ flightNumber }}</p>
          </div>

          <button type="button" class="text-gray-400 hover:text-gray-700" @click="isDetailOpen = false">
            <i class="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div class="px-6 py-5 space-y-5">
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-2xl font-semibold text-gray-900">{{ departureTime }}</p>
                <p class="text-sm font-medium text-gray-600">{{ origin }}</p>
              </div>

              <div class="flex-1 px-4 text-center">
                <p class="text-xs text-gray-500">{{ durationText }}</p>
                <div class="my-2 border-t-2 border-dashed border-gray-300"></div>
                <p class="text-xs font-medium" :class="hasStop ? 'text-amber-600' : 'text-green-600'">
                  {{ stopLabel }}
                </p>
              </div>

              <div class="text-right">
                <p class="text-2xl font-semibold text-gray-900">{{ arrivalTime }}</p>
                <p class="text-sm font-medium text-gray-600">{{ destination }}</p>
              </div>
            </div>

            <div v-if="hasStop" class="mt-4 rounded-lg bg-white px-4 py-3">
              <p class="text-sm font-medium text-gray-800">Điểm dừng</p>

              <div class="mt-2 space-y-2">
                <div v-for="(stop, index) in stopPoints" :key="index" class="flex items-center justify-between text-sm">
                  <span class="text-gray-700">{{ stop.airport }}</span>
                  <span class="text-gray-500">Dừng {{ stop.duration }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-400">Hãng bay</p>
              <p class="mt-1 font-medium text-gray-800">{{ airlineName }}</p>
            </div>

            <div>
              <p class="text-gray-400">Số hiệu chuyến bay</p>
              <p class="mt-1 font-medium text-gray-800">{{ flightNumber }}</p>
            </div>

            <div>
              <p class="text-gray-400">Máy bay</p>
              <p class="mt-1 font-medium text-gray-800">{{ aircraft }}</p>
            </div>

            <div>
              <p class="text-gray-400">Hạng vé</p>
              <p class="mt-1 font-medium text-gray-800">{{ fareClass }}</p>
            </div>
          </div>

          <div class="rounded-xl border border-orange-100 bg-orange-50 p-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-gray-900">Điều kiện giá vé</p>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li v-for="(condition, index) in fareConditions" :key="index">
                    • {{ condition }}
                  </li>
                </ul>
              </div>

              <p class="whitespace-nowrap text-2xl font-bold text-orange-600">
                {{ priceText }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
          <button type="button"
            class="rounded-xl border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            @click="isDetailOpen = false">
            Đóng
          </button>

          <button type="button"
            class="rounded-xl bg-secondary px-5 py-2 text-sm font-semibold text-white hover:bg-secondary-dark">
            Chọn chuyến này
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

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
