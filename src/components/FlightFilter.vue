<template>
  <div class="hidden md:flex items-center gap-3 mb-5">
    <div class="w-1 h-7 rounded-full bg-primary"></div>

    <h2 class="text-2xl font-bold text-gray-900">
      Bộ lọc
    </h2>
  </div>
  <div class="flex gap-6">
    <!-- ==================== SIDEBAR PC ==================== -->
    <aside class="hidden md:block w-full bg-white border border-gray-200 rounded-2xl p-5 h-fit">

      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <i class="fa-solid fa-arrow-down-wide-short text-gray-500"></i>
          <span class="font-semibold">Sắp xếp</span>
        </div>

        <div class="space-y-3">
          <label v-for="option in sortOptions" :key="option.value" class="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="sort" class="w-5 h-5 accent-blue-600" :checked="selectedSort === option.value"
              @change="selectSort(option.value)" />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>

      <!-- Stop Points -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <i class="fa-solid fa-map-pin text-gray-500"></i>
          <span class="font-semibold">Điểm dừng</span>
        </div>

        <div class="space-y-2">
          <label v-for="option in stopPointOptions" :key="option.value"
            class="flex items-center justify-between rounded-xl border p-3 cursor-pointer transition-all" :class="selectedStopPoint === option.value
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300'
              ">
            <div class="flex items-center gap-3">
              <input type="radio" name="stop-point" class="w-4 h-4 accent-primary"
                :checked="selectedStopPoint === option.value" @change="selectStopPoint(option.value)" />

              <span :class="selectedStopPoint === option.value
                ? 'text-primary font-medium'
                : 'text-gray-700'
                ">
                {{ option.label }}
              </span>
            </div>

            <span class="text-sm text-gray-500">
              ({{ option.count }})
            </span>
          </label>
        </div>
      </div>

      <!-- Airlines -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <i class="fa-solid fa-plane text-gray-500"></i>
          <span class="font-semibold">Hãng hàng không</span>
        </div>
        <div class="space-y-3">
          <label v-for="airline in airlines" :key="airline.code"
            class="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-xl">
            <div class="flex items-center gap-3">
              <input type="checkbox" class="w-5 h-5 accent-blue-600" :checked="selectedAirlines.includes(airline.code)"
                @change="toggleAirline(airline.code)" />
              <span>{{ airline.name }}</span>
            </div>
            <span class="text-gray-500 text-sm">Từ {{ formatCurrency(airline.minPrice) }}</span>
          </label>
        </div>
      </div>

      <div class="mt-8 flex gap-3">
        <button @click="resetFilter" class="cursor-pointer flex-1 py-3 border border-gray-300 rounded-2xl font-medium">
          Xóa lọc
        </button>
        <button @click="applyFilter"
          class="cursor-pointer flex-1 py-3 bg-primary hover:bg-primary-dark text-white rounded-2xl font-semibold">
          Áp dụng
        </button>
      </div>
    </aside>

    <!-- ==================== SIDEBAR MOBILE ==================== -->
    <div class="md:hidden">
      <button @click="openSheet"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white shadow-xl border border-gray-200 rounded-full px-6 py-3 text-primary font-medium">
        <i class="fa-solid fa-filter"></i>
        <span>Lọc</span>
      </button>

      <transition name="fade">
        <div v-if="isOpen" @click="closeSheet" class="fixed inset-0 bg-black/60 z-50"></div>
      </transition>

      <transition name="slide-up">
        <div v-if="isOpen"
          class="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[78vh] flex flex-col">
          <!-- Handle -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-10 h-1 bg-gray-300 rounded-full"></div>
          </div>

          <!-- Header -->
          <div class="px-5 pb-3 flex justify-between items-center">
            <h2 class="text-lg font-bold">Tùy chỉnh lựa chọn bay</h2>
            <button @click="closeSheet" class="text-gray-500 text-2xl leading-none">✕</button>
          </div>

          <div class="flex-1 overflow-auto p-4 space-y-6">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-arrow-down-wide-short text-gray-500"></i>
                <span class="font-semibold">Sắp xếp</span>
              </div>

              <div class="grid grid-cols-1 gap-2">
                <button v-for="option in sortOptions" :key="option.value" type="button"
                  @click="selectSort(option.value)"
                  class="flex items-center justify-between p-3.5 border rounded-2xl text-left transition text-sm"
                  :class="selectedSort === option.value
                    ? 'border border-primary text-primary font-medium'
                    : 'border border-gray-300 hover:border-gray-400 text-gray-700'
                    ">
                  <span class="font-medium">{{ option.label }}</span>

                  <i v-if="selectedSort === option.value" class="fa-solid fa-check text-primary"></i>
                </button>
              </div>
            </div>

            <!-- Stop Point -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-map-pin text-gray-500"></i>
                <span class="font-semibold">Điểm dừng</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button v-for="option in stopPointOptions" :key="option.value" type="button"
                  @click="selectStopPoint(option.value)" class="py-3.5 rounded-2xl text-sm transition-all" :class="selectedStopPoint === option.value
                    ? 'border border-primary text-primary font-medium'
                    : 'border border-gray-300 hover:border-gray-400 text-gray-700'">
                  {{ option.label }} ({{ option.count }})
                </button>
              </div>
            </div>

            <!-- Airlines -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-plane text-gray-500"></i>
                <span class="font-semibold">Hãng hàng không</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button v-for="airline in airlines" :key="airline.code" @click="toggleAirline(airline.code)"
                  class="p-3.5 border border-gray-300 rounded-2xl text-left transition text-sm"
                  :class="{ 'border-primary bg-blue-50': selectedAirlines.includes(airline.code) }">
                  <div class="font-medium">{{ airline.name }}</div>
                  <div class="text-xs text-gray-500">{{ airline.price }}</div>
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="p-4 bg-white flex gap-3">
            <button @click="resetFilter"
              class="cursor-pointer flex-1 py-3.5 border border-gray-300 rounded-2xl font-medium text-sm">
              Xóa lọc
            </button>
            <button @click="applyFilter"
              class="cursor-pointer flex-1 py-3.5 bg-primary text-white rounded-2xl font-semibold text-sm">
              Xem 44 chuyến bay
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { formatCurrency } from '@/utils/currency'

const emit = defineEmits([
  'update:selectedSort',
  'update:selectedStopPoint',
  'update:selectedAirlines',
  'reset',
])
const props = defineProps({
  airlines: {
    type: Array,
    default: () => [],
  },
  sortOptions: {
    type: Array,
    default: () => [],
  },
  stopPointOptions: {
    type: Array,
    default: () => [],
  },
  selectedSort: {
    type: String,
    default: 'recommended',
  },
  selectedStopPoint: {
    type: String,
    default: 'all',
  },
  selectedAirlines: {
    type: Array,
    default: () => [],
  },
})

const isOpen = ref(false);

const selectSort = (value) => {
  emit('update:selectedSort', value);
}

const selectStopPoint = (value) => {
  emit('update:selectedStopPoint', value)
}
const openSheet = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeSheet = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const toggleAirline = (code) => {
  const selected = [...props.selectedAirlines]

  const index = selected.indexOf(code)

  if (index >= 0) {
    selected.splice(index, 1)
  } else {
    selected.push(code)
  }

  emit('update:selectedAirlines', selected)
}

const resetFilter = () => {
  emit('reset')
}
const applyFilter = () => {
  closeSheet()
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
