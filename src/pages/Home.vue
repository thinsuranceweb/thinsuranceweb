<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- About Preview Section -->
    <section class="bg-white py-20 text-center md:text-left">
      <div class="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <!-- Text -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            A Legacy of Trust & Transparency
          </h2>
          <p class="text-gray-700 mb-6 leading-relaxed">
            At <span class="font-semibold">TH Insurance Brokers</span>, we’ve built
            a reputation on understanding the unique needs of individuals and
            businesses alike. Our tailored solutions go beyond standard coverage
            — they provide real peace of mind.
          </p>
          <RouterLink
            to="/about"
            class="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Learn More About Us
          </RouterLink>
        </div>

        <!-- Image -->
        <div class="relative">
          <img
            src="../../public/additonal_images/umberella_2.jpg"
            alt="Insurance meeting"
            class=" w-full object-cover rounded-xl shadow-xl"
          />
          <!-- <div
            class="absolute -bottom-5 -right-5 bg-blue-400 text-slate-900 px-6 py-3 rounded-lg shadow-md font-semibold"
          >
            15+ Years of Expertise
          </div> -->
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- Stats Section -->
    <StatsSection />

    <!-- Testimonials Section -->
    <PartnersSection />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import ServicesSection from "../components/ServicesSection.vue";
import StatsSection from "../components/StatsSection.vue";
import CTASection from "../components/CTASection.vue";
import { RouterLink } from "vue-router";
import PartnersSection from "../components/PartnersSection.vue";
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeUp 0.9s ease-out;
}
</style>
