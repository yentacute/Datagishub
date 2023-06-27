<template>
    <div>
        hallow
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import apiRequest from '../helpers/api'
const router = useRouter()
const route = useRoute()
const fetchData = async() => {
    const { data } = await apiRequest.getDetails(route.params.id);
    console.log(data);
}
fetchData();
</script>