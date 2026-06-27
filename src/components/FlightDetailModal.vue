<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
    @click.self="closeModal">
    <div class="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
      <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <div>
          <h3 class="text-lg font-bold text-gray-900">Chi tiết chuyến bay</h3>
          <p class="text-gray-500">{{ airlineName }} • {{ flightNumber }}</p>
        </div>

        <button type="button" class="cursor-pointer text-gray-400 hover:text-gray-700" @click="closeModal">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <div class="px-6 py-5 space-y-5">
        <div class="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-2xl font-bold text-gray-900">{{ departureTime }}</p>
              <p class="text-sm font-medium text-gray-600">{{ origin }}</p>
            </div>

            <div class="flex-1 px-4 text-center">
              <p class="text-sm text-gray-500">{{ durationText }}</p>
              <div class="my-2 border-t-2 border-dashed border-gray-300"></div>
              <p class="text-sm font-medium" :class="hasStop ? 'text-amber-600' : 'text-green-600'">
                {{ stopLabel }}
              </p>
            </div>

            <div class="text-right">
              <p class="text-2xl font-bold text-gray-900">{{ arrivalTime }}</p>
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
            <p class="text-basic text-gray-400">Hãng bay</p>
            <p class="mt-1 font-medium text-gray-800">{{ airlineName }}</p>
          </div>

          <div>
            <p class="text-basic text-gray-400">Số hiệu chuyến bay</p>
            <p class="mt-1 font-medium text-gray-800">{{ flightNumber }}</p>
          </div>

          <div>
            <p class="text-basic text-gray-400">Máy bay</p>
            <p class="mt-1 font-medium text-gray-800">{{ aircraft }}</p>
          </div>

          <div>
            <p class="text-basic text-gray-400">Hạng vé</p>
            <p class="mt-1 font-medium text-gray-800">{{ fareClass }}</p>
          </div>
        </div>

        <div class="rounded-xl border-gray-100 bg-gray-50 p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-basic font-semibold text-gray-900">Điều kiện giá vé</p>
              <ul class="mt-2 space-y-1 text-basic text-gray-600">
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
          class="rounded-xl cursor-pointer border border-gray-200 px-5 py-2 font-medium text-gray-600 hover:bg-gray-50"
          @click="closeModal">
          Đóng
        </button>

        <button type="button"
          class="rounded-xl cursor-pointer bg-primary px-5 py-2 font-semibold text-white hover:bg-primary-dark">
          Chọn chuyến này
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  airlineName: String,
  flightNumber: String,
  aircraft: String,
  origin: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  durationText: String,
  stopNum: Number,
  stopPoints: {
    type: Array,
    default: () => [],
  },
  fareClass: String,
  priceText: String,
  fareConditions: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const hasStop = computed(() => props.stopNum > 0)
const stopLabel = computed(() =>
  hasStop.value
    ? `${props.stopNum} điểm dừng`
    : 'Bay thẳng'
)

const emit = defineEmits(['update:modelValue'])

function closeModal() {
  emit('update:modelValue', false)
}
</script>
