<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-left">
        <BookingForm />
      </div>

      <div class="hero-right flex flex-col justify-center px-8">
        <!-- <span class="hero-badge"> ✈ Smart Airline Booking Platform </span>
        <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Bay thông minh <br />
          cùng VietFly
        </h1>
        <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md">
          Hệ thống đặt vé máy bay hiện đại, giá tốt, thanh toán nhanh chóng. Trải nghiệm hành trình
          trọn vẹn cùng gia đình bạn.
        </p> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import BookingForm from '@/components/BookingForm.vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  /* Dùng 100vh để ảnh luôn lấp đầy màn hình */
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Cấu hình background chuẩn */
  background: linear-gradient(rgba(147, 167, 185, 0.3), rgba(0, 94, 184, 0.3)),
    url('/src/assets/hero-4.png') no-repeat center center;
  background-size: cover;
  /* Quan trọng nhất để ảnh không méo */

  /* Thêm thuộc tính này nếu muốn ảnh "tĩnh" khi cuộn */
  /* background-attachment: fixed; */

  padding: 40px 20px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* Căn giữa theo chiều dọc các item con */
  gap: 40px;
  width: 100%;
}

.hero-left {
  flex: 2;
  /* Thay vì flex: 2, dùng 1 để cân đối hơn */
  max-width: 700px;
}

.hero-right {
  flex: 1;
}

/* Đảm bảo hình ảnh không bị "nở" theo form */
@media (max-width: 968px) {
  .hero-container {
    flex-direction: column;
  }
}
</style>
