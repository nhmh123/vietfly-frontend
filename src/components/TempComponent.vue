<template>
  <section class="sticky top-19 z-40 bg-primary md:bg-body-bg text-white lg:text-black px-4 py-3 md:mt-4 w-full">
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
</template>

<script setup>

</script>
