<template>
  <div class="w-full overflow-x-hidden">
    <!-- Top Bar -->
    <div class="bg-[#1e3a8a] text-white text-sm font-semibold py-3">
      <div class="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
        <div>Giờ làm việc: 08:00 - 22:00 (T2 - CN)</div>
        <div class="flex items-center gap-4">
          <span>Hotline: 1900 6868</span>
          <span class="hidden sm:inline">|</span>
          <span>support@vietfly.vn</span>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="bg-white sticky top-0 z-50 shadow-sm overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="../assets/vietfly.png" alt="VietFly Logo" class="w-10 h-10 object-contain" />
          <div>
            <div class="text-2xl font-bold text-[#1e3a8a]">VietFly</div>
            <div class="text-[10px] text-gray-500 tracking-wider">SMART AIRLINE BOOKING SYSTEM</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8 text-base font-semibold">
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors active">Trang Chủ</a>
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors">Vé Nội Địa</a>
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors">Vé Quốc Tế</a>
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors">Khuyến Mãi</a>
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors">Tin Tức</a>
          <a href="#" class="text-gray-800 hover:text-[#1e3a8a] transition-colors">Liên Hệ</a>
        </nav>

        <!-- Right Side - Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <button class="px-5 py-3 bg-[#1e3a8a] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition">
            Đăng Nhập
          </button>
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
          class="lg:hidden bg-white border-t px-5 py-6 flex flex-col gap-4 font-medium shadow-lg">
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Trang Chủ</a>
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Vé Nội Địa</a>
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Vé Quốc Tế</a>
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Khuyến Mãi</a>
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Tin Tức</a>
          <a href="#" class="py-2 text-gray-800 text-base lg:text-lg truncate">Liên Hệ</a>
          <div class="flex flex-col gap-3">
            <button class="w-full py-4 bg-[#1e3a8a] text-white font-semibold rounded-2xl text-base sm:text-lg">
              Đăng Nhập
            </button>
          </div>
        </div>
      </transition>
    </header>
  </div>
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
