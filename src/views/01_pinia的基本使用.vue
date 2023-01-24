<template>
  <div class="home">
    <h2>Home</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>count: {{ count }}</h2>
    <button @click="incrementCount"> +1</button>
  </div>
</template>

<script setup>
import useCounter from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counterStore = useCounter()


const {count} = storeToRefs(counterStore)

function incrementCount() {
  counterStore.count++
}
</script>

<style scoped>
</style>