<script setup>
import logos from '../assets/Logos.png'
import logos1 from '../assets/Logos-1.png'
import logos2 from '../assets/Logos-2.png'
import logos3 from '../assets/Logos-3.png'
import logos4 from '../assets/Logos-4.png'

const arr = [
  logos,
  logos1,
  logos2,
  logos3,
  logos4,
]
</script>

<template>
  <div class="flex flex-row flex-wrap content-center gap-8 border-y border-white/[.30] p-16 justify-between">
    <img class="max-h-6 object-contain cursor-pointer" v-for="(item, index) in arr" :key="index" :src="item" alt="company">
  </div>
</template>

<style lang="css" scoped>
</style>
