<template>
  <div>
    <!-- Premium Agency Loading Animation -->
    <!-- <div id="preloader">
      <div class="loader-container">
        <div class="main-loader">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="plane"></div>
          <div class="loader-info">
            <h1 class="brand">VIETFLY</h1>
            <p class="subtitle">Loading Experience</p>
          </div>
        </div>
      </div>
    </div> -->

    <TheHeader />

    <TheHero />


    <!-- MAIN CONTENT -->
    <main class="main-content">
      <section class="trust-section">
        <div class="section-header">
          <span class="section-badge"> Tại sao chọn VietFly </span>
          <h2 class="section-title">Trải nghiệm đặt vé đơn giản và minh bạch</h2>
          <p class="section-description">
            Hàng nghìn hành khách lựa chọn VietFly mỗi ngày nhờ giá tốt, hỗ trợ nhanh và quy trình
            đặt vé đơn giản.
          </p>
        </div>
        <div class="trust-grid">
          <div class="trust-card">
            <div class="trust-icon">❤️</div>
            <h3 class="trust-title">Được hành khách yêu thích</h3>
            <p class="trust-description">
              Tham gia cùng hàng triệu hành khách lựa chọn VietFly cho các chuyến bay nội địa và
              quốc tế.
            </p>
          </div>
          <div class="trust-card">
            <div class="trust-icon">🎧</div>
            <h3 class="trust-title">Hỗ trợ 24/7</h3>
            <p class="trust-description">
              Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ mọi lúc, mọi nơi trong suốt hành
              trình của bạn.
            </p>
          </div>
          <div class="trust-card">
            <div class="trust-icon">💳</div>
            <h3 class="trust-title">Giá cả minh bạch</h3>
            <p class="trust-description">
              Không phụ phí ẩn. Giá hiển thị đã bao gồm đầy đủ thuế và phí.
            </p>
          </div>
          <div class="trust-card">
            <div class="trust-icon">🎁</div>
            <h3 class="trust-title">Tích điểm thưởng</h3>
            <p class="trust-description">
              Tích lũy điểm thưởng sau mỗi giao dịch để sử dụng cho các chuyến bay tiếp theo.
            </p>
          </div>
        </div>
      </section>

      <h2 class="section-title">Chặng bay phổ biến</h2>
      <div class="destinations-grid">
        <div class="destination-card">
          <div class="destination-img" style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1509060464153-44667396260f?auto=format&fit=crop&w=600&q=80');
            ">
            HÀ NỘI
          </div>
          <div class="destination-info">
            <div class="destination-route">TP.HCM → Hà Nội</div>
            <div class="destination-meta">Vietnam Airlines • Vietjet Air</div>
            <div class="destination-price-row">
              <span class="badge-promo"> Giá Rẻ </span>
              <span class="price-value"> 790.000 VNĐ </span>
            </div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-img" style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80');
            ">
            NHA TRANG
          </div>
          <div class="destination-info">
            <div class="destination-route">TP.HCM → Nha Trang</div>
            <div class="destination-meta">Vietjet Air</div>
            <div class="destination-price-row">
              <span class="badge-promo"> Tiết Kiệm </span>
              <span class="price-value"> 590.000 VNĐ </span>
            </div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-img" style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=600&q=80');
            ">
            ĐÀ NẴNG
          </div>
          <div class="destination-info">
            <div class="destination-route">Hà Nội → Đà Nẵng</div>
            <div class="destination-meta">Vietnam Airlines</div>
            <div class="destination-price-row">
              <span class="badge-promo"> Hot Deal </span>
              <span class="price-value"> 850.000 VNĐ </span>
            </div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-img" style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80');
            ">
            PHÚ QUỐC
          </div>
          <div class="destination-info">
            <div class="destination-route">TP.HCM → Phú Quốc</div>
            <div class="destination-meta">Bamboo Airways</div>
            <div class="destination-price-row">
              <span class="badge-promo"> Ưu Đãi </span>
              <span class="price-value"> 680.000 VNĐ </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================================================
   FAQ SECTION
   ========================================================================== -->
      <section class="faq-section">
        <div class="section-header">
          <span class="section-badge">Hỗ trợ khách hàng</span>
          <h2 class="section-title">Câu hỏi thường gặp</h2>
          <p class="section-description">
            Giải đáp nhanh các vấn đề phổ biến khi đặt vé và thanh toán tại VietFly.
          </p>
        </div>
        <div class="faq-container">
          <div class="faq-item active">
            <div class="faq-question">
              <span>Làm thế nào để đổi ngày bay sau khi đặt vé?</span>
              <span>−</span>
            </div>
            <div class="faq-answer">
              Sau khi đăng nhập, bạn vào mục “Quản Lý Đặt Chỗ”, nhập mã đặt vé để thực hiện đổi ngày
              bay theo chính sách của từng hãng hàng không.
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <span>Tôi có thể thanh toán bằng phương thức nào?</span>
              <span>+</span>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <span>VietFly có hỗ trợ xuất hóa đơn VAT không?</span>
              <span>+</span>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <span>Trẻ em dưới 2 tuổi có cần mua vé riêng?</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
   TESTIMONIAL SECTION
   ========================================================================== -->
      <section class="testimonial-section">
        <div class="section-header">
          <span class="section-badge">Khách hàng nói gì?</span>
          <h2 class="section-title">Đánh giá từ hành khách</h2>
          <p class="section-description">
            Hơn 50.000+ khách hàng đã đặt vé thành công cùng VietFly.
          </p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="testimonial-top">
              <img src="https://i.pravatar.cc/100?img=12" alt="" />
              <div>
                <div class="testimonial-name">Nguyễn Minh Anh</div>
                <div class="testimonial-role">Freelancer Designer</div>
              </div>
            </div>
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-content">
              Đặt vé cực nhanh, giao diện dễ dùng và giá tốt hơn nhiều bên khác. Mình rất thích trải
              nghiệm thanh toán chỉ trong vài phút.
            </p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-top">
              <img src="https://i.pravatar.cc/100?img=32" alt="" />
              <div>
                <div class="testimonial-name">Trần Quốc Bảo</div>
                <div class="testimonial-role">Business Analyst</div>
              </div>
            </div>
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-content">
              Hệ thống tìm kiếm chuyến bay rất mượt. Bộ lọc và so sánh giá vé hoạt động cực kỳ trực
              quan.
            </p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-top">
              <img src="https://i.pravatar.cc/100?img=15" alt="" />
              <div>
                <div class="testimonial-name">Lê Hoàng Nam</div>
                <div class="testimonial-role">Software Engineer</div>
              </div>
            </div>
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-content">
              Support phản hồi nhanh, đổi lịch bay dễ dàng. Thiết kế UI hiện đại và rất chuyên
              nghiệp.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer>
      <div class="footer-container">
        <div class="footer-col">
          <h3>Về VietFly</h3>
          <p>
            Hệ thống đặt vé máy bay trực tuyến hiện đại, kết nối các hãng hàng không nội địa và quốc
            tế.
          </p>
          <p>📍 95 Lĩnh Nam, Hoàng Mai, Hà Nội</p>
          <p>✉️ support@vietfly.vn</p>
        </div>
        <div class="footer-col">
          <h3>Chính sách</h3>
          <ul class="footer-links">
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Bảo mật thông tin</a></li>
            <li><a href="#">Đổi / Hoàn vé</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Hỗ trợ</h3>
          <ul class="footer-links">
            <li><a href="#">Hướng dẫn đặt vé</a></li>
            <li><a href="#">Check-in Online</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Đối tác</h3>
          <p>• Vietnam Airlines</p>
          <p>• Vietjet Air</p>
          <p>• Bamboo Airways</p>
          <p>• Pacific Airlines</p>
        </div>
      </div>
      <div class="copyright">© 2026 VietFly Airlines. All rights reserved.</div>
    </footer>
  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheHero from '../components/TheHero.vue'
