<template>
  <div class="bg-white text-slate-900">

    <!-- ================= HERO ================= -->
    <section
      class="relative flex items-center justify-center min-h-[70vh] px-6 text-center overflow-hidden fade-section"
    >
      <!-- Background Video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/6344466-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>

      <!-- White Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6">
          Certifications & Recognition
        </h1>
        <p class="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
          A testament to our commitment to professionalism, compliance, and
          excellence in the insurance brokerage industry.
        </p>
      </div>
    </section>

    <!-- ================= GALLERY GRID ================= -->
    <section class="py-24 px-6 fade-section">
      <div class="max-w-7xl mx-auto">

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 cursor-pointer"
            @click="openModal(index)"
          >
            <img
              :src="image.src"
              class="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- ================= LIGHTBOX MODAL ================= -->
    <transition name="fade">
      <div
        v-if="activeIndex !== null"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        @click.self="closeModal"
      >
        <div class="relative max-w-5xl w-full">
          <img
            :src="images[activeIndex].src"
            class="w-full rounded-2xl shadow-2xl"
          />

          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
  { src: "/gallery/1.jpg" },
  { src: "/gallery/2.jpg" },
  { src: "/gallery/3-rotated.jpg" },
  { src: "/gallery/4.jpg" },
  { src: "/gallery/5.jpg" },
  { src: "/gallery/6.jpg" },
  { src: "/gallery/7-rotated.jpg" },
  { src: "/gallery/8-rotated.jpg" },
  { src: "/gallery/9-rotated.jpg" },
  { src: "/gallery/10-rotated.jpg" },
  { src: "/gallery/11.jpg" },
  { src: "/gallery/12.jpg" },
];

const activeIndex = ref(null);

const openModal = (index) => {
  activeIndex.value = index;
};

const closeModal = () => {
  activeIndex.value = null;
};
</script>

<style scoped>

/* Page Fade Animation (same as About) */
.fade-section {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modal Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slight brightness tuning for video */
video {
  filter: brightness(0.9);
}


</style>