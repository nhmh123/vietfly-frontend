<template>
  <div class="bg-body-bg">
    <TheTopBar />
    <div class="min-h-screen flex flex-col">
      <TheHeader />

      <main class="flex-1">
        <div class="max-w-7xl mx-auto">
          <router-view />
        </div>
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import TheTopBar from '@/components/TheTopBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
