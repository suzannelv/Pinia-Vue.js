<template>
  <div class="home">
    <h2>Home</h2>
    <h2>name: {{name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">modifier state</button>
    <button @click="resetState">reset State</button>
  </div>
</template>

<script setup>
import useUser from '@/stores/user'
import { storeToRefs } from 'pinia';

const useStore = useUser()
const {name, age, level} = storeToRefs(useStore)

function changeState() {
  // 1.一个一个修改状态
  // useStore.name="kobe",
  // useStore.age=20,
  // useStore.level=99
  // 2. 一次性修改多个状态
  // useStore.$patch({
  //   name: "james",
  //   age: 29,
  //   level:2
  // })

  // 3. 替换state为新的对象
  useStore.$state = {
    name: "curry",
    level:200
  }
}

function resetState() {
useStore.$reset()
}
</script>
<style scoped>
</style>