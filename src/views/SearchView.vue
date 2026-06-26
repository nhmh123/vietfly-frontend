<template>
  <!-- <TempComponent /> -->

  <div class="grid grid-cols-1 lg:grid-cols-4 mt-8 mb-12">
    <!-- Filter -->
    <aside class="lg:col-span-1">
      <div class="sticky top-[90px]">
        <FlightFilter />
      </div>
    </aside>

    <!-- Danh sách chuyến bay -->
    <section class="lg:col-span-3 space-y-10">
      <!-- Outbound -->
      <section class="px-4">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-1 h-7 rounded-full bg-primary"></div>

          <h2 class="text-2xl font-bold text-gray-900">
            Chuyến bay đi
          </h2>
        </div>

        <ul class="space-y-4">
          <FlightCard :stop-num="0" :stop-points="[]" />

          <FlightCard :stop-num="1" :stop-points="[
            { airport: 'DAD', duration: '55m' }
          ]" />

          <FlightCard :stop-num="2" :stop-points="[
            { airport: 'DAD', duration: '55m' },
            { airport: 'HAN', duration: '1h 10m' }
          ]" />

          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />
          <FlightCard :stop-num="3" :stop-points="[
            { airport: 'DAD', duration: '45m' },
            { airport: 'HAN', duration: '1h 10m' },
            { airport: 'BKK', duration: '50m' }
          ]" />

        </ul>
      </section>

      <!-- Inbound -->
      <section v-if="tripType === 'roundTrip'" class="px-4">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-1 h-7 rounded-full bg-primary"></div>

          <h2 class="text-2xl font-bold text-gray-900">
            Chuyến bay về
          </h2>
        </div>

        <ul class="space-y-4">
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </ul>
      </section>
    </section>
  </div>
</template>

<script setup>
import FlightFilter from '@/components/FlightFilter.vue';
import FlightCard from '@/components/FlightCard.vue';
import TempComponent from '@/components/TempComponent.vue';

const tripType = 'roundTrip'
</script>
