<template>
  <aside class="hidden md:block w-full bg-white border border-gray-200 rounded-2xl p-5 h-fit animate-pulse">
    <!-- Sort -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-5 h-5 rounded bg-gray-200"></div>
        <div class="h-5 w-20 rounded bg-gray-200"></div>
      </div>

      <div class="space-y-3">
        <div v-for="item in 5" :key="`sort-${item}`" class="flex items-center gap-3">
          <div class="w-5 h-5 rounded-full bg-gray-200"></div>
          <div class="h-4 w-36 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>

    <!-- Stop Points -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-5 h-5 rounded bg-gray-200"></div>
        <div class="h-5 w-24 rounded bg-gray-200"></div>
      </div>

      <div class="space-y-2">
        <div v-for="item in 3" :key="`stop-${item}`"
          class="flex items-center justify-between rounded-xl border border-gray-100 p-3">
          <div class="flex items-center gap-3">
            <div class="w-4 h-4 rounded-full bg-gray-200"></div>
            <div class="h-4 w-32 rounded bg-gray-200"></div>
          </div>

          <div class="h-4 w-8 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>

    <!-- Airlines -->
    <div>
      <div class="flex items-center gap-2 mb-4">
        <div class="w-5 h-5 rounded bg-gray-200"></div>
        <div class="h-5 w-36 rounded bg-gray-200"></div>
      </div>

      <div class="space-y-3">
        <div v-for="item in 4" :key="`airline-${item}`" class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-5 h-5 rounded bg-gray-200"></div>
            <div class="h-4 w-32 rounded bg-gray-200"></div>
          </div>

          <div class="h-4 w-20 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="mt-8 flex gap-3">
      <div class="flex-1 h-12 rounded-2xl bg-gray-200"></div>
      <div class="flex-1 h-12 rounded-2xl bg-gray-200"></div>
    </div>
  </aside>
</template>
