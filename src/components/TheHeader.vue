<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-container">
        <div class="top-left">
          <span>Giờ làm việc: 08:00 - 22:00 (T2 - CN)</span>
        </div>
        <div class="top-right">
          <span>Hotline: 1900 6868</span>
          |
          <span>support@vietfly.vn</span>
        </div>
      </div>
    </div>
    <header>
      <div class="header-container">
        <div class="logo">
          <img src="../assets/vietfly.png" alt="VietFly Logo" />
          <div class="logo-text">
            <div class="logo-title">VietFly</div>
            <div class="logo-subtitle">SMART AIRLINE BOOKING SYSTEM</div>
          </div>
        </div>
        <nav class="main-nav">
          <a href="#" class="active">Trang Chủ</a>
          <a href="#">Vé Nội Địa</a>
          <a href="#">Vé Quốc Tế</a>
          <a href="#">Khuyến Mãi</a>
          <a href="#">Tin Tức</a>
          <a href="#">Liên Hệ</a>
        </nav>
        <div class="header-right">
          <button class="btn-booking">Quản Lý Đặt Chỗ</button>
          <button class="btn-login">Đăng Nhập</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
</script>

<style scoped>
.top-bar {
  background: var(--secondary);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
}

.top-bar-container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.top-left,
.top-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

header {
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.header-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--secondary);
  line-height: 1;
}

.logo-subtitle {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
  letter-spacing: 0.5px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
  position: relative;
  transition: 0.2s;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--secondary);
}

.main-nav a.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  border-radius: 10px;
  background: var(--primary);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-login {
  background: var(--secondary);
  color: var(--white);
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  transition: 0.2s;
}

.btn-login:hover {
  background: var(--secondary-dark);
}

.btn-booking {
  background: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  transition: 0.2s;
}

.btn-booking:hover {
  background: var(--secondary);
  color: var(--white);
}

@media (max-width: 992px) {
  .main-nav {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-bar-container,
  .header-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .header-right {
    width: 100%;
  }
  .btn-login,
  .btn-booking {
    flex: 1;
  }
}
</style>
