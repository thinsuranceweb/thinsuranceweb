<template>
  <div class="bg-white text-slate-800">
    <!-- Hero Section (Matches Services.vue) -->
    <section
      class="relative py-28 px-6 bg-gradient-to-br from-blue-50 to-white text-center"
    >
      <div class="max-w-5xl mx-auto">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight"
        >
          Insurance Library & Publications
        </h1>
        <p
          class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Access official directives, proclamations, and regulatory publications.
          Designed to provide clarity, transparency, and informed decision-making.
        </p>

        <!-- Quick Stats (Optional but keeps consistency) -->
        <div class="grid sm:grid-cols-3 gap-10 mt-16 text-center">
          <div>
            <h3 class="text-5xl font-extrabold text-blue-900">
              {{ libraryItems.length }}
            </h3>
            <p class="text-gray-500 text-sm mt-1 uppercase tracking-wide">
              Published Documents
            </p>
          </div>
          <div>
            <h3 class="text-5xl font-extrabold text-blue-900">100%</h3>
            <p class="text-gray-500 text-sm mt-1 uppercase tracking-wide">
              Official Sources
            </p>
          </div>
          <div>
            <h3 class="text-5xl font-extrabold text-blue-900">24/7</h3>
            <p class="text-gray-500 text-sm mt-1 uppercase tracking-wide">
              Digital Access
            </p>
          </div>
        </div>
      </div>

      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/8201577-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- Intro -->
    <section class="py-24 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">
          Explore Our Publications
        </h2>
        <p class="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Browse through regulatory directives, insurance proclamations,
          and industry updates. Use filters or search to quickly find
          relevant documents.
        </p>
      </div>
    </section>

    <!-- Search & Filter -->
  

    <!-- Documents Grid (Styled Like Services Cards) -->
    <section class="bg-slate-50 py-12 border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div
            v-for="(item, index) in filtered"
            :key="item.slug"
            class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
          >
            <p class="text-blue-900/70 text-sm font-semibold mb-2">
              [ {{ index + 1 }} ]
            </p>

            <h3 class="text-xl font-semibold text-blue-900 mb-3">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              {{ item.description }}
            </p>

            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">
                {{ item.date }}
              </span>

              <RouterLink
                :to="`/library/${item.slug}`"
                class="inline-block px-5 py-2 text-sm rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
              >
                View Document
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { libraryItems } from "../data/libraryContent";

const search = ref("");
const category = ref("");

const filtered = computed(() => {
  return libraryItems.filter((item) => {
    const matchesCategory = category.value
      ? item.category === category.value
      : true;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});
</script>

<style scoped>
section {
  animation: fadeIn 0.8s ease-in-out;
}

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
</style>