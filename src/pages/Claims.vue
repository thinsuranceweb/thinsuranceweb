<template>
  <div>
    <!-- Hero Banner -->
    <section
      class="relative flex items-center justify-center h-[50vh] text-white bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"
    >
      <div
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style="background-image: url('/images/claims-hero.jpg');"
      ></div>
      <div class="relative z-10 text-center px-6">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">
          Claims Assistance
        </h1>
        <p class="text-gray-200 max-w-2xl mx-auto text-lg">
          Round-the-clock claims support designed to make your experience
          seamless and stress-free.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div>
          <img
            src="/images/claims-team.jpg"
            alt="Claims support team"
            class="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <!-- Text Content -->
        <div>
          <h2 class="text-3xl font-bold text-blue-900 mb-6">
            We’re With You Every Step of the Way
          </h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            Navigating insurance claims can be overwhelming — that’s why our
            dedicated claims team provides 24/7 assistance to ensure you’re never
            alone. We handle all the details, from documentation to negotiation,
            allowing you to focus on recovery and peace of mind.
          </p>

          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              24/7 claims hotline for immediate assistance.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              Dedicated case manager to handle your claim personally.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              End-to-end documentation and claim filing support.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              Transparent communication and timely updates at every stage.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Extra Info -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">
          Why Choose Our Claims Assistance?
        </h3>
        <p class="text-gray-600 max-w-3xl mx-auto mb-10">
          Our claims department doesn’t just process paperwork — we act as your
          advocate. Whether you’re dealing with property loss, vehicle damage,
          or business interruption, our experts ensure every claim receives the
          attention it deserves.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">Fast Turnaround</h4>
            <p class="text-gray-600 text-sm">
              We prioritise efficiency to get your claims processed as quickly
              as possible.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">Expert Guidance</h4>
            <p class="text-gray-600 text-sm">
              Our claim handlers are highly trained professionals with deep
              industry expertise.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">Personal Care</h4>
            <p class="text-gray-600 text-sm">
              We know every claim represents a person or a business relying on
              our help — and we treat it that way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<script setup>
import CTASection from "../components/CTASection.vue";
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

section {
  animation: fadeIn 1s ease-in-out;
}
</style>
