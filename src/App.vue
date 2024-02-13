<script setup>
import VHeader from "./components/VHeader.vue";
import VHero from "./components/VHero.vue";
import VCompany from "./components/VCompany.vue";
import VFooter from "./components/VFooter.vue";
import VCta from "./components/VCta.vue";
import VFeedback from "./components/VFeedback.vue";
import VFeatures from "./components/VFeatures.vue";
import VProduct from "./components/VProduct.vue";
</script>

<template>
  <div class="bg-black">
    <div class="container mx-auto sm:pl-0 sm:pr-0 pl-6 pr-6">
      <VHeader />
      <VHero />
      <VCompany />
      <VProduct />
      <VFeatures />
      <VFeedback />
      <VCta />
      <VFooter />
    </div>
  </div>
</template>

<style scoped>
</style>
