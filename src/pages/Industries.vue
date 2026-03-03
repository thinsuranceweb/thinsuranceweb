<template>
  <div class="bg-white text-slate-800">
    <!-- Hero -->
    <section
      class="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center overflow-hidden"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/13386633_3840_2160_50fps.mp4" type="video/mp4" />
      </video>

      <div class="relative z-10 max-w-5xl">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-900">
          Industries We Support
        </h1>
        <p class="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Sector-specific programmes built around real operational risks — with clear cover,
          responsive service, and practical guidance when it matters.
        </p>
      </div>
    </section>

    <!-- Industry cards -->
    <section class="py-24 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 class="text-4xl font-bold text-blue-900">Explore our industries</h2>
            <p class="text-gray-600 mt-3 max-w-2xl">
              Each page explains the core risks, typical cover structures, and how we support clients
              from placement through claims.
            </p>
          </div>

          <RouterLink
            to="/contact"
            class="hidden md:inline-flex bg-blue-900 text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            Speak to an adviser
          </RouterLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <RouterLink
            v-for="item in industries"
            :key="item.slug"
            :to="`/industries/${item.slug}`"
            class="group p-8 bg-slate-50 rounded-2xl hover:shadow-md transition"
          >
            <div class="flex items-start gap-4">
              <div class="h-12 w-12 rounded-xl bg-white shadow-sm grid place-items-center">
                <component :is="item.icon" class="h-6 w-6 text-blue-900" />
              </div>

              <div class="min-w-0">
                <h3 class="font-semibold text-xl text-blue-900 group-hover:underline">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-600 mt-1">{{ item.subtitle }}</p>
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed mt-6 line-clamp-4">
              {{ item.intro }}
            </p>

            <div class="mt-6 inline-flex items-center text-blue-900 font-semibold">
              View details <span class="ml-2">→</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why this approach (matches your Mission/Approach style) -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">Why sector-specific matters</h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          Generic cover can hide gaps. We focus on the risks that actually impact each sector —
          so policies are easier to manage and clearer at claims time.
        </p>

        <div class="grid md:grid-cols-3 gap-10 text-left">
          <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl text-blue-900 mb-3">Clarity</h3>
            <p class="text-gray-700 leading-relaxed">
              We prioritise plain explanations, structured limits, and clean documentation.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl text-blue-900 mb-3">Continuity</h3>
            <p class="text-gray-700 leading-relaxed">
              Coverage designed around realistic recovery times, dependencies, and cashflow needs.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl text-blue-900 mb-3">Support</h3>
            <p class="text-gray-700 leading-relaxed">
              Practical service for endorsements, certificates, and claims guidance — when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { industries } from "../data/industriesContent";
</script>

<style scoped>
section {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>