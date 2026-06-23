<template>
  <div class="flex gap-6">
    <!-- ==================== SIDEBAR PC (giữ nguyên) ==================== -->
    <aside class="hidden md:block w-80 bg-white border border-gray-200 rounded-2xl p-5 h-fit sticky top-6">
      <h2 class="font-bold text-xl mb-5">Bộ lọc</h2>

      <!-- Điểm dừng -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <i class="fa-solid fa-map-pin text-gray-500"></i>
          <span class="font-semibold">Điểm dừng</span>
        </div>
        <div class="space-y-3">
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" class="w-5 h-5 accent-blue-600" />
            <span>Chỉ bay thẳng (21)</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" class="w-5 h-5 accent-blue-600" />
            <span>Tối đa 1 điểm dừng (22)</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" class="w-5 h-5 accent-blue-600" />
            <span>Số điểm dừng bất kỳ (44)</span>
          </label>
        </div>
      </div>

      <!-- Hãng hàng không -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <i class="fa-solid fa-plane text-gray-500"></i>
          <span class="font-semibold">Hãng hàng không</span>
        </div>
        <div class="space-y-3">
          <label v-for="airline in airlines" :key="airline.name"
            class="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-xl">
            <div class="flex items-center gap-3">
              <input type="checkbox" class="w-5 h-5 accent-blue-600" :checked="selectedAirlines.includes(airline.name)"
                @change="toggleAirline(airline.name)" />
              <span>{{ airline.name }}</span>
            </div>
            <span class="text-gray-500 text-sm">{{ airline.price }}</span>
          </label>
        </div>
      </div>

      <div class="mt-8 flex gap-3">
        <button @click="resetFilter" class="flex-1 py-3 border border-gray-300 rounded-2xl font-medium">
          Xóa lọc
        </button>
        <button @click="applyFilter" class="flex-1 py-3 bg-orange-500 text-white rounded-2xl font-semibold">
          Áp dụng
        </button>
      </div>
    </aside>

    <div class="md:hidden">
      <button @click="openSheet"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white shadow-xl border border-gray-200 rounded-full px-6 py-3 text-blue-600 font-medium">
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
          <div class="px-5 pb-3 flex justify-between items-center border-b">
            <h2 class="text-lg font-bold">Tùy chỉnh lựa chọn bay</h2>
            <button @click="closeSheet" class="text-gray-500 text-2xl leading-none">✕</button>
          </div>

          <!-- Content - Giảm padding -->
          <div class="flex-1 overflow-auto p-4 space-y-6">
            <!-- Điểm dừng -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-map-pin text-gray-500"></i>
                <span class="font-semibold">Điểm dừng</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button class="py-3.5 border-2 border-secondary text-secondary font-medium rounded-2xl text-sm">
                  Chỉ bay thẳng (21)
                </button>
                <button class="py-3.5 border border-gray-300 hover:border-gray-400 rounded-2xl text-sm">
                  Tối đa 1 điểm dừng (22)
                </button>
                <button class="col-span-2 py-3.5 border border-gray-300 hover:border-gray-400 rounded-2xl text-sm">
                  Số điểm dừng bất kỳ (44)
                </button>
              </div>
            </div>

            <!-- Hãng hàng không -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-plane text-gray-500"></i>
                <span class="font-semibold">Hãng hàng không</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button v-for="airline in airlines" :key="airline.name" @click="toggleAirline(airline.name)"
                  class="p-3.5 border border-gray-300 rounded-2xl text-left transition text-sm"
                  :class="{ 'border-secondary bg-blue-50': selectedAirlines.includes(airline.name) }">
                  <div class="font-medium">{{ airline.name }}</div>
                  <div class="text-xs text-gray-500">{{ airline.price }}</div>
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="p-4 border-t bg-white flex gap-3">
            <button @click="resetFilter" class="flex-1 py-3.5 border border-gray-300 rounded-2xl font-medium text-sm">
              Xóa lọc
            </button>
            <button @click="applyFilter"
              class="flex-1 py-3.5 bg-secondary text-white rounded-2xl font-semibold text-sm">
              Xem 44 chuyến bay
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedAirlines = ref([])

const airlines = [
  { name: 'VietJetAir', price: '2.100.000 ₫' },
  { name: 'Vietravel Airlines', price: '2.264.000 ₫' },
  { name: 'Vietnam Airlines', price: '2.806.000 ₫' },
  { name: 'Thai Airways', price: '4.700.000 ₫' },
  // thêm các hãng khác nếu cần
]

const openSheet = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeSheet = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const toggleAirline = (name) => {
  if (selectedAirlines.value.includes(name)) {
    selectedAirlines.value = selectedAirlines.value.filter(a => a !== name)
  } else {
    selectedAirlines.value.push(name)
  }
}

const resetFilter = () => selectedAirlines.value = []
const applyFilter = () => {
  console.log('Filters:', selectedAirlines.value)
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
