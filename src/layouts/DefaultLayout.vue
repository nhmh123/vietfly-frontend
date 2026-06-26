<template>
  <div class="bg-body-bg">
    <TheTopBar />
    <TheHeader />
    <main class="max-w-7xl mx-auto ">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheTopBar from '@/components/TheTopBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
