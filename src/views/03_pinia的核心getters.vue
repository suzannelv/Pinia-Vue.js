<template>
  <div class="home">
    <h2>Home</h2>
    <h2>doubleCount: {{ counterStore.doubleCount}}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne}}</h2>
    <h2>friend-111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>friend-112: {{ counterStore.getFriendById(112) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>


    <button @click="changeState">modifier state</button>
    <button @click="resetState">reset State</button>
  </div>
</template>

<script setup>
import useCounter from '@/stores/counter'

const counterStore = useCounter()
</script>
<style scoped>
</style>