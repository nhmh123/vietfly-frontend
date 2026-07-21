<template>
  <div class="image-cover hero-header bg-white"
    style="background:url(https://jetinternational.com/wp-content/uploads/2016/11/iStock-177708665-5.jpg)no-repeat;"
    data-overlay="6">
    <div class="container">

      <!-- Search Form -->
      <BookingForm />
      <!-- </row> -->

    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import BookingForm from '@/components/BookingForm.vue'

function goToSearchPage(payload) {
  router.push({
    name: 'search-flight',
    query: payload,
  })
}
</script>
