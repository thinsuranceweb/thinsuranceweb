<template>
  <div>
    <!-- Hero Banner -->
    <section
      class="relative flex items-center justify-center h-[50vh] text-white bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"
    >
      <div
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style="background-image: url('/images/policy-hero.jpg');"
      ></div>
      <div class="relative z-10 text-center px-6">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">
          Policy Placement
        </h1>
        <p class="text-gray-200 max-w-2xl mx-auto text-lg">
          Comprehensive policy sourcing, negotiation, and placement to secure
          the most suitable coverage for your needs.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div>
          <img
            src="/images/policy-placement.jpg"
            alt="Policy negotiation"
            class="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <!-- Text -->
        <div>
          <h2 class="text-3xl font-bold text-blue-900 mb-6">
            Securing the Right Coverage for You
          </h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            Our experts analyse your requirements, identify potential risks, and
            negotiate with leading insurers to find policies that fit your
            budget and protection goals. We act as your advocate, ensuring every
            detail of your policy provides genuine value.
          </p>

          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              In-depth risk assessment and coverage evaluation.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              Comparison of quotes from multiple trusted insurers.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              Transparent advice with no hidden commissions or surprises.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 text-xl">✔</span>
              Full policy documentation and post-placement support.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Extra Info -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">
          Our Policy Placement Process
        </h3>
        <p class="text-gray-600 max-w-3xl mx-auto mb-10">
          We handle every stage of the policy placement process — from the
          initial consultation to policy delivery and renewal support.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">1. Consultation</h4>
            <p class="text-gray-600 text-sm">
              We listen to your needs and assess the specific risks your
              business or personal assets face.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">2. Market Research</h4>
            <p class="text-gray-600 text-sm">
              Our team evaluates offers from multiple insurers to find the best
              coverage and premium balance.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">3. Negotiation</h4>
            <p class="text-gray-600 text-sm">
              We negotiate directly with insurers on your behalf to secure
              competitive rates and strong coverage terms.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-8">
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">4. Documentation</h4>
            <p class="text-gray-600 text-sm">
              We manage all policy documentation, ensuring clarity and accuracy
              before activation.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">5. Placement</h4>
            <p class="text-gray-600 text-sm">
              Once finalised, your policy is activated and all records securely
              stored for future reference.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 class="font-semibold text-blue-900 mb-2">6. Ongoing Support</h4>
            <p class="text-gray-600 text-sm">
              Our commitment doesn’t end at placement — we assist with
              renewals, updates, and future adjustments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
