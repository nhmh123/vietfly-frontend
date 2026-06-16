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
  min-height: 500px;
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
  background:
    linear-gradient(rgba(147, 167, 185, 0.2), rgba(0, 94, 184, 0.2)), url('/src/assets/hero-4.png');
  background-size: cover;
  background-position: center;
  padding: 40px 0px;
}

.hero-container {
  max-width: 1200px; /* Độ rộng tối đa của nội dung */
  margin: 0 auto; /* Căn giữa cả cụm so với màn hình */
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Đẩy form sang trái, text sang phải */
  gap: 40px; /* Khoảng cách giữa form và text */
  padding: 0 20px; /* Padding đề phòng màn hình nhỏ */
  width: 100%;
}

.hero-left {
  flex: 2; /* Form chiếm 50% */
  max-width: 800px; /* Giới hạn form không quá to */
}

.hero-right {
  flex: 1; /* Text chiếm 50% */
  color: var(--text-dark);
}

/* Responsive cho điện thoại: Stack theo chiều dọc */
@media (max-width: 968px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  .hero-left {
    max-width: 100%;
  }
}

.hero-badge {
  display: inline-flex;
  width: fit-content;
  background: #fff6d6;
  color: #b8860b;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 14px;
  color: black;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
}
</style>
