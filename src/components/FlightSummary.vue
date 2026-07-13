<template>
  <div class="rounded-xl bg-gray-50 px-4 py-3">
    <p class="mb-1 text-sm font-bold text-primary">{{ title }}</p>
    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <p class="truncate text-base font-bold text-gray-900">
          {{ flight.airline_name || flight.airline }}
        </p>
        <p class="truncate text-sm text-gray-600">
          {{ flight.origin || flight.source_iata }}
          →
          {{ flight.destination || flight.destination_iata }}
        </p>
      </div>
      <div class="shrink-0 text-right">
        <p class="text-sm text-gray-500">Giá vé</p>
        <p class="text-lg font-extrabold text-primary">
          {{ formatCurrency(flight.total_fare || flight.price) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  flight: {
    type: Object,
    required: true,
  },
});

const formatCurrency = (value) => {
  if (!value) return '---';

  return new Intl.NumberFormat('vi-VN').format(value) + ' VND';
};
</script>
