<template>
  <div>
    <!-- Premium Agency Loading Animation -->
    <div id="preloader">
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
    </div>

    <!-- TOP BAR -->
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

    <!-- HEADER -->
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

    <!-- HERO -->
    <section class="hero-section">
      <h1 class="hero-title">Bay thông minh cùng VietFly</h1>
      <p class="hero-subtitle">Hệ thống đặt vé máy bay hiện đại, giá tốt, thanh toán nhanh chóng</p>
    </section>

    <!-- BOOKING -->
    <section class="booking-container">
      <div class="booking-top">
        <div class="booking-title">Tìm kiếm chuyến bay</div>
        <div class="flight-type-selector">
          <label class="radio-label">
            <input
              type="radio"
              name="flight-type"
              id="round-trip"
              value="round-trip"
              checked
              v-model="flightType"
            />
            Khứ hồi
          </label>
          <label class="radio-label">
            <input
              type="radio"
              name="flight-type"
              id="one-way"
              value="one-way"
              v-model="flightType"
            />
            Một chiều
          </label>
        </div>
      </div>

      <form>
        <div class="search-fields-grid">
          <div class="route-selector mb-4">
            <!-- FROM -->
            <div class="input-group">
              <label>Điểm đi</label>
              <div class="airport-select" @click="toggleAirport('from')">
                <div class="airport-value">
                  <i class="fa-solid fa-plane-departure"></i>
                  <span id="from-value"> {{ fromAirport }} </span>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
                <div
                  class="airport-dropdown"
                  id="from-dropdown"
                  :class="{ active: showFromDropdown }"
                >
                  <input
                    type="text"
                    placeholder="Tìm sân bay..."
                    @keyup="filterAirport($event, 'from-list')"
                  />
                  <div class="airport-list" id="from-list">
                    <div
                      v-for="airport in filteredFromAirports"
                      :key="airport"
                      class="airport-item"
                      @click="selectAirport('from', airport)"
                    >
                      {{ airport }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- SWAP -->
            <button class="swap-btn" @click="swapAirport" type="button">
              <i class="fa-solid fa-right-left"></i>
            </button>
            <!-- TO -->
            <div class="input-group">
              <label>Điểm đến</label>
              <div class="airport-select" @click="toggleAirport('to')">
                <div class="airport-value">
                  <i class="fa-solid fa-plane-arrival"></i>
                  <span id="to-value"> {{ toAirport }} </span>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
                <div class="airport-dropdown" id="to-dropdown" :class="{ active: showToDropdown }">
                  <input
                    type="text"
                    placeholder="Tìm sân bay..."
                    @keyup="filterAirport($event, 'to-list')"
                  />
                  <div class="airport-list" id="to-list">
                    <div
                      v-for="airport in filteredToAirports"
                      :key="airport"
                      class="airport-item"
                      @click="selectAirport('to', airport)"
                    >
                      {{ airport }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="input-group departure-date mb-4">
            <label>Ngày đi</label>
            <input type="date" id="dep-date" v-model="departureDate" :min="today" />
          </div>

          <div class="input-group return-date mb-4" v-if="flightType === 'round-trip'">
            <label>Ngày về</label>
            <input type="date" id="ret-date" v-model="returnDate" :min="departureDate || today" />
          </div>

          <div class="input-group passenger-selector mb-4">
            <label>Hành khách</label>
            <div class="passenger-display" @click="togglePassengerBox">
              <div class="passenger-display-left">
                <i class="fa-solid fa-users"></i>
                <span id="passenger-summary"> {{ passengerSummary }} </span>
              </div>
              <i
                class="fa-solid fa-chevron-down dropdown-icon"
                id="dropdown-icon"
                :class="{ rotate: showPassengerBox }"
              ></i>
            </div>
            <div class="passenger-box" id="passenger-box" :class="{ active: showPassengerBox }">
              <div class="passenger-row">
                <div>
                  <strong class="mr-1">Người lớn</strong>
                  <small>(Từ 12 tuổi)</small>
                </div>
                <div class="counter">
                  <button type="button" @click="changePassenger('adt', -1)">-</button>
                  <span id="adt-count"> {{ adt }} </span>
                  <button type="button" @click="changePassenger('adt', 1)">+</button>
                </div>
              </div>
              <div class="passenger-row">
                <div>
                  <strong class="mr-1">Trẻ em</strong>
                  <small>(2 - 11 tuổi)</small>
                </div>
                <div class="counter">
                  <button type="button" @click="changePassenger('chd', -1)">-</button>
                  <span id="chd-count"> {{ chd }} </span>
                  <button type="button" @click="changePassenger('chd', 1)">+</button>
                </div>
              </div>
              <div class="passenger-row">
                <div>
                  <strong class="mr-1">Em bé</strong>
                  <small>(Dưới 2 tuổi)</small>
                </div>
                <div class="counter">
                  <button type="button" @click="changePassenger('inf', -1)">-</button>
                  <span id="inf-count"> {{ inf }} </span>
                  <button type="button" @click="changePassenger('inf', 1)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn-search">Tìm chuyến bay</button>
      </form>
    </section>

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
          <div
            class="destination-img"
            style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1509060464153-44667396260f?auto=format&fit=crop&w=600&q=80');
            "
          >
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
          <div
            class="destination-img"
            style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80');
            "
          >
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
          <div
            class="destination-img"
            style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=600&q=80');
            "
          >
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
          <div
            class="destination-img"
            style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80');
            "
          >
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
import { ref, computed, onMounted } from 'vue'

// Flight type
const flightType = ref('round-trip')

// Passengers
const adt = ref(1)
const chd = ref(0)
const inf = ref(0)
const showPassengerBox = ref(false)

// Airports
const fromAirport = ref('TP. Hồ Chí Minh (SGN)')
const toAirport = ref('Hà Nội (HAN)')
const showFromDropdown = ref(false)
const showToDropdown = ref(false)
const fromSearchKeyword = ref('')
const toSearchKeyword = ref('')

// Dates
const departureDate = ref('')
const returnDate = ref('')
const today = new Date().toISOString().split('T')[0]

// Airport lists
const fromAirports = ['TP. Hồ Chí Minh (SGN)', 'Hà Nội (HAN)', 'Đà Nẵng (DAD)']
const toAirports = ['Hà Nội (HAN)', 'Phú Quốc (PQC)', 'Nha Trang (CXR)']

// Computed properties
const passengerSummary = computed(() => {
  const parts = []
  if (adt.value > 0) parts.push(`${adt.value} Người lớn`)
  if (chd.value > 0) parts.push(`${chd.value} Trẻ em`)
  if (inf.value > 0) parts.push(`${inf.value} Em bé`)
  return parts.join(', ')
})

const filteredFromAirports = computed(() => {
  if (!fromSearchKeyword.value) return fromAirports
  return fromAirports.filter((airport) =>
    airport.toLowerCase().includes(fromSearchKeyword.value.toLowerCase()),
  )
})

const filteredToAirports = computed(() => {
  if (!toSearchKeyword.value) return toAirports
  return toAirports.filter((airport) =>
    airport.toLowerCase().includes(toSearchKeyword.value.toLowerCase()),
  )
})

// Methods
function togglePassengerBox() {
  showPassengerBox.value = !showPassengerBox.value
}

function changePassenger(type, amount) {
  if (type === 'adt') {
    adt.value = Math.max(1, adt.value + amount)
  } else if (type === 'chd') {
    chd.value = Math.max(0, chd.value + amount)
  } else if (type === 'inf') {
    inf.value = Math.max(0, inf.value + amount)
  }
}

function toggleAirport(type) {
  if (type === 'from') {
    showFromDropdown.value = !showFromDropdown.value
    showToDropdown.value = false
  } else {
    showToDropdown.value = !showToDropdown.value
    showFromDropdown.value = false
  }
}

function selectAirport(type, value) {
  if (type === 'from') {
    fromAirport.value = value
    showFromDropdown.value = false
  } else {
    toAirport.value = value
    showToDropdown.value = false
  }
}

function swapAirport() {
  const temp = fromAirport.value
  fromAirport.value = toAirport.value
  toAirport.value = temp
}

function filterAirport(event, listId) {
  const keyword = event.target.value
  if (listId === 'from-list') {
    fromSearchKeyword.value = keyword
  } else {
    toSearchKeyword.value = keyword
  }
}

// Lifecycle hooks
onMounted(() => {
  // Remove loader after 2 seconds
  setTimeout(() => {
    document.body.classList.add('loaded')
  }, 2000)

  // Set default departure date
  departureDate.value = today
})
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

/* ==========================================================================
           2. TOP BAR
           ========================================================================== */

.top-bar {
  background: var(--secondary);
  color: var(--white);
  font-size: 14px;
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

/* ==========================================================================
           3. HEADER
           ========================================================================== */

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

/* ==========================================================================
           4. HERO
           ========================================================================== */

.hero-section {
  background:
    linear-gradient(rgba(0, 94, 184, 0.82), rgba(0, 94, 184, 0.88)),
    url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80');

  background-size: cover;
  background-position: center;

  padding: 90px 20px 120px;

  text-align: center;
  color: var(--white);
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 14px;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.95;
}

/* ==========================================================================
           5. BOOKING BOX
           ========================================================================== */

.booking-container {
  max-width: 1180px;
  margin: -60px auto 50px;

  background: var(--white);

  border-radius: 20px;

  padding: 30px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.booking-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
}

.booking-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--secondary);
}

.flight-type-selector {
  display: flex;
  align-items: center;
  gap: 18px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 600;
  cursor: pointer;
}

input[type='radio'] {
  accent-color: var(--secondary);
  width: 18px;
  height: 18px;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ROW 1 */
.search-row.row-1 {
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr;
  gap: 16px;
  align-items: end;
}

/* route selector gom FROM + SWAP + TO */
.route-selector {
  display: contents; /* để grid ăn thẳng children */
}

/* ROW 2 */
.search-row.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 16px;
  align-items: end;
}

/* swap button fix */
.swap-btn {
  height: 44px;
  width: 44px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

/* search button */
.btn-search {
  height: 44px;
  padding: 0 24px;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label,
.passenger-selector label {
  margin-bottom: 8px;

  font-size: 13px;
  font-weight: 700;

  color: var(--text-muted);
}

.input-group input,
.input-group select {
  height: 52px;

  border-radius: 12px;
  border: 1px solid var(--border-color);

  padding: 0 16px;

  font-size: 15px;
  font-weight: 600;

  background: var(--white);

  transition: 0.2s;
}

.input-group input:focus,
.input-group select:focus {
  border-color: var(--secondary);

  box-shadow: 0 0 0 4px rgba(0, 94, 184, 0.12);
}

.btn-search {
  width: 100%;

  height: 56px;

  border-radius: 14px;

  background: var(--primary);
  color: var(--text-dark);

  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;

  transition: 0.2s;
}

.btn-search:hover {
  background: var(--primary-dark);
}

/* ==========================================
   TRUST SECTION
========================================== */

.trust-section {
  margin: 80px 0;
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
           6. MAIN CONTENT
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
           7. FOOTER
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
           8. RESPONSIVE
           ========================================================================== */

@media (max-width: 992px) {
  .main-nav {
    display: none;
  }

  .search-fields-grid,
  .destinations-grid,
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .top-bar-container,
  .header-container,
  .booking-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-title {
    font-size: 36px;
  }

  .search-fields-grid,
  .destinations-grid,
  .footer-container {
    grid-template-columns: 1fr;
  }

  .header-right {
    width: 100%;
  }

  .btn-login,
  .btn-booking {
    flex: 1;
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

.btn-search {
  text-transform: uppercase;
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

.loader-container {
}

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

.passenger-selector {
  position: relative;
}

.passenger-display {
  height: 54px;

  border: 1px solid #ddd;

  border-radius: 12px;

  display: flex;

  align-items: center;

  padding: 0 16px;

  cursor: pointer;

  background: white;
}

.passenger-box {
  position: absolute;

  top: calc(100% + 10px);

  left: 0;

  width: 100%;

  background: white;

  border-radius: 16px;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

  padding: 20px;

  z-index: 999;

  display: none;
}

.passenger-box.active {
  display: block;
}

.passenger-row {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 14px 0;

  border-bottom: 1px solid #eee;
}

.passenger-row:last-child {
  border-bottom: none;
}

.counter {
  display: flex;

  align-items: center;

  gap: 12px;
}

.counter button {
  width: 32px;

  height: 32px;

  border: none;

  border-radius: 50%;

  background: #ffd700;

  cursor: pointer;

  font-weight: bold;
}

.counter span {
  min-width: 20px;

  text-align: center;

  font-weight: 600;
}

.passenger-display {
  height: 54px;

  border: 1px solid #ddd;

  border-radius: 12px;

  padding: 0 16px;

  background: white;

  display: flex;

  justify-content: space-between;

  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease;
}

.passenger-display:hover {
  border-color: #ffd700;

  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.15);
}

.passenger-display-left {
  display: flex;

  align-items: center;

  gap: 10px;
}

.passenger-display-left i {
  color: #888;

  font-size: 15px;
}

.dropdown-icon {
  color: #999;

  font-size: 13px;

  transition: 0.25s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

#passenger-summary {
  white-space: nowrap;
}

.route-selector {
  display: grid;

  grid-template-columns: 1fr auto 1fr;

  gap: 16px;

  align-items: end;
}

.airport-select {
  height: 54px;

  border: 1px solid #ddd;

  border-radius: 12px;

  padding: 0 16px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  cursor: pointer;

  background: white;

  position: relative;
}

.airport-value {
  display: flex;

  align-items: center;

  gap: 10px;
  white-space: nowrap;
}

.airport-value i {
  color: #f5b400;
}

.airport-dropdown {
  position: absolute;

  width: 100%;

  background: white;

  border-radius: 12px;

  margin-top: 8px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

  display: none;

  z-index: 1000;

  top: 100%;

  left: 0;
}

.airport-dropdown.active {
  display: block;
}

.airport-dropdown input {
  width: 100%;

  border: none;

  border-bottom: 1px solid #eee;

  padding: 14px;
}

.airport-item {
  padding: 12px 16px;

  cursor: pointer;
}

.airport-item:hover {
  background: #fafafa;
}

.swap-btn {
  width: 48px;

  height: 48px;

  border: none;

  border-radius: 50%;

  background: #ffd700;

  color: #111;

  cursor: pointer;

  transition: 0.3s;

  margin-bottom: 4px;
}

.swap-btn:hover {
  transform: rotate(180deg);
}
</style>
