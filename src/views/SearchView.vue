<template>
  <section class="sticky top-19 z-40 bg-primary lg:bg-body-bg text-white lg:text-black px-4 py-3">
    <div class="max-w-6xl mx-auto">

      <!-- Mobile -->
      <div class="flex items-center md:hidden">

        <!-- Back -->
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" class="mr-3 text-xl shrink-0">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </router-link>

        <!-- Content -->
        <div class="flex-1 min-w-0 text-center">
          <div class="font-bold text-lg truncate">
            Hà Nội đi TP. Hồ Chí Minh
          </div>

          <div class="text-sm flex items-center justify-center gap-1 text-blue-100">
            <span class="truncate">Thứ 3, 23 tháng 06</span>
            <span>·</span>
            <span>1 khách</span>
            <span>·</span>
            <span>Khứ hồi</span>

            <button class="ml-1 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center">
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- Desktop -->
      <form
        class="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">

        <div class="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Điểm đi</label>
            <input type="text" placeholder="Hà Nội (HAN)"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
          </div>
          <div class="flex flex-col">
            <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Điểm đến</label>
            <input type="text" placeholder="TP. HCM (SGN)"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
          </div>
        </div>

        <div class="flex flex-col">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Ngày đi - Về</label>
          <input type="date"
            class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
        </div>

        <div class="flex flex-col">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Hành khách</label>
          <select
            class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option>1 người lớn</option>
            <option>2 người lớn</option>
          </select>
        </div>

        <button type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-95">
          Tìm kiếm
        </button>
      </form>

    </div>
  </section>

  <div class="grid grid-cols-1 md:grid-cols-4 p-6 bg-gray-50">
    <!-- Sidebar bộ lọc -->
    <FlightFilter />

    <!-- Danh sách chuyến bay -->
    <section class="col-span-1 md:col-span-3 space-y-8 lg:space-y-0">
      <div class="grid gap-8 lg:gap-6" :class="tripType === 'roundTrip'
        ? 'grid-cols-1 lg:grid-cols-2'
        : 'grid-cols-1'">
        <!-- ==================== CHUYẾN BAY ĐI ==================== -->
        <section>
          <h2 class="text-xl font-bold mb-5 text-gray-900">Chuyến bay đi</h2>
          <ul class="space-y-4">
            <FlightCard :stop-count="1" />
            <FlightCard :stop-count="2" />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
          </ul>
        </section>

        <!-- ==================== CHUYẾN BAY VỀ ==================== -->
        <section v-if="tripType === 'roundTrip'">
          <h2 class="text-xl font-bold mb-5 text-gray-900">Chuyến bay về</h2>
          <ul class="space-y-4">
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import FlightFilter from '@/components/FlightFilter.vue';
import FlightCard from '@/components/FlightCard.vue';

const tripType = 'oneWay'
</script>
