<template>
  <div>
    <div class="show-page">
      <!-- <component :is="layout"> -->
      <router-view></router-view>
      <!-- </component> -->
      <!-- <RouterView /> -->

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from "vue-router";
// import GuestLayout from "@/layouts/guest/GuestLayout.vue";


// const route = useRoute();
// const layout = computed(() => route.meta.layout || GuestLayout);

</script>