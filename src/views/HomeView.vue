<script setup>
import { ref } from 'vue'
import apiRequest from '../helpers/api';
const appData = ref([])
const fetchData = async () => {
  const { data } = await apiRequest.getAll();
  appData.value = data;
}

fetchData();
</script>

<template>
  <main >
    <div class="flex items-center rounded py-4 w-100 flex-wrap">
      <div class="w-1/3 border p-2 border-slate-100 mb-3 bg-gray-50 h-auto dark:bg-gray-800" v-for="(item, index) in appData" :key="index">
        <img :src="item.image" alt="">
        <router-link :to="{name: 'dynamicComponent', params:{id: item.id}}" class="py-2">{{ item.name }}</router-link>
      </div>
    </div>
   
  </main>
</template>
