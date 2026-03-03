<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

// Only close the mobile menu when route changes, if route is defined
watch(
  () => route?.fullPath,
  () => {
    if (isOpen.value) isOpen.value = false;
  },
);
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50"
  >
    <div
      class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-blue-900 tracking-tight hover:text-blue-700 transition"
      >
        <img src="../../public/additonal_images/logo.png" alt="" class="w-50" />
      </RouterLink>

      <!-- Desktop Menu -->
      <ul
        class="hidden md:flex space-x-8 text-slate-700 font-medium items-center"
      >
        <li>
          <RouterLink
            to="/"
            class="hover:text-blue-700 transition"
            :class="{ 'text-blue-700 font-semibold': route?.path === '/' }"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/services"
            class="hover:text-blue-700 transition"
            :class="{
              'text-blue-700 font-semibold':
                route?.path?.startsWith('/services'),
            }"
          >
            Services
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/industries"
            class="hover:text-blue-700 transition"
            :class="{
              'text-blue-700 font-semibold':
                route?.path?.startsWith('/industries'),
            }"
          >
            Industries
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="hover:text-blue-700 transition"
            :class="{ 'text-blue-700 font-semibold': route?.path === '/about' }"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/gallery"
            class="hover:text-blue-700 transition"
            :class="{
              'text-blue-700 font-semibold': route?.path === '/gallery',
            }"
          >
            Gallery
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/library"
            class="hover:text-blue-700 transition"
            :class="{
              'text-blue-700 font-semibold': route?.path === '/library',
            }"
          >
            Library
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="hover:text-blue-700 transition"
            :class="{
              'text-blue-700 font-semibold': route?.path === '/contact',
            }"
          >
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="bg-blue-700 text-white px-4 py-2 rounded-4xl hover:bg-blue-800 transition"
          >
            BOOK A CALL
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-slate-700 focus:outline-none text-3xl"
        aria-label="Toggle menu"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-white border-t border-gray-200 shadow-sm py-4 text-center space-y-3"
      >
        <RouterLink
          to="/"
          class="block text-slate-700 hover:text-blue-700"
          :class="{ 'text-blue-700 font-semibold': route?.path === '/' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/services"
          class="block text-slate-700 hover:text-blue-700"
          :class="{
            'text-blue-700 font-semibold': route?.path?.startsWith('/services'),
          }"
        >
          Services
        </RouterLink>
        <RouterLink
          to="/industries"
          class="block text-slate-700 hover:text-blue-700"
          :class="{
            'text-blue-700 font-semibold': route?.path === '/industries',
          }"
        >
          Industries
        </RouterLink>
        <RouterLink
          to="/about"
          class="block text-slate-700 hover:text-blue-700"
          :class="{ 'text-blue-700 font-semibold': route?.path === '/about' }"
        >
          About
        </RouterLink>
        <RouterLink
          to="/gallery"
          class="block text-slate-700 hover:text-blue-700"
          :class="{ 'text-blue-700 font-semibold': route?.path === '/gallery' }"
        >
          Gallery
        </RouterLink>
         <RouterLink
          to="/library"
          class="block text-slate-700 hover:text-blue-700"
          :class="{ 'text-blue-700 font-semibold': route?.path === '/library' }"
        >
          Library
        </RouterLink>
        <RouterLink
          to="/contact"
          class="block text-slate-700 hover:text-blue-700"
          :class="{ 'text-blue-700 font-semibold': route?.path === '/contact' }"
        >
          Contact
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition mt-2"
        >
          Get a Quote
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* optional subtle shadow for modern look */
nav {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
</style>
