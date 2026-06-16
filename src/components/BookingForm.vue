<template>
  <!-- BOOKING -->
  <section class="booking-container">
    <form @submit.prevent="handleSubmit">
      <div class="booking-top">
        <div class="booking-title">Tìm kiếm chuyến bay</div>
        <div class="flight-type-selector">
          <label class="radio-label">
            <input type="radio" name="flight-type" id="round-trip" value="round-trip" checked v-model="flightType" />
            Khứ hồi
          </label>
          <label class="radio-label">
            <input type="radio" name="flight-type" id="one-way" value="one-way" v-model="flightType" />
            Một chiều
          </label>
        </div>
      </div>

      <div class="search-fields-grid">
        <div class="route-selector mb-4">
          <!-- FROM -->
          <div class="input-group">
            <label>Điểm đi</label>
            <div class="airport-select" @click="toggleAirport('from')">
              <div class="airport-value">
                <i class="fa-solid fa-plane-departure"></i>
                <span id="from-value"> {{ fromAirport.name }} </span>
              </div>
              <i class="fa-solid fa-chevron-down"></i>
              <div class="airport-dropdown" id="from-dropdown" :class="{ active: showFromDropdown }" @click.stop>
                <div class="input-wrapper">
                  <input v-model="fromSearchKeyword" type="text" placeholder="Tìm sân bay..."
                    @keyup="filterAirport($event, 'from-list')" />
                  <i class="fa-solid fa-xmark clear-icon" @click.stop="clearAirportSearch('from')"></i>
                </div>
                <div class="airport-list" id="from-list">
                  <div v-for="airport in filteredFromAirports" :key="airport.iata" class="airport-item"
                    @click="selectAirport('from', airport)">
                    {{ airport.name }}
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
                <span id="to-value"> {{ toAirport.name }} </span>
              </div>
              <i class="fa-solid fa-chevron-down"></i>
              <div class="airport-dropdown" id="to-dropdown" :class="{ active: showToDropdown }" @click.stop>
                <div class="input-wrapper">
                  <input v-model="toSearchKeyword" type="text" placeholder="Tìm sân bay..."
                    @keyup="filterAirport($event, 'to-list')" />
                  <i class="fa-solid fa-xmark clear-icon" @click.stop="clearAirportSearch('to')"></i>
                </div>
                <div class="airport-list" id="to-list">
                  <div v-for="airport in filteredToAirports" :key="airport.iata" class="airport-item"
                    @click="selectAirport('to', airport)">
                    {{ airport.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="date-selector mb-4">

          <div class="input-group departure-date mb-4">
            <label>Ngày đi</label>

            <VueDatePicker v-model="departureDate" :locale="vi" :enable-time-picker="false" :min-date="new Date()"
              format="dd/MM/yyyy" placeholder="Chọn ngày đi" auto-apply :time-config="{ enableTimePicker: false }"
              :year-range="[2026, 2027]" />

            <div v-if="errors.departureDate" class="italic text-red-500 text-sm mt-1">
              {{ errors.departureDate }}
            </div>
          </div>


          <div class="input-group return-date mb-4" v-if="flightType === 'round-trip'">
            <label>Ngày về</label>

            <VueDatePicker v-model="returnDate" :locale="vi" :enable-time-picker="false"
              :min-date="departureDate || new Date()" format="dd/MM/yyyy" placeholder="Chọn ngày về" auto-apply
              :time-config="{ enableTimePicker: false }" :year-range="[2026, 2027]" />

            <div v-if="errors.returnDate" class="italic text-red-500 text-sm mt-1">
              {{ errors.returnDate }}
            </div>
          </div>


        </div>

        <div class="search-footer">
          <div class="input-group passenger-selector mb-4">
            <label>Hành khách</label>
            <div class="passenger-display" @click="togglePassengerBox">
              <div class="passenger-display-left">
                <i class="fa-solid fa-users"></i>
                <span id="passenger-summary"> {{ passengerSummary }} </span>
              </div>
              <i class="fa-solid fa-chevron-down dropdown-icon" :class="{ rotate: showPassengerBox }"></i>
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

          <button class="btn-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            Tìm chuyến bay
          </button>


        </div>
        <div v-if="errors.passenger" class="block italic text-red-500 text-sm mt-1">
          {{ errors.passenger }}
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import dayjs from 'dayjs';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { vi } from 'date-fns/locale'
import { ref, reactive, computed, onMounted, watch } from 'vue'

const errors = reactive({
  fromAirport: null,
  toAirport: null,
  sameAirport: null,
  flightType: null,
  departureDate: null,
  returnDate: null,
  passenger: null,
})
// Flight type
const flightType = ref('one-way')

// Passengers
const adt = ref(1)
const chd = ref(0)
const inf = ref(0)
const totalPassengers = computed(() => adt.value + chd.value + inf.value)
const showPassengerBox = ref(false)

// Airports
const fromAirport = ref({ name: 'TP. Hồ Chí Minh (SGN)', iata: 'SGN' })
const toAirport = ref({ name: 'Hà Nội (HAN)', iata: 'HAN' })
const showFromDropdown = ref(false)
const showToDropdown = ref(false)
const fromSearchKeyword = ref('')
const toSearchKeyword = ref('')

// Dates
const departureDate = ref(null)
const returnDate = ref(null)
const today = new Date().toISOString().split('T')[0]

// Airport lists
const fromAirports = [
  { name: 'TP. Hồ Chí Minh (SGN)', iata: 'SGN' },
  { name: 'Hà Nội (HAN)', iata: 'HAN' },
  { name: 'Đà Nẵng (DAD)', iata: 'DAD' },
]
const toAirports = [
  { name: 'TP. Hồ Chí Minh (SGN)', iata: 'SGN' },
  { name: 'Hà Nội (HAN)', iata: 'HAN' },
  { name: 'Đà Nẵng (DAD)', iata: 'DAD' },
]

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
    airport.name.toLowerCase().includes(fromSearchKeyword.value.toLowerCase()),
  )
})

