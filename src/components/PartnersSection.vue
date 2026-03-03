<template>
  <section class="relative bg-blue-900 py-20 text-white overflow-hidden select-none">
    <!-- Header -->
    <div class="text-center relative z-10 mb-12 px-6">
      <h2 class="text-4xl font-bold mb-4">Our Partners</h2>
      <div class="h-1 w-20 bg-white mx-auto rounded-full mb-6"></div>
      <p class="text-gray-300 max-w-2xl mx-auto">
        We’re honoured to work with leading insurance and financial partners who
        trust us to deliver excellence.
      </p>
    </div>

    <!-- Scroll Area -->
    <div
      ref="slider"
      class="relative overflow-hidden cursor-grab active:cursor-grabbing"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseLeave"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <!-- Gradient fade edges -->
      <div
        class="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-blue-900 to-transparent z-10 pointer-events-none"
      ></div>
      <div
        class="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-blue-900 to-transparent z-10 pointer-events-none"
      ></div>

      <!-- Logos track -->
      <div
        ref="track"
        class="flex gap-20 items-center will-change-transform"
        :style="{ transform: `translateX(${offset}px)` }"
      >
        <template v-for="(logo, index) in doubledPartners" :key="index">
          <img
            :src="`/partners/${logo}`"
            :alt="logo.replace('.png', '')"
            class="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            loading="lazy"
            draggable="false"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const partners = [
  "abay.png",
  "africa.png",
  "awash.png",
  "berhan.png",
  "buna.png",
  "elig.png",
  "global.png",
  "lion.png",
  "lucy.png",
  "nib.png",
  "nice.png",
  "nie.png",
  "nyla.png",
  "oromia.png",
  "tsehay.png",
  "united.png",
  "zemen.png",
];
const doubledPartners = [...partners, ...partners];

const track = ref(null);
const offset = ref(0);
let animationFrame;
let isDragging = false;
let startX = 0;
let lastX = 0;
let velocity = 0;
let scrollSpeed = 0.35; // base auto-scroll speed
let smoothness = 0.96; // inertia / deceleration feel

// Core animation loop (auto-scroll + inertia)
const animate = () => {
  const width = track.value.scrollWidth / 2;

  if (!isDragging) {
    offset.value -= scrollSpeed; // auto-scroll left
  } else if (Math.abs(velocity) > 0.05) {
    offset.value += velocity;
    velocity *= smoothness;
  }

  // Seamless wrap both directions
  if (offset.value <= -width) offset.value += width;
  if (offset.value >= 0) offset.value -= width;

  animationFrame = requestAnimationFrame(animate);
};

// --- Mouse Dragging ---
const onMouseDown = (e) => {
  if (e.button !== 0) return;
  cancelAnimationFrame(animationFrame);
  isDragging = true;
  startX = e.clientX;
  lastX = startX;
  velocity = 0;
};
const onMouseMove = (e) => {
  if (!isDragging) return;
  const dx = e.clientX - lastX;
  offset.value += dx;
  velocity = dx;
  lastX = e.clientX;
};
const onMouseUp = () => {
  if (!isDragging) return;
  isDragging = false;
  animationFrame = requestAnimationFrame(animate);
};
const onMouseLeave = () => {
  if (isDragging) onMouseUp();
};

// --- Touch Events (Mobile & Tablet) ---
const onTouchStart = (e) => {
  const touch = e.touches[0];
  cancelAnimationFrame(animationFrame);
  isDragging = true;
  startX = touch.clientX;
  lastX = startX;
  velocity = 0;
};

const onTouchMove = (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  const dx = touch.clientX - lastX;
  offset.value += dx;
  velocity = dx;
  lastX = touch.clientX;
};

const onTouchEnd = () => {
  if (!isDragging) return;
  isDragging = false;
  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => (animationFrame = requestAnimationFrame(animate)));
onUnmounted(() => cancelAnimationFrame(animationFrame));
</script>

<style scoped>
[ref="track"] {
  transition: transform 0.08s ease-out;
}
</style>
