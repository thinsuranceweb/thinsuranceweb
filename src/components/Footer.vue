<template>
  <footer class="bg-slate-900 text-gray-300 pt-16 pb-8">
    <div
      class="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
    >
      <!-- Company Info -->
      <div>
        <img src="../../public/additonal_images/logo_white.png" alt="" class="w-50">
        <p class="text-gray-400 leading-relaxed">
          We provide comprehensive insurance solutions tailored to your needs,
          offering trusted advice, policy placement, and 24/7 claims assistance.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-white font-bold text-xl mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="/"
              class="hover:text-blue-400 transition-colors duration-200"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/services"
              class="hover:text-blue-400 transition-colors duration-200"
              >Services</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/industries"
              class="hover:text-blue-400 transition-colors duration-200"
              >Industries</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="hover:text-blue-400 transition-colors duration-200"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/gallery"
              class="hover:text-blue-400 transition-colors duration-200"
              >Gallery</RouterLink
            >
          </li>
           <li>
            <RouterLink
              to="/library"
              class="hover:text-blue-400 transition-colors duration-200"
              >Library</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="hover:text-blue-400 transition-colors duration-200"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Contact Details -->
      <div>
        <h3 class="text-white font-bold text-xl mb-4">Contact</h3>
        <ul class="space-y-2">
          <li>
            <span class="font-semibold text-blue-400">Email:</span>
            info@thinsurancebrokers.com
          </li>
          <li>
            <span class="font-semibold text-blue-400">Phone:</span>
            <div class="flex flex-col">
              <span>+251 911217247</span>
              <span>+251 911204045</span>
              <span>+251 911503700</span>
            </div>
         
          </li>
          <li>
            <span class="font-semibold text-blue-400">Address:</span>
           Bole Medhanialem, Addis Ababa, Ethiopia
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-6 md:px-10 mt-10 border-t border-gray-700 pt-6 text-center">
      <p class="text-sm text-gray-400">
        © {{ new Date().getFullYear() }} TH Insurance Brokers. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
