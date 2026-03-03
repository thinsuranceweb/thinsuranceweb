<template>
  <section
    class="relative text-black py-20 overflow-hidden"
  >
    <!-- Decorative Overlay (optional subtle pattern) -->
    <div
      class="absolute inset-0 opacity-10"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle fill=\'%23ffffff\' cx=\'50\' cy=\'50\' r=\'1\'/%3E%3C/svg%3E');"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Ready to Secure Your Future?
      </h2>
      <p class="text-lg text-black max-w-2xl mx-auto mb-10">
        Let our experienced team guide you through finding the right insurance
        solutions for your personal or business needs.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <RouterLink
          to="/contact"
          class="bg-blue-400 text-white 0 font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Request a Quote
        </RouterLink>

        <RouterLink
          to="/services"
          class="border border-blue-500 text-blue-500 font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition"
        >
          View Our Services
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Optional subtle entrance animation */
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
