<template>
  <div v-if="item" class="bg-white text-slate-800">
    <!-- Header -->
    <section class="py-16 border-b border-gray-100">
      <div class="max-w-6xl mx-auto px-6">
        <p class="text-sm uppercase tracking-wider text-gray-500 mb-4">
          Home / Library / {{ item.title }}
        </p>

        <h1 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          {{ item.title }}
        </h1>

        <div class="flex items-center gap-4 text-gray-500 text-sm">
          <span>{{ item.category }}</span>
          <span>•</span>
          <span>{{ item.date }}</span>
        </div>
      </div>
    </section>

    <!-- Sticky Action Bar -->
    <div class="sticky top-0 bg-white border-b border-gray-100 z-20">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/library" class="text-blue-900 font-semibold">
          ← Back to Library
        </RouterLink>

        <a
          :href="item.pdf"
          download
          class="bg-blue-900 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition"
        >
          Download PDF
        </a>
      </div>
    </div>

    <!-- PDF Viewer -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            :src="item.pdf"
            class="w-full h-[80vh]"
          ></iframe>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-[60vh] grid place-items-center">
    Document not found.
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { libraryItems } from "../data/libraryContent";

const route = useRoute();

const item = computed(() =>
  libraryItems.find((doc) => doc.slug === route.params.slug)
);
</script>