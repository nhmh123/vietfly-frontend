<template>
  <section
    class="sticky top-19 z-40 bg-primary md:bg-body-bg text-white lg:text-black px-4 py-3 md:px-0 md:py-0 md:mt-4 w-full">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center md:hidden">
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" class="mr-3 text-xl shrink-0 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </router-link>
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
            <button class="ml-1 w-5 h-5  bg-primary flex items-center justify-center">
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Flight type -->
      <div class="shrink-0">
        <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 block">
          Loại chuyến
        </label>

        <div class="flex gap-3 items-center">
          <label class="flex items-center cursor-pointer gap-1.5 text-sm font-medium">
            <input type="radio" name="flightType" v-model="flightType" value="one-way" class="accent-primary" />
            Một chiều
          </label>

          <label class="flex items-center cursor-pointer gap-1.5 text-sm font-medium">
            <input type="radio" name="flightType" v-model="flightType" value="round-trip" class="accent-primary" />
            Khứ hồi
          </label>
        </div>
      </div>
      <form class="hidden md:flex items-end gap-3 bg-white px-5 py-4 shadow-lg border border-gray-100">

        <!-- Origin -->
        <div class="flex-1 min-w-[160px]">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 block">
            Điểm đi
          </label>
          <input type="text" placeholder="Hà Nội (HAN)"
            class="w-full h-[46px] px-3 bg-gray-50 border border-gray-200 outline-none" />
        </div>

        <!-- Destination -->
        <div class="flex-1 min-w-[160px]">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 block">
            Điểm đến
          </label>
          <input type="text" placeholder="TP. HCM (SGN)"
            class="w-full h-[46px] px-3 bg-gray-50 border border-gray-200 outline-none" />
        </div>

        <!-- Date -->
        <div class="w-[260px] shrink-0">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 block">
            Ngày đi - về
          </label>

          <VueDatePicker v-if="flightType === 'round-trip'" :locale="vi" v-model="dateRange" range
            :enable-time-picker="false" format="dd/MM/yyyy" placeholder="Chọn ngày đi - về" class="w-full" />

          <VueDatePicker v-else :locale="vi" v-model="dateSingle" :enable-time-picker="false" format="dd/MM/yyyy"
            placeholder="Chọn ngày đi" class="w-full" />
        </div>

        <!-- Passenger -->
        <div class="w-[150px] shrink-0">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 block">
            Hành khách
          </label>
          <select class="w-full h-[46px] px-3 bg-gray-50 border border-gray-200 outline-none">
            <option>1 người lớn</option>
            <option>2 người lớn</option>
          </select>
        </div>

        <!-- Submit -->
        <button type="submit"
          class="h-[46px] shrink-0 bg-primary hover:bg-primary-dark text-white font-bold px-5 transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer">
          TÌM
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { vi } from 'date-fns/locale'

const flightType = ref('round-trip');
const dateRange = ref();
const dateSingle = ref();

watch(flightType, (newType) => {
  console.log('Flight type changed to:', newType);

  // Kiểm tra dateRange.value có tồn tại và là mảng không
  if (dateRange.value && Array.isArray(dateRange.value)) {
    const isoDates = dateRange.value
      .filter(date => date instanceof Date) // Chỉ lấy những cái là đối tượng Date
      .map(date => date.toISOString());

    console.log("Current date range ISO:", isoDates);

    // Kiểm tra an toàn trước khi truy cập index 0
    if (dateRange.value[0] instanceof Date) {
      console.log('Current departure date ISO:', dateRange.value[0].toISOString());
    }
  } else {
    console.warn("dateRange chưa được khởi tạo hoặc không phải là mảng");
  }
});

onMounted(() => {
  const start = new Date();
  // const end = new Date();
  // end.setMonth(end.getMonth() + 1);
  dateRange.value = [start, null];
});
</script>
