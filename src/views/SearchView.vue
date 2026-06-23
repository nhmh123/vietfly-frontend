<template>
  <section class="sticky top-19 z-40 bg-primary lg:bg-body-bg text-white lg:text-black px-4 py-3">
    <div class="max-w-6xl mx-auto">

      <!-- Mobile -->
      <div class="flex items-center md:hidden">

        <!-- Back -->
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" class="mr-3 text-xl shrink-0">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </router-link>

        <!-- Content -->
        <div class="flex-1 min-w-0 text-center">
          <div class="font-bold text-lg truncate">
            Hà Nội đi TP. Hồ Chí Minh
          </div>

          <div class="text-sm flex items-center justify-center gap-1 text-blue-100">
            <span class="truncate">Thứ 3, 23 tháng 06</span>
            <span>·</span>
            <span>1 khách</span>
            <span>·</span>
            <span>Khứ hồi</span>

            <button class="ml-1 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center">
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- Desktop -->
      <form
        class="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">

        <div class="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Điểm đi</label>
            <input type="text" placeholder="Hà Nội (HAN)"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
          </div>
          <div class="flex flex-col">
            <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Điểm đến</label>
            <input type="text" placeholder="TP. HCM (SGN)"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
          </div>
        </div>

        <div class="flex flex-col">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Ngày đi - Về</label>
          <input type="date"
            class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
        </div>

        <div class="flex flex-col">
          <label class="text-[11px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Hành khách</label>
          <select
            class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option>1 người lớn</option>
            <option>2 người lớn</option>
          </select>
        </div>

        <button type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-95">
          Tìm kiếm
        </button>
      </form>

    </div>
  </section>
  <!-- Layout chính: 2 cột (Sidebar chiếm 1/4, Danh sách chiếm 3/4) -->
  <main class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gray-50">

    <!-- Sidebar bộ lọc -->
    <!-- <aside class="hidden md:block col-span-1">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h2 class="font-bold mb-4">Bộ lọc</h2>
        <nav>
          <label class="flex items-center gap-2 mb-2">
            <input type="checkbox" class="accent-blue-600"> Vietravel Airlines
          </label>
        </nav>
      </div>
    </aside> -->
    <FlightFilter />


    <!-- Danh sách chuyến bay -->
    <section class="col-span-1 md:col-span-3 space-y-8">

      <!-- Chiều đi -->
      <section>
        <h2 class="text-xl font-bold mb-4">Chuyến bay đi</h2>
        <ul class="space-y-4">
          <!-- Loop 15 chuyến bay đi -->
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <!-- Bạn có thể copy thẻ <li> này 15 lần để tạo đủ số lượng -->
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <!-- Chiều về -->
      <section>
        <h2 class="text-xl font-bold mb-4 mt-8">Chuyến bay về</h2>
        <ul class="space-y-4">
          <!-- Loop 15 chuyến bay về tương tự... -->
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
          <li class="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <article class="flex flex-col md:flex-row justify-between items-center p-4">
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-600">Vietravel Airlines - VU797 (Airbus 321)</p>
                <div class="flex items-center gap-6 mt-2">
                  <div class="text-center">
                    <time class="text-xl font-bold">22:05</time>
                    <p class="text-xs text-gray-400">HAN</p>
                  </div>
                  <div class="flex-1 text-center border-t border-gray-300 relative">
                    <span class="text-xs text-gray-500 bg-white px-2">2h 15m - Direct</span>
                  </div>
                  <div class="text-center">
                    <time class="text-xl font-bold">00:20</time>
                    <p class="text-xs text-gray-400">SGN</p>
                  </div>
                </div>
              </div>
              <div class="ml-8 border-l border-gray-200 pl-8 text-right">
                <p class="text-sm">Hạng: Economy Saver (E13)</p>
                <p class="text-lg font-bold text-blue-600">1,326,440 VND</p>
                <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Chọn</button>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup>
import FlightFilter from '@/components/FlightFilter.vue';
</script>
