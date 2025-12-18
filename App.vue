
<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import FeatureGrid from './components/FeatureGrid.vue';
import WorkShowcase from './components/WorkShowcase.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <FeatureGrid />
      <WorkShowcase />
      <Testimonials />
    </main>
    <Footer />
  </div>
</template>