import { ref, computed, onMounted } from 'vue'

</script>

<style>
/* ==========================================================================
           1. DESIGN SYSTEM
           ========================================================================== */

:root {
  /* ĐẢO NGƯỢC PRIMARY COLOR */
  --primary: #ffd700;
  /* Vàng */
  --secondary: #005eb8;
  /* Xanh */

  --primary-dark: #e6c200;
  --secondary-dark: #004c94;

  --body-bg: #f5f7fa;
  --white: #ffffff;

  --text-dark: #1f2937;
  --text-muted: #6b7280;

  --border-color: #e5e7eb;

  --success: #10b981;

  --dp-font-family: 'Inter', sans-serif;
  --dp-border-radius: 12px;
  --dp-cell-border-radius: 8px;
  --dp-primary-color: #005bb5;
  --dp-input-padding: 16px 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: var(--body-bg);
  color: var(--text-dark);
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}



/* ==========================================
   TRUST SECTION
========================================== */

.trust-section {
  margin: 40px 0;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.trust-card {
  background: var(--white);

  padding: 28px;

  border-radius: 18px;

  border: 1px solid var(--border-color);

  transition: all 0.25s ease;
}

.trust-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.trust-icon {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: rgba(255, 215, 0, 0.18);

  font-size: 24px;

  margin-bottom: 20px;
}

.trust-title {
  font-size: 1.125rem;
  font-weight: 700;

  margin-bottom: 12px;

  color: var(--text-dark);
}

.trust-description {
  font-size: 0.875rem;

  line-height: 1.7;

  color: var(--text-muted);
}

/* ==========================================================================
           4. MAIN CONTENT
           ========================================================================== */

.main-content {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px 40px;
}

.section-title {
  font-size: 30px;
  font-weight: 800;
  color: var(--secondary);

  margin-bottom: 24px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.destination-card {
  background: var(--white);

  border-radius: 18px;
  overflow: hidden;

  transition: 0.25s;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

.destination-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.destination-img {
  height: 200px;

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-end;

  padding: 20px;

  color: white;

  font-size: 28px;
  font-weight: 800;
}

.destination-info {
  padding: 20px;
}

.destination-route {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.destination-meta {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.destination-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge-promo {
  background: var(--primary);

  padding: 6px 10px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 800;
}

.price-value {
  font-size: 24px;
  font-weight: 800;

  color: var(--secondary);
}

/* ==========================================================================
           5. FOOTER
           ========================================================================== */

footer {
  margin-top: 80px;

  background: #0f172a;
  color: rgba(255, 255, 255, 0.8);

  padding: 60px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;

  padding-bottom: 40px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-col h3 {
  color: var(--white);

  margin-bottom: 18px;

  font-size: 18px;
}

.footer-col p,
.footer-links li {
  margin-bottom: 12px;
  font-size: 14px;
}

.footer-links a:hover {
  color: var(--primary);
}

.copyright {
  text-align: center;
  padding-top: 20px;

  font-size: 13px;

  opacity: 0.6;
}

/* ==========================================================================
           6. RESPONSIVE
           ========================================================================== */

@media (max-width: 992px) {

  .search-fields-grid,
  .destinations-grid,
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .booking-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-fields-grid,
  .destinations-grid,
  .footer-container {
    grid-template-columns: 1fr;
  }
}

/* ==========================================================================
   TYPOGRAPHY SYSTEM — UI/UX TYPE SCALE
   Base: 16px
   Scale Ratio: 1.125
   Font: Inter
   ========================================================================== */

:root {
  /* FONT */
  --font-primary: 'Inter', sans-serif;

  /* FONT WEIGHTS */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  --fw-extrabold: 800;

  /* TYPE SCALE */
  --fs-h1: 3.052rem;
  /* 48.83px */
  --fs-h2: 2.441rem;
  /* 39.06px */
  --fs-h3: 1.953rem;
  /* 31.25px */
  --fs-h4: 1.563rem;
  /* 25px */
  --fs-h5: 1.25rem;
  /* 20px */
  --fs-h6: 1.125rem;
  /* 18px */

  --fs-body-lg: 1.125rem;
  /* 18px */
  --fs-body: 1rem;
  /* 16px */
  --fs-sm: 0.875rem;
  /* 14px */
  --fs-xs: 0.75rem;
  /* 12px */

  /* LINE HEIGHT */
  --lh-tight: 1.2;
  --lh-heading: 1.3;
  --lh-body: 1.6;

  /* LETTER SPACING */
  --ls-tight: -0.02em;
  --ls-normal: 0;
  --ls-wide: 0.04em;
}

/* ==========================================================================
   GLOBAL TYPOGRAPHY RESET
   ========================================================================== */

html {
  font-size: 16px;
}

body {
  font-family: var(--font-primary);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: var(--fw-regular);
  color: var(--text-dark);

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ==========================================================================
   HEADINGS
   ========================================================================== */

h1,
.hero-title {
  font-size: var(--fs-h1);
  line-height: var(--lh-tight);
  font-weight: var(--fw-extrabold);
  letter-spacing: var(--ls-tight);
}

h2,
.section-title {
  font-size: var(--fs-h3);
  line-height: var(--lh-heading);
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
}

h3,
.booking-title {
  font-size: var(--fs-h4);
  line-height: var(--lh-heading);
  font-weight: var(--fw-bold);
}

h4 {
  font-size: var(--fs-h5);
  line-height: var(--lh-heading);
  font-weight: var(--fw-semibold);
}

h5 {
  font-size: var(--fs-h6);
  line-height: var(--lh-heading);
  font-weight: var(--fw-semibold);
}

h6 {
  font-size: var(--fs-body);
  line-height: var(--lh-heading);
  font-weight: var(--fw-semibold);
}

/* ==========================================================================
   TEXT STYLES
   ========================================================================== */

p,
.hero-subtitle,
.destination-meta,
.footer-col p {
  font-size: var(--fs-body);
  line-height: var(--lh-body);
}

small,
.logo-subtitle,
.input-group label,
.copyright {
  font-size: var(--fs-xs);
  line-height: 1.5;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */

.main-nav a {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  line-height: 1;
}

.top-bar {
  font-size: var(--fs-sm);
  line-height: 1.4;
}

/* ==========================================================================
   BUTTONS
   ========================================================================== */

.btn-login,
.btn-booking,
.btn-search {
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  line-height: 1;
  letter-spacing: 0.02em;
}


/* ==========================================================================
   LOGO
   ========================================================================== */

.logo-title {
  font-size: var(--fs-h4);
  font-weight: var(--fw-extrabold);
  line-height: 1;
  letter-spacing: -0.03em;
}

.logo-subtitle {
  font-size: 0.688rem;
  font-weight: var(--fw-medium);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ==========================================================================
   FORM ELEMENTS
   ========================================================================== */

.input-group label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.input-group input,
.input-group select {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
}

/* ==========================================================================
   DESTINATION CARD
   ========================================================================== */

.destination-img {
  font-size: var(--fs-h4);
  font-weight: var(--fw-extrabold);
  line-height: 1;
  letter-spacing: -0.02em;
}

.destination-route {
  font-size: var(--fs-h6);
  font-weight: var(--fw-bold);
  line-height: 1.4;
}

.destination-meta {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.price-value {
  font-size: var(--fs-h5);
  font-weight: var(--fw-extrabold);
  line-height: 1;
}

.badge-promo {
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

.footer-col h3 {
  font-size: var(--fs-h6);
  font-weight: var(--fw-bold);
  line-height: 1.4;
  letter-spacing: 0.02em;
}

.footer-links li,
.footer-col p {
  font-size: var(--fs-sm);
}

/* ==========================================================================
   FAQ + TESTIMONIAL DESIGN SYSTEM
   ========================================================================== */

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-badge {
  display: inline-flex;
  align-items: center;

  padding: 8px 16px;

  border-radius: 999px;

  background: rgba(0, 94, 184, 0.08);

  color: var(--secondary);

  font-size: 0.875rem;
  font-weight: 700;

  margin-bottom: 18px;
}

.section-description {
  max-width: 640px;
  margin: auto;

  font-size: 1rem;
  line-height: 1.75;

  color: var(--text-muted);
}

/* ==========================================================================
   FAQ SECTION
   ========================================================================== */

.faq-section {
  max-width: 1000px;
  margin: 100px auto 0;

  padding: 0 20px;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--white);

  border-radius: 18px;

  border: 1px solid var(--border-color);

  overflow: hidden;

  transition: 0.25s ease;
}

.faq-item:hover {
  border-color: rgba(0, 94, 184, 0.2);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 28px;

  cursor: pointer;

  font-size: 1.125rem;
  font-weight: 700;

  color: var(--text-dark);
}

.faq-answer {
  padding: 0 28px 24px;

  font-size: 1rem;
  line-height: 1.8;

  color: var(--text-muted);
}

/* ==========================================================================
   TESTIMONIAL SECTION
   ========================================================================== */

.testimonial-section {
  max-width: 1200px;
  margin: 110px auto 0;

  padding: 0 20px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--white);

  padding: 32px;

  border-radius: 24px;

  border: 1px solid rgba(229, 231, 235, 0.8);

  transition: 0.25s ease;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.testimonial-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.testimonial-top {
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 20px;
}

.testimonial-top img {
  width: 64px;
  height: 64px;

  border-radius: 50%;

  object-fit: cover;
}

.testimonial-name {
  font-size: 1.125rem;
  font-weight: 700;

  margin-bottom: 4px;
}

.testimonial-role {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.testimonial-rating {
  font-size: 1.125rem;
  margin-bottom: 18px;

  color: #f59e0b;
}

.testimonial-content {
  font-size: 1rem;
  line-height: 1.85;

  color: var(--text-muted);
}

/* ==========================================================================
   RESPONSIVE
   ========================================================================== */

@media (max-width: 992px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .faq-question {
    font-size: 1rem;
    padding: 20px;
  }

  .faq-answer {
    padding: 0 20px 20px;
  }

  .testimonial-card {
    padding: 24px;
  }
}

/* ==========================================================================
   RESPONSIVE TYPOGRAPHY
   ========================================================================== */

@media (max-width: 992px) {
  :root {
    --fs-h1: 2.441rem;
    --fs-h2: 1.953rem;
    --fs-h3: 1.563rem;
  }
}

@media (max-width: 768px) {
  :root {
    --fs-h1: 1.953rem;
    --fs-h2: 1.563rem;
    --fs-h3: 1.25rem;

    --fs-body-lg: 1rem;
    --fs-body: 0.938rem;
  }

  .hero-title {
    line-height: 1.15;
  }

  .hero-subtitle {
    font-size: var(--fs-sm);
  }
}

#preloader {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.899);
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.loader-container {}

.main-loader {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loader-info {
  position: absolute;
  bottom: -50px;
  left: 80px;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
}

.ring-1 {
  width: 220px;
  height: 220px;
  border-top: 2px solid #ffd700;
  animation: rotate 2s linear infinite;
}

.ring-2 {
  width: 170px;
  height: 170px;
  border-bottom: 2px solid #005eb8;
  animation: rotateReverse 1.6s linear infinite;
}

.plane {
  position: absolute;
  width: 26px;
  height: 26px;
  background: #ffd700;
  clip-path: polygon(50% 0%, 65% 40%, 100% 50%, 65% 60%, 50% 100%, 35% 60%, 0% 50%, 35% 40%);
  animation: float 2s ease-in-out infinite;
  box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);
}

.brand {
  position: absolute;
  bottom: 30px;
  color: #005eb8;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 6px;
}

.subtitle {
  position: absolute;
  bottom: 5px;
  color: #005eb8;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateReverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-10px) scale(1.08);
  }
}

/* Smooth fade-out */
.loaded #preloader {
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s ease;
}
</style>
