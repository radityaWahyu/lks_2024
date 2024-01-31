<template>
  <div>
    <the-top-nav-bar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import TheTopNavBar from './components/TheTopNavBar.vue'
</script>
