<template>
  <div v-if="hasSelectedFlight" class="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-md">
    <div class="mx-auto flex max-w-7xl items-stretch gap-4 px-6 py-3">
      <!-- Back -->
      <div class="flex-[2]">
        <button type="button"
          class="flex h-full min-h-[76px] w-full items-center justify-center border border-gray-300 font-semibold text-gray-700 transition hover:bg-gray-100"
          @click="emit('back')">
          <i class="fa-solid fa-arrow-left mr-2"></i>
          Quay lại
        </button>
      </div>
      <!-- Outbound -->
      <div v-if="outboundFlight" :class="showInboundFlight ? 'flex-[4]' : 'flex-[8]'"
        class="flex min-w-0 items-center justify-between border border-blue-100 bg-blue-50 px-4 py-2">
        <div class="min-w-0">
          <p class="text-sm font-bold uppercase text-primary">
            Chuyến bay đi
          </p>
          <div class="mt-1 flex items-center gap-2">
            <p class="truncate text-sm font-bold text-gray-900">
              {{ getAirlineName(outboundFlight.airline) }}
            </p>
            <span class="shrink-0 text-sm text-gray-500">
              {{ outboundFlight.flight_number }}
            </span>
          </div>
          <p class="mt-0.5 truncate text-xs text-gray-600">
            {{ outboundFlight.origin }}
            <i class="fa-solid fa-arrow-right mx-1 text-xs"></i>
            {{ outboundFlight.destination }}
            <span class="mx-1">·</span>
            {{ formatTime(outboundFlight.departure_date) }}
            -
            {{ formatTime(outboundFlight.arrival_date) }}
          </p>
        </div>
        <div class="shrink-0 pl-3 text-right">
          <p class="text-xs text-gray-500">Giá vé</p>
          <p class="text-lg font-bold leading-tight text-primary">
            {{
              formatCurrency(
                outboundFlight.total_fare,
                outboundFlight.currency
              )
            }}
          </p>
        </div>
      </div>
      <!-- Inbound -->
      <div v-if="showInboundFlight"
        class="flex-[4] flex min-w-0 items-center justify-between border border-blue-100 bg-blue-50 px-4 py-2">
        <div class="min-w-0">
          <p class="text-sm font-bold uppercase text-primary">
            Chuyến bay về
          </p>
          <div class="mt-1 flex items-center gap-2">
            <p class="truncate text-sm font-bold text-gray-900">
              {{ getAirlineName(inboundFlight.airline) }}
            </p>
            <span class="shrink-0 text-sm text-gray-500">
              {{ inboundFlight.flight_number }}
            </span>
          </div>
          <p class="mt-0.5 truncate text-xs text-gray-600">
            {{ inboundFlight.origin }}
            <i class="fa-solid fa-arrow-right mx-1 text-xs"></i>
            {{ inboundFlight.destination }}
            <span class="mx-1">·</span>
            {{ formatTime(inboundFlight.departure_date) }}
            -
            {{ formatTime(inboundFlight.arrival_date) }}
          </p>
        </div>
        <div class="shrink-0 pl-3 text-right">
          <p class="text-xs text-gray-500">Giá vé</p>
          <p class="text-lg font-bold leading-tight text-primary">
            {{
              formatCurrency(
                inboundFlight.total_fare,
                inboundFlight.currency
              )
            }}
          </p>
        </div>
      </div>
      <!-- Continue -->
      <div class="flex-[2]">
        <button type="button"
          class="h-full min-h-[76px] w-full bg-secondary text-lg font-bold text-gray-900 shadow transition hover:bg-secondary-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-secondary"
          @click="emit('continue')">
          Tiếp tục
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { formatCurrency } from '@/utils/currency';
const props = defineProps({
  tripType: {
    type: String,
    required: true,
    validator: value => ['one-way', 'round-trip'].includes(value),
  },
  selectedFlight: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['back', 'continue']);
const outboundFlight = computed(() => {
  return props.selectedFlight?.outboundFlight ?? null;
});
const inboundFlight = computed(() => {
  return props.selectedFlight?.inboundFlight ?? null;
});
const isRoundTrip = computed(() => {
  return props.tripType === 'round-trip';
});
const hasSelectedFlight = computed(() => {
  return !!outboundFlight.value || !!inboundFlight.value;
});
const showInboundFlight = computed(() => {
  return isRoundTrip.value && !!inboundFlight.value;
});
const canContinue = computed(() => {
  if (isRoundTrip.value) {
    return !!outboundFlight.value && !!inboundFlight.value;
  }
  return !!outboundFlight.value;
});
const formatTime = dateString => {
  if (!dateString) {
    return '--:--';
  }
  return new Date(dateString).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
const getAirlineName = code => {
  const airlines = {
    VN: 'Vietnam Airlines',
    VJ: 'VietJet Air',
    QH: 'Bamboo Airways',
    VU: 'Vietravel Airlines',
    BL: 'Pacific Airlines',
    P8: 'Air Mekong',
  };
  return airlines[code] ?? code ?? 'Không xác định';
};
</script>
