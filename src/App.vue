<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarWithNavbar from './components/layouts/SidebarWithNavbar.vue';
import TopbarMenu from './components/layouts/TopbarMenu.vue';
</script>

<template>
  <div>
    <TopbarMenu/>
    <SidebarWithNavbar />
    <router-view class="view main-content h-screen bg-grey p-4 sm:ml-72 sm:mt-12"></router-view>
  </div>
</template>