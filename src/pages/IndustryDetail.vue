<template>
  <div class="bg-white text-slate-800" v-if="industry">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source :src="industry.heroVideo || '/8731231-hd_1920_1080_25fps.mp4'" type="video/mp4" />
        </video>

        <div class="relative z-10 max-w-5xl">
          <p class="text-sm uppercase tracking-wider text-slate-600 mb-3">
            Industries
          </p>
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-900">
            {{ industry.title }}
          </h1>
          <p class="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            {{ industry.subtitle }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3 justify-center">
            <RouterLink
              to="/contact"
              class="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
            >
              Request a consultation
            </RouterLink>
            <RouterLink
              to="/industries"
              class="bg-white text-blue-900 px-6 py-3 rounded-xl shadow hover:shadow-md transition"
            >
              View all industries
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-24 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-blue-900">Overview</h2>
          <p class="text-gray-700 leading-relaxed">
            {{ industry.intro }}
          </p>

          <div class="grid sm:grid-cols-3 gap-4">
            <div
              v-for="(s, i) in industry.quickStats"
              :key="i"
              class="p-5 bg-slate-50 rounded-2xl hover:shadow-md transition"
            >
              <p class="text-xs uppercase tracking-wider text-gray-500">{{ s.label }}</p>
              <p class="mt-2 font-semibold text-blue-900">{{ s.value }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <img
            :src="industry.heroImage"
            :alt="industry.title"
            class="rounded-2xl shadow-xl w-full object-cover max-h-[460px]"
            loading="lazy"
          />
          <div class="absolute bottom-6 left-6 bg-white/90 px-4 py-3 rounded-lg shadow-md flex items-center gap-3">
            <component :is="industry.icon" class="h-5 w-5 text-blue-900" />
            <div class="text-left">
              <p class="font-semibold text-blue-900">{{ industry.title }}</p>
              <p class="text-sm text-gray-500">Tailored insurance programme</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Risk Areas -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">Key risk areas</h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          We focus on the risks that cause real-world disruption — then structure cover and service around them.
        </p>

        <div class="grid md:grid-cols-3 gap-10 text-left">
          <div
            v-for="(r, i) in industry.riskAreas"
            :key="i"
            class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="h-10 w-10 rounded-xl bg-slate-50 grid place-items-center">
                <component :is="r.icon" class="h-6 w-6 text-blue-900" />
              </div>
              <h3 class="font-semibold text-xl text-blue-900">{{ r.title }}</h3>
            </div>

            <ul class="text-gray-700 leading-relaxed space-y-2 list-disc pl-5">
              <li v-for="(p, idx) in r.points" :key="idx">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section class="py-24 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">Typical cover solutions</h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          Coverage is always tailored, but these are the most common building blocks we structure for this sector.
        </p>

        <div class="grid md:grid-cols-2 gap-10 text-left">
          <div
            v-for="(s, i) in industry.solutions"
            :key="i"
            class="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition"
          >
            <div class="flex items-start gap-4">
              <div class="h-12 w-12 rounded-xl bg-white shadow-sm grid place-items-center">
                <component :is="s.icon" class="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 class="font-semibold text-xl text-blue-900">{{ s.title }}</h3>
                <p class="mt-2 text-gray-700 leading-relaxed">{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <RouterLink
            to="/contact"
            class="inline-flex bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            Get a tailored quote
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Our Process (same vibe as Mission/Approach cards) -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">Our process</h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          A clear, consistent workflow that keeps decisions simple and cover aligned to your operations.
        </p>

        <div class="grid md:grid-cols-4 gap-10 text-left">
          <div
            v-for="(a, i) in industry.approach"
            :key="i"
            class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <div class="h-11 w-11 rounded-xl bg-slate-50 grid place-items-center mb-4">
              <component :is="a.icon" class="h-6 w-6 text-blue-900" />
            </div>
            <h3 class="font-semibold text-xl text-blue-900 mb-2">{{ a.title }}</h3>
            <p class="text-gray-700 leading-relaxed">{{ a.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs (optional per industry) -->
    <section v-if="industry.faqs?.length" class="py-24 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-blue-900 mb-10 text-center">FAQs</h2>

        <div class="space-y-6">
          <details
            v-for="(f, i) in industry.faqs"
            :key="i"
            class="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition"
          >
            <summary class="cursor-pointer font-semibold text-blue-900">
              {{ f.q }}
            </summary>
            <p class="mt-4 text-gray-700 leading-relaxed">
              {{ f.a }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Prev/Next -->
    <section class="py-14 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <RouterLink
          v-if="prev"
          :to="`/industries/${prev.slug}`"
          class="p-5 bg-slate-50 rounded-2xl hover:shadow-md transition flex-1 text-left"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500">Previous</p>
          <p class="mt-1 font-semibold text-blue-900">{{ prev.title }}</p>
        </RouterLink>
        <div v-else class="flex-1" />

        <RouterLink
          v-if="next"
          :to="`/industries/${next.slug}`"
          class="p-5 bg-slate-50 rounded-2xl hover:shadow-md transition flex-1 text-right"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500">Next</p>
          <p class="mt-1 font-semibold text-blue-900">{{ next.title }}</p>
        </RouterLink>
        <div v-else class="flex-1" />
      </div>
    </section>
  </div>

  <div v-else class="bg-white min-h-[60vh] grid place-items-center text-slate-700">
    Industry not found.
  </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getIndustryBySlug, getPrevNext } from "../data/industriesContent";

const route = useRoute();

const industry = computed(() => getIndustryBySlug(route.params.slug));
const prevNext = computed(() => getPrevNext(route.params.slug));
const prev = computed(() => prevNext.value.prev);
const next = computed(() => prevNext.value.next);

watchEffect(() => {
  if (!industry.value) return;
  document.title = `${industry.value.title} | Industries | T.H. Insurance Brokers`;
});
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