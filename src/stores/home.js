import { defineStore } from "pinia";

const useHome = defineStore("home", {
  state: () => ({
    banners: [],
    recommands: []
  }),

  actions: {
    async fetchHomeMultidata() {
       const res = await fetch("http://123.207.32.32:8000/home/multidata")
       const data = await res.json()
       this.banners = data.data.banner.list
       this.recommands = data.data.recommend.list
    }
  }
})

export default useHome