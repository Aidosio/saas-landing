<script setup>
import cards from '../assets/cards-icon.svg'
import coin from '../assets/coin-icon.svg'
import purse from '../assets/purse-icon.svg'

const arr = [
  {
    title: "All in one place",
    description: "The right place to keep your credit and debit cards, boarding passes & more.",
    icon: cards
  },
  {
    title: "No payment fee",
    description: "Transfer your payment all over the world with no payment fee.",
    icon: coin
  },
  {
    title: "Customizable card",
    description: "Custom your own card for your exact incomes and expenses needs.",
    icon: purse
  },
]

</script>

<template>
  <div class="flex xl:flex-row flex-col justify-between items-center gap-20 pt-12 pb-12">
    <div class="flex flex-col gap-12">
      <div class="flex flex-row text-white gap-10" v-for="(item, index) in arr" :key="index">
        <img class="w-16 object-contain" :src="item.icon" alt="icon">
        <div class="flex flex-col gap-2">
          <h4 class="">{{item.title}}</h4>
          <p class="font-light text-white opacity-30">{{item.description}}</p>
        </div>
      </div>
    </div>
    <img class="xl:w-3/5 w-full object-contain" src="../assets/features.png" alt="features">
  </div>
</template>

<style scoped>

</style>
