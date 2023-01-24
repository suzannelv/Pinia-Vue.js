<template>
  <div class="home">
    <h2>Home</h2>
    <h2>doubleCount: {{ counterStore.count}}</h2>

    <button @click="changeState">modifier state</button>
  
    <!-- 展示数据 -->
    <h2>轮播图数据</h2>
    <ul>
        <template v-for="item in homeStore.banners">
          <li>{{ item.title}}</li>
        </template>
    </ul>
  </div>
</template>

<script setup>
import useCounter from '@/stores/counter'
import useHome from '@/stores/home'

const counterStore = useCounter()

function changeState() {
  // counterStore.increment()
  counterStore.incrementNum(10)
}

const homeStore = useHome()
homeStore.fetchHomeMultidata().then(res=>{
  console.log("fetch Home action est fini")
})

</script>
<style scoped>
</style>