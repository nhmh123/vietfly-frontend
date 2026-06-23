<template>
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img src="../assets/images/vietfly.png" alt="VietFly Logo" class="w-15 h-15 object-contain" />

        <div>
          <div class="text-2xl font-bold text-primary">
            VietFly
          </div>

          <div class="text-[10px] text-gray-500 tracking-wider">
            SMART AIRLINE BOOKING SYSTEM
          </div>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8 text-base font-semibold sticky top-0">
        <a href="#" class="text-gray-800 hover:text-primary transition-colors active">Trang Chủ</a>
        <a href="#" class="text-gray-800 hover:text-primary transition-colors">Vé Nội Địa</a>
        <a href="#" class="text-gray-800 hover:text-primary transition-colors">Vé Quốc Tế</a>
        <a href="#" class="text-gray-800 hover:text-primary transition-colors">Khuyến Mãi</a>
        <a href="#" class="text-gray-800 hover:text-primary transition-colors">Tin Tức</a>
        <a href="#" class="text-gray-800 hover:text-primary transition-colors">Liên Hệ</a>
      </nav>

      <!-- Right Side - Desktop -->
      <div class="hidden lg:flex items-center">
        <a href="#" class="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:text-primary transition">
          <i class="fa-regular fa-user text-lg"></i>
          <span class="font-medium">Đăng nhập</span>
        </a>
      </div>

      <!-- Mobile Right Side -->
      <div class="flex items-center gap-3 lg:hidden">
        <!-- Hamburger -->
        <button @click="toggleMobileMenu" class="text-3xl text-gray-700 p-2">
          <i class="fa-solid" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen"
        class="lg:hidden bg-white px-5 pb-6 flex flex-col gap-4 font-medium shadow-lg w-full">
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Trang Chủ</a>
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Vé Nội Địa</a>
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Vé Quốc Tế</a>
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Khuyến Mãi</a>
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Tin Tức</a>
        <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Liên Hệ</a>
        <div class="flex flex-col gap-3">
          <button class="w-full py-4 bg-primary text-white font-semibold rounded-2xl text-base sm:text-lg">
            Đăng Nhập
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
