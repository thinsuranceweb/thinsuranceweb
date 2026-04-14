<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-[90vh] text-white overflow-hidden"
  >
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/7821854-hd_1920_1080_30fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/90 to-slate-900/95"
    ></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 max-w-4xl text-center px-6 animate-fadeIn w-full mt-16"
    >
      <h1
        class="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
      >
        Your Risk, Our <span class="text-blue-400">Resolve.</span><br /> We protect.
      </h1>

      <p class="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
        Client-oriented insurance and risk-management solutions for Corporate,
        NGOs, individuals, family, conglomerate, and businesses — tailored to
        your needs, backed by 24/7 free consultation and advisory support.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
      >
        <RouterLink
          to="/contact"
          class="bg-blue-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Get a Quote
        </RouterLink>

        <RouterLink
          to="/services"
          class="border border-blue-400 text-blue-400 font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition"
        >
          Explore Services
        </RouterLink>
      </div>

      <!-- Partner Logos (Mouse + Touch Draggable + Auto Scroll) -->
      <div
        ref="slider"
        class="overflow-hidden w-full mt-6 opacity-80 cursor-grab active:cursor-grabbing select-none"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <div
          ref="track"
          class="flex items-center gap-16 will-change-transform"
          :style="{ transform: `translateX(${offset}px)` }"
        >
          <img
            v-for="(logo, index) in doubledLogos"
            :key="index"
            :src="logo"
            alt="partner logo"
            class="h-12 md:h-14 opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0 select-none pointer-events-none"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const logos = [
  "/partners/abay.png",
  "/partners/africa.png",
  "/partners/awash.png",
  "/partners/berhan.png",
  "/partners/buna.png",
  "/partners/elig.png",
  "/partners/global.png",
  "/partners/lion.png",
  "/partners/lucy.png",
  "/partners/nib.png",
  "/partners/nice.png",
  "/partners/nie.png",
  "/partners/nyla.png",
  "/partners/oromia.png",
  "/partners/tsehay.png",
  "/partners/united.png",
  "/partners/zemen.png",
];
const doubledLogos = [...logos, ...logos];

const track = ref(null);
const offset = ref(0);
let isDragging = false;
let startX = 0;
let lastX = 0;
let velocity = 0;
let animationFrame;
let scrollSpeed = 0.3; // auto-scroll speed
let smoothness = 0.95; // inertia feel

// Animate loop (auto scroll + inertia)
const animate = () => {
  const width = track.value.scrollWidth / 2;

  if (!isDragging) {
    offset.value -= scrollSpeed;
  } else if (Math.abs(velocity) > 0.05) {
    offset.value += velocity;
    velocity *= smoothness;
  }

  // seamless infinite scroll
  if (offset.value <= -width) offset.value += width;
  if (offset.value >= 0) offset.value -= width;

  animationFrame = requestAnimationFrame(animate);
};

// --- Mouse Events ---
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

// --- Touch Events (Mobile + Tablets) ---
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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-in-out;
}

video {
  filter: brightness(0.85);
}

img {
  flex-shrink: 0;
  -webkit-user-drag: none;
  user-select: none;
}
</style>
