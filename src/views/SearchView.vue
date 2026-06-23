<template>
  <section class="p-4 bg-white border-b border-gray-300">
    <div class="max-w-6xl mx-auto">

      <div class="overflow-hidden w-full px-4">
        <div class="flex items-center justify-between text-sm font-bold text-gray-700">
          <span class="truncate">Hà Nội (HAN)</span>
          <span class="text-gray-400 px-2">→</span>
          <span class="truncate">TP. Hồ Chí Minh (SGN)</span>
          <button class="text-blue-600 underline ml-2">Sửa</button>
        </div>
      </div>

      <form class="hidden md:grid grid-cols-5 gap-4 items-end">
        <div class="flex flex-col">
          <label class="text-xs font-bold text-gray-500 mb-1">Điểm đi</label>
          <input type="text" placeholder="Hà Nội (HAN)" class="p-2 border border-gray-300 rounded">
        </div>
        <div class="flex flex-col">
          <label class="text-xs font-bold text-gray-500 mb-1">Điểm đến</label>
          <input type="text" placeholder="TP. Hồ Chí Minh (SGN)" class="p-2 border border-gray-300 rounded">
        </div>
        <div class="flex flex-col">
          <label class="text-xs font-bold text-gray-500 mb-1">Ngày đi - Về</label>
          <input type="date" class="p-2 border border-gray-300 rounded">
        </div>
        <div class="flex flex-col">
          <label class="text-xs font-bold text-gray-500 mb-1">Hành khách</label>
          <select class="p-2 border border-gray-300 rounded">
            <option>1 người lớn</option>
          </select>
        </div>
        <button type="submit" class="bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700">
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

<style scoped></style>
