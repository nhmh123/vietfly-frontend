<template>
  <div class="row justify-content-center align-items-center">

    <div class="col-xl-9 col-lg-10 col-md-12 col-sm-12">
      <div class="position-relative text-center mb-5">
        <h1>Săn vé máy bay giá rẻ</h1>
        <p class="fs-5 fw-light">So sánh giá vé từ hàng trăm hãng hàng không, đặt vé nhanh chóng, tiện lợi và tiết kiệm
          nhất.</p>
      </div>
    </div>

    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div class="search-wrap bg-white rounded-3 p-3">
        <div class="search-upper">
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="flx-start mb-sm-0 mb-2">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="trip" id="return" value="option1" checked>
                <label class="form-check-label" for="return">Khứ hồi</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="trip" id="oneway" value="option2">
                <label class="form-check-label" for="oneway">Một chiều</label>
              </div>
            </div>
            <div class="flx-end d-flex align-items-center flex-wrap">
              <div class="ps-1 pb-3 pt-0 mob-full">
                <div class="dropdowns">
                  <div class="selections" @click="toggleCabinDropdown">
                    <span class="selected">
                      {{ selectedCabin.label }}
                    </span>

                    <div class="caret" :class="{ 'caret-rotate': isCabinDropdownOpen }"></div>
                  </div>

                  <ul class="menu" :class="{ 'menu-open': isCabinDropdownOpen }">
                    <li v-for="cabin in cabinOptions" :key="cabin.value"
                      :class="{ active: cabin.value === selectedCabin.value }" @click.stop="selectCabin(cabin)">
                      {{ cabin.label }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-lg-2 g-3">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="row gy-3 gx-lg-2 gx-3">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div class="form-group mb-0">
                  <div class="inputIicon">
                    <div class="myIcon">
                      <svg width="24" height="24" viewBox="0 0 24 24" class="fill-primary"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                          d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" />
                        <path
                          d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" />
                      </svg>
                    </div>
                    <div class="input-box autocomplete-container" @focusout="isDepartureSuggestionsOpen = false">
                      <input v-model="departureAirport" class="form-control fw-medium fs-md flightInput" type="text"
                        placeholder="Sân bay đi" autocomplete="off" @focus="openDepartureSuggestions"
                        @input="openDepartureSuggestions">

                      <div v-show="isDepartureSuggestionsOpen" class="suggestions">
                        <div v-for="airport in filteredDepartureAirports" :key="airport.iata" class="suggestion-item"
                          @mousedown.prevent="selectDepartureAirport(airport)">
                          <div class="place-name">
                            <i class="bi bi-geo-alt"></i>

                            {{ airport.city }}
                            ({{ airport.iata }})
                          </div>

                          <div class="duration">
                            {{ airport.airport }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn-flip-icon mt-md-0">
                  <button @click.prevent="swapAirport" class="p-0 m-0 text-primary"><i
                      class="fa-solid fa-right-left"></i></button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div class="form-group mb-0">
                  <div class="inputIicon">
                    <div class="myIcon ms-md-2 ms-sm-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" class="fill-primary"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                          d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" />
                        <path
                          d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" />
                      </svg>
                    </div>
                    <div class="input-box autocomplete-container" @focusout="isArrivalSuggestionsOpen = false">
                      <input v-model="arrivalAirport" class="form-control fw-medium fs-md flightInput" type="text"
                        placeholder="Sân bay đến" autocomplete="off" @focus="openArrivalSuggestions"
                        @input="openArrivalSuggestions">

                      <div v-show="isArrivalSuggestionsOpen" class="suggestions">
                        <div v-for="airport in filteredArrivalAirports" :key="airport.iata" class="suggestion-item"
                          @mousedown.prevent="selectArrivalAirport(airport)">
                          <div class="place-name">
                            <i class="bi bi-geo-alt"></i>

                            {{ airport.city }}
                            ({{ airport.iata }})
                          </div>

                          <div class="duration">
                            {{ airport.airport }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12">
            <div class="row gy-3 gx-lg-2 gx-3">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0">
                  <div class="inputIicon">
                    <div class="myIcon">
                      <svg width="24" height="24" viewBox="0 0 24 24" class="fill-primary"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                          d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" />
                        <path
                          d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" />
                        <path
                          d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" />
                      </svg>
                    </div>
                    <div class="input-box">
                      <input class="form-control fw-medium fs-md choosedate" type="text"
                        placeholder="Ngày khởi hành - Kết thúc" readonly="readonly">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="form-group mb-0">
                  <div class="inputIicon">
                    <div class="myIcon">
                      <svg width="24" height="24" viewBox="0 0 24 24" class="fill-primary"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" />
                        <path
                          d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" />
                      </svg>
                    </div>
                    <div class="input-box">
                      <div class="selection-container">
                        <div class="traveler-box">
                          <input type="text" class="form-control fw-medium input-box fs-md traveler-input"
                            value="1 Adult" readonly>
                          <div class="traveler-dropdown" data-has-rooms="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-12">
            <div class="form-group mb-0">
              <button type="button" class="btn btn-primary full-width fw-medium"><i
                  class="fa-solid fa-magnifying-glass me-2"></i>Tìm chuyến bay</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { ref, reactive, computed, onMounted, watch } from 'vue'

const cabinOptions = [
  { label: 'Economy', value: 'economy' },
  { label: 'Premium Economy', value: 'premium-economy' },
  { label: 'Business/First', value: 'business-first' },
  { label: 'Business', value: 'business' },
]

const selectedCabin = ref(cabinOptions[0])
const isCabinDropdownOpen = ref(false)

function toggleCabinDropdown() {
  isCabinDropdownOpen.value = !isCabinDropdownOpen.value
}

function selectCabin(cabin) {
  selectedCabin.value = cabin
  isCabinDropdownOpen.value = false
}
const emit = defineEmits(['search'])
const errors = reactive({
  airport: null,
  flightType: null,
  departureDate: null,
  returnDate: null,
  passenger: null,
})
const flightType = ref('one-way')
const adt = ref(1)
const chd = ref(0)
const inf = ref(0)
const totalPassengers = computed(() => adt.value + chd.value + inf.value)
const showPassengerBox = ref(false)
const departureDate = ref(null)
const returnDate = ref(null)
const today = new Date().toISOString().split('T')[0]
const airports = [
  {
    city: 'TP. Hồ Chí Minh',
    airport: 'Sân bay quốc tế Tân Sơn Nhất',
    iata: 'SGN',
  },
  {
    city: 'Hà Nội',
    airport: 'Sân bay quốc tế Nội Bài',
    iata: 'HAN',
  },
  {
    city: 'Đà Nẵng',
    airport: 'Sân bay quốc tế Đà Nẵng',
    iata: 'DAD',
  },
  {
    city: 'Phú Quốc',
    airport: 'Sân bay quốc tế Phú Quốc',
    iata: 'PQC',
  },
  {
    city: 'Nha Trang',
    airport: 'Sân bay quốc tế Cam Ranh',
    iata: 'CXR',
  },
]

const departureAirport = ref('')
const selectedDepartureAirport = ref(null)
const isDepartureSuggestionsOpen = ref(false)
const arrivalAirport = ref('')
const selectedArrivalAirport = ref(null)
const isArrivalSuggestionsOpen = ref(false)

function filterAirports(keyword) {
  const search = keyword.trim().toLowerCase()

  if (!search) {
    return airports
  }

  return airports.filter((airport) => (
    airport.city.toLowerCase().includes(search) ||
    airport.airport.toLowerCase().includes(search) ||
    airport.iata.toLowerCase().includes(search)
  ))
}

const filteredDepartureAirports = computed(() => {
  return filterAirports(departureAirport.value)
})

const filteredArrivalAirports = computed(() => {
  return filterAirports(arrivalAirport.value)
})

function openDepartureSuggestions() {
  isDepartureSuggestionsOpen.value = true
}

function openArrivalSuggestions() {
  isArrivalSuggestionsOpen.value = true
}

function selectDepartureAirport(airport) {
  selectedDepartureAirport.value = airport
  departureAirport.value = `${airport.city} (${airport.iata})`
  isDepartureSuggestionsOpen.value = false
}

function selectArrivalAirport(airport) {
  selectedArrivalAirport.value = airport
  arrivalAirport.value = `${airport.city} (${airport.iata})`
  isArrivalSuggestionsOpen.value = false
}

// Computed properties
const passengerSummary = computed(() => {
  const parts = []
  if (adt.value > 0) parts.push(`${adt.value} Người lớn`)
  if (chd.value > 0) parts.push(`${chd.value} Trẻ em`)
  if (inf.value > 0) parts.push(`${inf.value} Em bé`)
  return parts.join(', ')
})

watch(departureAirport, () => {
  delete errors.airport
})

watch(arrivalAirport, () => {
  delete errors.airport
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

function swapAirport() {
  const temp = departureAirport.value
  departureAirport.value = arrivalAirport.value
  arrivalAirport.value = temp
}

const normalizeData = () => {
  const DATE_FORMAT = 'YYYY-MM-DD';

  return {
    flightType: flightType.value,

    startPoint: departureAirport.value?.iata?.toUpperCase().trim() ?? null,
    endPoint: arrivalAirport.value?.iata?.toUpperCase().trim() ?? null,

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

const clearErrors = () => {
  errors.airport = null
  errors.flightType = null
  errors.departureDate = null
  errors.returnDate = null
  errors.passenger = null
}


const validateSearchForm = (formData) => {
  clearErrors()

  if (!formData.startPoint) {
    errors.airport = 'Vui lòng chọn điểm đi'
  }

  if (!formData.endPoint) {
    errors.airport = 'Vui lòng chọn điểm đến'
  }

  if (
    formData.startPoint &&
    formData.endPoint &&
    formData.startPoint === formData.endPoint
  ) {
    errors.airport = 'Điểm đi và điểm đến không được giống nhau'
  }

  if (!formData.departureDate) {
    errors.departureDate = 'Vui lòng chọn ngày đi'
  }

  if (formData.flightType === 'round-trip' && !formData.returnDate) {
    errors.returnDate = 'Vui lòng chọn ngày về'
  }

  if (formData.returnDate && formData.departureDate) {
    if (new Date(formData.returnDate) < new Date(formData.departureDate)) {
      errors.returnDate = 'Ngày về không được trước ngày đi'
    }
  }

  if (totalPassengers.value > 9) {
    errors.passenger = 'Tối đa 9 hành khách'
  }

  if (inf.value > adt.value) {
    errors.passenger = 'Mỗi người lớn chỉ được đi cùng tối đa 1 em bé'
  }

  return !Object.values(errors).some(Boolean)
}

const handleSearch = () => {
  clearErrors()

  const formData = normalizeData()
  const isValid = validateSearchForm(formData)

  if (!isValid) return

  emit('search', formData)
}

onMounted(() => {
  departureDate.value = today
})
</script>
