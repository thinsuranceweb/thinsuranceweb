<template>
  <div class="bg-white text-slate-800">
    <!-- Hero Section -->
    <section
      class="relative py-28 px-6 bg-gradient-to-br from-blue-50 to-white text-center"
    >
      <div class="max-w-5xl mx-auto">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight"
        >
          Comprehensive, End-to-End Insurance Solutions
        </h1>
        <p
          class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Empowering organisations with innovative, data-driven insurance and
          risk-management strategies designed for protection, stability, and
          long-term growth.
        </p>

        <!-- Quick Stats test-->
        <div class="grid sm:grid-cols-2 gap-10 mt-16 text-center">
          <div>
            <h3 class="text-5xl font-extrabold text-blue-900">18+</h3>
            <p class="text-gray-500 text-sm mt-1 uppercase tracking-wide">
              Insurance Partners
            </p>
          </div>  
          <div>
            <h3 class="text-5xl font-extrabold text-blue-900">24+</h3>
            <p class="text-gray-500 text-sm mt-1 uppercase tracking-wide">
              Years Experience
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
          Tailored Expertise for Every Sector
        </h2>
        <p class="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          From risk assessment to claims advocacy, we deliver seamless,
          transparent, and client-centred insurance solutions designed to
          protect your business and your people.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="bg-slate-50 py-20">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <h2 class="text-3xl font-bold text-blue-900 mb-12 text-center">
          Our Services
        </h2>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
          >
            <p class="text-blue-900/70 text-sm font-semibold mb-2">
              [ {{ index + 1 }} ]
            </p>
            <h3 class="text-xl font-semibold text-blue-900 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              {{ service.description }}
            </p>
            <RouterLink
              :to="`/services/${service.slug}`"
              class="inline-block px-5 py-2 text-sm rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
            >
              View Details
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">
          Why Choose TH Insurance Brokers
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          We don’t just sell policies — we build partnerships. Our team brings a
          consultative approach, ensuring you receive personalised advice, clear
          guidance, and continuous support.
        </p>

        <div class="grid md:grid-cols-3 gap-10 text-left">
          <div
            class="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h4 class="font-semibold text-xl text-blue-900 mb-3">
              Trusted Expertise
            </h4>
            <p class="text-gray-600 leading-relaxed">
              Over two decades of proven experience across diverse industries
              and risk environments.
            </p>
          </div>
          <div
            class="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h4 class="font-semibold text-xl text-blue-900 mb-3">
              Client Advocacy
            </h4>
            <p class="text-gray-600 leading-relaxed">
              We act in your best interest, representing you with transparency
              and ethical responsibility.
            </p>
          </div>
          <div
            class="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h4 class="font-semibold text-xl text-blue-900 mb-3">
              Long-Term Partnership
            </h4>
            <p class="text-gray-600 leading-relaxed">
              We build enduring relationships that evolve with your business,
              ensuring consistent protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    title: "Risk Assessment & Analysis",
    description:
      "Identifying and evaluating potential threats across your operations to design strategic, proactive protection plans.",
    slug: "risk-assessment-analysis",
  },
  {
    title: "Insurance Policy Sourcing",
    description:
      "Comparing multiple insurers to source the most suitable and cost-effective policy for your specific needs.",
    slug: "insurance-policy-sourcing",
  },
  {
    title: "Consultancy Services",
    description:
      "Expert advisory on policy terms, compliance, and regulatory requirements to help you make informed decisions.",
    slug: "consultancy-services",
  },
  {
    title: "Policy Placement",
    description:
      "Negotiating and placing tailored policies to ensure you receive precise, timely, and compliant coverage.",
    slug: "policy-placement",
  },
  {
    title: "Claims Assistance",
    description:
      "End-to-end claims management and advocacy — ensuring quick, fair outcomes and minimal disruption.",
    slug: "claims-assistance",
  },
  {
    title: "Renewals & Policy Maintenance",
    description:
      "Ongoing review and optimisation of your coverage to align with changing needs and evolving risks.",
    slug: "renewals-policy-maintenance",
  },
  {
    title: "Client Education & Training",
    description:
      "Empowering clients through workshops and resources to understand their coverage and reduce risk exposure.",
    slug: "client-education-training",
  },
];
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
