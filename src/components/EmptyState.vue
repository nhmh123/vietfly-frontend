<template>
  <div class="bg-white border border-gray-200 rounded-2xl px-6 py-12 text-center">
    <div class="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
      <i :class="[icon, 'text-2xl text-primary']"></i>
    </div>

    <h3 class="mt-5 text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-500 max-w-md mx-auto">
      {{ message }}
    </p>

    <button v-if="actionText" type="button"
      class="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition"
      @click="$emit('action')">
      <i class="fa-solid fa-rotate-left text-xs"></i>
      {{ actionText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: 'fa-solid fa-plane-circle-xmark',
  },
  title: {
    type: String,
    default: 'Không có dữ liệu',
  },
  message: {
    type: String,
    default: 'Hiện chưa có dữ liệu để hiển thị.',
  },
  actionText: {
    type: String,
    default: '',
  },
})

defineEmits(['action'])
</script>
