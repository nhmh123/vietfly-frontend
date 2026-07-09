<template>
  <div class="bg-white shadow-md overflow-hidden">
    <div class="flex items-stretch">
      <button @click="scroll('left')" class="text-primary hover:bg-gray-100 px-3 rounded cursor-pointer">
        <i class="fas fa-chevron-left"></i>
      </button>

      <div class="flex flex-1 overflow-hidden mx-2">
        <div v-for="date in dateRangeList" :key="date.fullDate"
          class="flex-1 min-w-0 flex flex-col items-center justify-center px-2 py-2 transition-colors" :class="[isPastDate(date.fullDate) ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
            : isSelected(date.fullDate) ? 'bg-primary text-white font-bold cursor-pointer' : 'text-dark hover:bg-gray-100 cursor-pointer'
          ]" @click="!isPastDate(date.fullDate) && $emit('select-date', date.fullDate)">
          <span class="text-base uppercase truncate">{{ date.dayName }}</span>
          <span class="text-base truncate">{{ date.displayDate }}</span>
        </div>
      </div>

      <button @click="scroll('right')" class="text-primary hover:bg-gray-100 px-3 rounded cursor-pointer">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  startDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  selectedDate: { type: Date, default: null }
});

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const isPastDate = (date) => {
  const today = startOfDay(new Date());
  const targetDate = startOfDay(date);

  return targetDate < today;
};

// Hàm tạo danh sách ngày từ startDate đến returnDate
const dateRangeList = computed(() => {
  const dates = [];
  let current = new Date(props.startDate);

  while (current <= props.returnDate) {
    dates.push({
      fullDate: new Date(current),
      dayName: current.toLocaleDateString('vi-VN', { weekday: 'short' }), // T2, T3...
      displayDate: current.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }) // 10/07
    });
    current.setDate(current.getDate() + 1);
  }
  return dates;
});

const isSelected = (date) => {
  return props.selectedDate &&
    startOfDay(date).getTime() === startOfDay(props.selectedDate).getTime();
};

const scroll = (direction) => { /* Xử lý scroll ngang nếu list dài */ };
</script>
