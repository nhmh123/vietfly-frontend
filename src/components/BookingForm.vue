<template>
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

      <button class="btn-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        Tìm chuyến bay
      </button>
    </form>
  </section>
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

<style scoped>
/* ==========================================================================
           3. BOOKING BOX
           ========================================================================== */

.booking-container {
  /* Loại bỏ position: absolute để nó tuân theo layout cha */
  background: var(--white);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 100%; /* Đảm bảo nó luôn lấp đầy booking-wrapper */
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
  height: 56px;
  padding: 0 16px;
  border-radius: 14px;
  background: var(--secondary);
  color: var(--white);
  font-size: 16px;
  font-weight: 800;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-search:hover {
  background: var(--secondary-dark);
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
