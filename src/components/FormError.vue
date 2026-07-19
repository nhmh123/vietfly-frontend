<!-- src/components/common/FormError.vue -->
<template>
  <div :class="[
    reserveSpace ? 'min-h-6' : '',
    wrapperClass,
  ]">
    <p v-if="message" class="text-sm font-medium italic text-red-500" role="alert" aria-live="polite">
      <span v-if="showAsterisk" aria-hidden="true">*</span>
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '',
  },

  reserveSpace: {
    type: Boolean,
    default: false,
  },

  showAsterisk: {
    type: Boolean,
    default: true,
  },

  wrapperClass: {
    type: String,
    default: 'mt-1',
  },
})
</script>