const filteredToAirports = computed(() => {
  if (!toSearchKeyword.value) return toAirports
  return toAirports.filter((airport) =>
    airport.name.toLowerCase().includes(toSearchKeyword.value.toLowerCase()),
  )
})

watch(fromAirport, () => {
  delete errors.fromAirport
  delete errors.sameAirport
})

watch(toAirport, () => {
  delete errors.toAirport
  delete errors.sameAirport
})

watch(departureDate, () => {
  delete errors.departureDate
})

watch(returnDate, () => {
  delete errors.returnDate
})

watch(flightType, () => {
  delete errors.flightType
  delete errors.returnDate
})

watch([adt, chd, inf], () => {
  delete errors.passenger
})

const clearAirportSearch = (type) => {
  if (type === 'from') {
    fromSearchKeyword.value = ''
  } else {
    toSearchKeyword.value = ''
  }
}

// Methods
function togglePassengerBox() {
  showPassengerBox.value = !showPassengerBox.value
}

function changePassenger(type, amount) {
  const nextTotal = totalPassengers.value + amount;

  if (nextTotal > 9) return;


  switch (type) {
    case 'adt':
      adt.value = Math.max(1, adt.value + amount);

      if (inf.value > adt.value) {
        inf.value = adt.value;
      }
      break;

    case 'chd':
      chd.value = Math.max(0, chd.value + amount);
      break;

    case 'inf':
      const nextInf = inf.value + amount;

      if (nextInf < 0) return;
      if (nextInf > adt.value) return;

      inf.value = nextInf;
      break;
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

const normalizeData = () => {
  const DATE_FORMAT = 'YYYY-MM-DD';

  return {
    flightType: flightType.value,

    startPoint: fromAirport.value?.iata?.toUpperCase().trim() ?? null,
    endPoint: toAirport.value?.iata?.toUpperCase().trim() ?? null,

    departureDate: departureDate.value
      ? dayjs(departureDate.value).format(DATE_FORMAT)
      : null,

    returnDate: (flightType.value === 'round-trip' && returnDate.value)
      ? dayjs(returnDate.value).format(DATE_FORMAT)
      : null,

    adt: Number(adt.value) || 0,
    chd: Number(chd.value) || 0,
    inf: Number(inf.value) || 0,
  };
};

const validateSearchForm = (formData) => {
  // FS-001: StartPoint bắt buộc
  if (!formData.startPoint) {
    errors.fromAirport = 'Vui lòng chọn điểm đi';
  }

  // FS-002: EndPoint bắt buộc
  if (!formData.endPoint) {
    errors.toAirport = 'Vui lòng chọn điểm đến';
  }

  // FS-003: StartPoint !== EndPoint
  if (formData.startPoint && formData.endPoint && formData.startPoint === formData.endPoint) {
    errors.sameAirport = 'Điểm đi và điểm đến không được giống nhau';
  }

  // FS-010: TripType bắt buộc (ONE_WAY | ROUND_TRIP)
  if (!formData.flightType) {
    errors.flightType = 'Vui lòng chọn loại chuyến bay';
  } else if (formData.flightType !== 'one-way' && formData.flightType !== 'round-trip') {
    errors.flightType = 'Loại chuyến bay không hợp lệ';
  }

  // FS-012: Nếu ROUND_TRIP thì ReturnDate bắt buộc
  if (formData.flightType === 'round-trip' && !formData.returnDate) {
    errors.returnDate = 'Vui lòng chọn ngày về';
  }

  // FS-020: DepartDate bắt buộc
  if (!formData.departureDate) {
    errors.departureDate = 'Vui lòng chọn ngày đi';
  }

  // FS-021: DepartDate >= Today
  if (formData.departureDate) {
    const depDate = new Date(formData.departureDate);
    const todayDate = new Date(today);
    if (depDate < todayDate) {
      errors.departureDate = 'Ngày đi từ hôm nay trở đi';
    }
  }

  // FS-025: ReturnDate bắt buộc nếu ROUND_TRIP
  if (formData.flightType === 'round-trip' && !formData.returnDate) {
    errors.returnDate = 'Vui lòng chọn ngày về';
  }

  // FS-026: ReturnDate >= DepartDate
  if (formData.returnDate && formData.departureDate) {
    const depDate = new Date(formData.departureDate);
    const retDate = new Date(formData.returnDate);
    if (retDate < depDate) {
      errors.returnDate = 'Ngày về không được trước ngày đi';
    }
  }

  // FS-041: Tổng hành khách > 0
  if (totalPassengers.value <= 0) {
    errors.passenger = 'Vui lòng chọn ít nhất 1 hành khách';
  }

  // FS-042: Tổng hành khách <= 9
  if (totalPassengers.value > 9) {
    errors.passenger = 'Tối đa 9 hành khách';
  }

  // FS-030: ADT bắt buộc
  if (formData.adt === undefined || formData.adt === null) {
    errors.passenger = 'Vui lòng nhập số lượng người lớn';
  }

  // FS-031: ADT >= 1
  if (formData.adt !== undefined && formData.adt !== null) {
    if (isNaN(formData.adt) || formData.adt < 1) {
      errors.passenger = 'Số lượng người lớn tối thiểu là 1';
    }
  }

  // FS-032: ADT là số nguyên
  if (formData.adt !== undefined && formData.adt !== null) {
    if (!Number.isInteger(formData.adt)) {
      errors.passenger = 'Số lượng người lớn phải là số nguyên';
    }
  }

  // FS-033: ADT >= 0
  if (formData.adt < 0) {
    errors.passenger = 'Số lượng người lớn không được âm';
  }

  // FS-035: CHD là số nguyên
  if (formData.chd !== undefined && formData.chd !== null) {
    if (!Number.isInteger(formData.chd)) {
      errors.passenger = 'Số lượng trẻ em phải là số nguyên';
    }
  }

  // FS-036: CHD >= 0
  if (formData.chd !== undefined && formData.chd !== null) {
    if (formData.chd < 0) {
      errors.passenger = 'Số lượng trẻ em không được âm';
    }
  }

  // FS-038: INF là số nguyên
  if (formData.inf !== undefined && formData.inf !== null) {
    if (!Number.isInteger(formData.inf)) {
      errors.passenger = 'Số lượng em bé phải là số nguyên';
    }
  }

  // FS-039: INF >= 0
  if (formData.inf !== undefined && formData.inf !== null) {
    if (formData.inf < 0) {
      errors.passenger = 'Số lượng em bé không được âm';
    }
  }

  // FS-040: INF <= ADT
  if (formData.inf > formData.adt) {
    errors.passenger = 'Mỗi người lớn chỉ được đi cùng tối đa 1 em bé';
  }

  // FS-043: CHD không được đi một mình (ADT phải >= 1)
  if (formData.chd > 0 && formData.adt < 1) {
    errors.passenger = 'Trẻ em không được đi một mình';
  }

  // FS-044: INF không được đi một mình (ADT phải >= 1)
  if (formData.inf > 0 && formData.adt < 1) {
    errors.passenger = 'Em bé không được đi một mình';
  }

  return errors;
};

const handleSubmit = () => {
  showPassengerBox.value = false
  const formData = normalizeData();
  console.log(
    'FORM DATA',
    formData
  );
  console.log(adt.value, chd.value, inf.value, totalPassengers.value)
  const errors = validateSearchForm(formData)
  console.log(
    'ERRORS',
    errors
  );
}

onMounted(() => {
  // setTimeout(() => {
  //   document.body.classList.add('loaded')
  // }, 2000)

  departureDate.value = today
})
</script>

<style scoped>
/* ==========================================================================
3. BOOKING BOX
========================================================================== */

.booking-container {
  background: var(--white);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
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
  align-items: center;
  gap: 16px;
}

.search-row.row-1 {
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr;
  gap: 16px;
  align-items: end;
}

.route-selector {
  display: contents;
}

.search-row.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 16px;
  align-items: end;
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
  flex: 1;
  min-width: 0;
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

.input-group .invalid {
  border: 2px solid #ff4d4f;
}

.input-group input:focus,
.input-group select:focus {
  border-color: var(--secondary);
  outline: none;
  border: none;
  box-shadow: 0 0 0 4px #ffd700;
}

.input-group input:hover {
  border-color: #ffd700;

  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.15);
}

.search-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.btn-search {
  height: 54px;
  padding: 0 32px;
  margin-top: 12px;
  border-radius: 12px;
  background: var(--secondary);
  color: var(--white);
  font-size: 16px;
  font-weight: 800;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .search-footer {
    grid-template-columns: 1fr;
  }
}

.passenger-selector {
  position: relative;
  flex-grow: 1;
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
  /* Dùng minmax để cột tự co giãn, nhưng không quá nhỏ */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  align-items: end;
  width: 100%;
}

/* Tùy chỉnh riêng cho nút Swap trên Desktop nếu cần */
@media (min-width: 768px) {
  .route-selector {
    grid-template-columns: 1fr auto 1fr;
    /* Desktop: 3 cột */
  }
}

@media (max-width: 767px) {
  .swap-btn {
    grid-column: 1 / -1;
    /* Đẩy nút swap ra toàn bộ chiều rộng hàng mới */
    justify-self: center;
  }
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

.airport-select:hover {
  border-color: #ffd700;

  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.15);
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

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;

  /* Để trống một khoảng để không đè lên chữ */
}

.clear-icon {
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: #94a3b8;
  /* Màu xám nhạt */
  font-size: 14px;
  transition: color 0.2s;
}

.clear-icon:hover {
  color: #ef4444;
  /* Chuyển sang màu đỏ khi hover */
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


  color: var(--text-dark);

  cursor: pointer;

  transition: 0.3s;

  margin-bottom: 4px;
}

.swap-btn:hover {
  transform: rotate(180deg);
}
</style>
