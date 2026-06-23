<template>
  <TheHeader />
  <main class="main-content overflow-x-hidden w-full min-h-screen">
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
