<script setup>
import { RouterView } from 'vue-router'
import FooterMain from '@/components/FooterMain.vue'
import NavMain from '@/components/NavMain.vue'

// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full max-w-[1920px] ">
    <!-- <NavMain /> -->
    <RouterView />
    <!-- <FooterMain /> -->
  </div>
</template>

<style scoped></style>
