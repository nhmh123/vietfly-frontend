<template>
  <li class="relative px-2 pb-4 lg:px-4 lg:pb-4 bg-white border border-secondary rounded-xl transition-all" :class="{
    'opacity-50 pointer-events-none': disabled
  }">
    <article class="flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <img src="https://latestlogo.com/wp-content/uploads/2025/10/sun-phuquoc-airways-logo-scaled.png"
          alt="Sun Phu Quoc Airways" class="w-20 h-20 object-contain rounded" />
        <div class="flex-1">
          <p class="font-semibold text-gray-800">Sun Phu Quoc Airways</p>
          <p class="text-sm text-gray-600">Máy bay 32Q • Economy Classic (T)
            <!-- <a href="#" class="text-blue-500 hover:underline">Gói giá khác ></a> -->
          </p>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="text-center">
          <time class="text-xl font-bold">23:30</time>
          <p class="text-sm text-gray-500">SGN T3</p>
        </div>

        <div class="flex flex-col items-center flex-1 px-4">
          <span class="text-sm text-gray-500">2g10p</span>

          <div class="w-full border-t border-gray-300 relative my-2">
            <i class="fa-solid fa-plane absolute -top-2 left-1/2 -translate-x-1/2 text-gray-400 bg-white px-1">
            </i>
          </div>

          <p class="text-xs font-medium" :class="stopCount === 0 ? 'text-green-600' : 'text-orange-500'">
            {{
              stopCount === 0
                ? 'Bay thẳng'
                : `${stopCount} điểm dừng`
            }}
          </p>
        </div>

        <div class="text-center">
          <time class="text-xl font-bold">01:40</time>
          <p class="text-sm text-gray-500">HAN T1</p>
        </div>
      </div>

      <div class="flex justify-between items-end border-t pt-4">
        <div class="flex gap-3 text-gray-600 text-sm">
          <span title="Xách tay"><i class="fa-solid fa-briefcase"></i> 07kg</span>
          <span title="Ký gửi"><i class="fa-solid fa-suitcase-rolling"></i> 23kg</span>
          <span title="Suất ăn"><i class="fa-solid fa-utensils"></i></span>
        </div>

        <div class="text-right">
          <p class="text-xs text-gray-500">Giá vé</p>
          <p class="text-xl font-bold text-gray-900">2.007.000 đ <span class="text-xs text-primary cursor-pointer">Chi
              tiết ⌵</span></p>
          <button class="mt-2 w-full px-8 py-2 font-bold rounded-lg transition" :class="disabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-secondary text-white hover:bg-secondary-dark'
            ">
            {{ disabled ? 'Đã chọn' : 'Chọn' }}
          </button>
        </div>
      </div>
    </article>
  </li>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  stopCount: {
    type: Number,
    default: 0
  }
})
</script>
