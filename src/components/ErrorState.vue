<template>
  <div class="bg-white border border-red-100 shadow-md px-6 py-12 text-center">
    <div class="mx-auto w-16 h-16 bg-red-50 flex items-center justify-center">
      <i class="fa-solid fa-triangle-exclamation text-2xl text-red-500"></i>
    </div>

    <h3 class="mt-5 text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-500 max-w-md mx-auto">
      {{ message }}
    </p>

    <p v-if="errorCode" class="mt-2 text-xs text-gray-400">
      Mã lỗi: {{ errorCode }}
    </p>

    <button type="button"
      class="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition active:scale-95 cursor-pointer"
      @click="$emit('retry')">
      <i class="fa-solid fa-rotate-right text-xs"></i>
      Thử lại
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Không thể tải dữ liệu',
  },
  message: {
    type: String,
    default: 'Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau.',
  },
  errorCode: {
    type: String,
    default: '',
  },
})

defineEmits(['retry'])
</script>
