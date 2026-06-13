<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-left">
        <BookingForm />
      </div>

      <div class="hero-right">
        <!-- <h1 class="hero-title">Bay thông minh cùng VietFly</h1>
        <p class="hero-subtitle">Hệ thống đặt vé máy bay hiện đại, giá tốt, thanh chóng</p> -->
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
  min-height: 600px;
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
  background:
    linear-gradient(rgba(147, 167, 185, 0), rgba(0, 94, 184, 0)), url('/src/assets/hero-4.png');
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

.hero-title {
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 14px;
  color: var(--white);
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
