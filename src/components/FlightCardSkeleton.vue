<template>
  <div class="bg-white border border-gray-200 p-3 animate-pulse">
    <div class="flex flex-col lg:flex-row gap-6">

      <!-- Airline -->
      <div class="lg:w-1/4 flex items-center gap-4">
        <div class="w-16 h-16 bg-gray-100"></div>

        <div class="space-y-3 flex-1">
          <div class="h-5 w-36 bg-gray-100 rounded"></div>
          <div class="h-4 w-28 bg-gray-100 rounded"></div>
        </div>
      </div>

      <!-- Route -->
      <div class="flex-1 flex items-center justify-between gap-4 px-4">
        <div class="text-center space-y-2">
          <div class="h-7 w-16 bg-gray-100 rounded"></div>
          <div class="h-4 w-10 bg-gray-100 rounded mx-auto"></div>
        </div>

        <div class="flex-1 flex flex-col items-center px-4 space-y-3">
          <div class="h-4 w-20 bg-gray-100 rounded-full"></div>

          <div class="w-full flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gray-200"></div>
            <div class="flex-1 h-0.5 bg-gray-200"></div>
            <div class="w-4 h-4 rounded-full bg-gray-200"></div>
            <div class="flex-1 h-0.5 bg-gray-200"></div>
            <div class="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>

          <div class="h-4 w-14 bg-gray-100 rounded"></div>
        </div>

        <div class="text-center space-y-2">
          <div class="h-7 w-16 bg-gray-100 rounded"></div>
          <div class="h-4 w-10 bg-gray-100 rounded mx-auto"></div>
        </div>
      </div>

      <!-- Price -->
      <div
        class="lg:w-1/5 flex flex-row lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6">
        <div class="space-y-3">
          <div class="h-4 w-24 bg-gray-100 rounded"></div>
          <div class="h-7 w-32 bg-gray-100 rounded"></div>
        </div>

        <div class="flex items-center gap-4">
          <div class="h-5 w-16 bg-gray-100 rounded"></div>
          <div class="h-10 w-20 bg-gray-100"></div>
        </div>
      </div>

    </div>
  </div>
</template>
