<template>
  <div
    class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100 text-center flex flex-col items-center justify-between"
  >
    <!-- Icon slot (you can pass an SVG or Lucide icon) -->
    <div
      class="text-blue-700 text-5xl mb-6 transition-transform duration-300 group-hover:scale-110"
    >
      <slot name="icon"></slot>
    </div>

    <!-- Title -->
    <h3
      class="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-800 transition-colors duration-300"
    >
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 text-sm mb-6 leading-relaxed">
      {{ description }}
    </p>

    <!-- Link -->
    <RouterLink
      :to="link"
      class="text-blue-700 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
    >
      Learn more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, default: "/services" },
});
</script>
