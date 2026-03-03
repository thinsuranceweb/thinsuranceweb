<template>
  <div class="bg-white text-slate-800">
    <!-- HERO SECTION -->
    <section
      class="relative bg-blue-950 text-white py-28 px-6 flex items-center justify-center"
      :style="{
        backgroundImage: `linear-gradient(rgba(10,20,40,0.7), rgba(10,20,40,0.7)), url('${service.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ service.title }}</h1>
        <p class="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {{ service.intro }}
        </p>
      </div>
    </section>

    <!-- WHAT THE SERVICE DELIVERS -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-blue-900 mb-4">What This Service Delivers</h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            {{ service.overview }}
          </p>

          <ul class="space-y-3">
            <li
              v-for="(point, index) in service.keypoints"
              :key="index"
              class="flex items-start space-x-3"
            >
              <span class="text-blue-900 font-bold mt-1">•</span>
              <p class="text-gray-700">{{ point }}</p>
            </li>
          </ul>
        </div>

        <img
          :src="service.featureImage"
          alt="Service illustration"
          class="rounded-2xl shadow-lg w-full object-cover h-[400px]"
        />
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="py-24 bg-blue-50 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-blue-900 mb-12 text-center">
          How You Benefit
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="(benefit, i) in service.benefits"
            :key="i"
            class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 class="text-lg font-semibold text-blue-900 mb-2">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ benefit.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
        <p class="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {{ service.whyUs }}
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-blue-900 text-white py-20 text-center">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-3xl font-bold mb-4">
          Ready to Strengthen Your Business Protection?
        </h3>
        <p class="text-gray-300 mb-8">
          Our experts are ready to design the right insurance and risk solutions for your organisation.
        </p>
        <RouterLink
          to="/contact"
          class="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get in Touch
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const servicesData = {
  /* ---------------------------------------------------------
   * 1. RISK ASSESSMENT & ANALYSIS
   * --------------------------------------------------------- */
  "risk-assessment-analysis": {
    title: "Risk Assessment & Analysis",
    hero: "/services_pictures/policy.jpg",
    intro:
      "Identify, quantify, and manage threats before they impact your business. Our risk assessment process delivers data-driven protection strategies tailored to your operations.",
    overview:
      "We help organisations uncover vulnerabilities and assess how internal and external factors could disrupt their assets, people, or operations. Using evidence-based analysis, we provide actionable insights that form the backbone of a strong risk management strategy.",
    keypoints: [
      "Pinpoint weaknesses across your organisation’s infrastructure and processes.",
      "Quantify potential losses and prioritise key exposures.",
      "Develop structured, measurable risk mitigation frameworks.",
    ],
    featureImage: "/services_pictures/policy2.jpg",
    benefits: [
      { title: "Comprehensive Exposure Review", text: "Full assessment of operational, financial, and cyber threats." },
      { title: "Data-Driven Modelling", text: "Scenario-based risk calculations that inform smarter planning." },
      { title: "Executive Workshops", text: "Collaborative sessions to build shared understanding of key risks." },
      { title: "Mitigation Roadmap", text: "Strategic recommendations that protect your business continuity." },
      { title: "Ongoing Risk Monitoring", text: "Continuous insights to stay ahead of emerging threats." },
    ],
    whyUs:
      "We combine analytical precision with strategic foresight. We don’t just identify risks — we help you turn them into opportunities by strengthening resilience and decision-making confidence.",
  },

  /* ---------------------------------------------------------
   * 2. INSURANCE POLICY SOURCING
   * --------------------------------------------------------- */
  "insurance-policy-sourcing": {
    title: "Insurance Policy Sourcing",
    hero: "/services_pictures/sourcing1.jpg",
    intro:
      "Access the best coverage available in the market. We compare, negotiate, and deliver policies that meet your operational needs at competitive rates.",
    overview:
      "Our expert brokers connect you to leading insurers locally and globally. We conduct deep market research and ensure every policy aligns with your risk profile, helping you save costs while gaining the right protection.",
    keypoints: [
      "Access a wide network of trusted insurance providers.",
      "Compare policy terms transparently before committing.",
      "Secure premium coverage at the most competitive rates.",
    ],
    featureImage: "/services_pictures/sourcing2.jpg",
    benefits: [
      { title: "Unbiased Market Comparison", text: "We benchmark providers to ensure transparent, fair choices." },
      { title: "Tailored Policy Design", text: "Coverage customised to your industry’s risks and objectives." },
      { title: "Negotiation Expertise", text: "We handle negotiations to achieve optimal coverage and pricing." },
      { title: "End-to-End Management", text: "From sourcing to documentation, everything handled for you." },
      { title: "Transparent Reporting", text: "Every recommendation backed by clear data and rationale." },
    ],
    whyUs:
      "We act solely in your best interest — not the insurer’s. Our experienced brokers ensure you receive coverage that truly fits your needs, providing clarity, value, and peace of mind.",
  },

  /* ---------------------------------------------------------
   * 3. CONSULTANCY SERVICES
   * --------------------------------------------------------- */
  "consultancy-services": {
    title: "Consultancy Services",
    hero: "/services_pictures/consultancy1.jpg",
    intro:
      "Cut through complexity with expert guidance. We help you understand, structure, and optimise your insurance portfolio for cost-efficiency and compliance.",
    overview:
      "Our consultancy services provide deep analysis of policies, compliance requirements, and pricing structures. We align your insurance strategy with your business goals, ensuring every decision supports long-term growth.",
    keypoints: [
      "Gain independent insights into your policy structure and terms.",
      "Ensure full regulatory compliance while reducing excess costs.",
      "Optimise your insurance strategy for sustainable efficiency.",
    ],
    featureImage: "/services_pictures/consultancy2.jpg",
    benefits: [
      { title: "Policy Review & Benchmarking", text: "In-depth comparisons against industry standards." },
      { title: "Cost-Optimisation Strategies", text: "Identify overlaps, gaps, and opportunities for savings." },
      { title: "Regulatory Advisory", text: "Ensure compliance with national and international regulations." },
      { title: "Tailored Recommendations", text: "Receive clear, practical guidance aligned to your goals." },
      { title: "Continuous Improvement", text: "We refine your portfolio as your business evolves." },
    ],
    whyUs:
      "Our consultants bring both technical expertise and commercial acumen — ensuring that every recommendation is realistic, compliant, and strategically valuable.",
  },

  /* ---------------------------------------------------------
   * 4. POLICY PLACEMENT
   * --------------------------------------------------------- */
  "policy-placement": {
    title: "Policy Placement",
    hero: "/services_pictures/policy3.jpg",
    intro:
      "Flawless execution from negotiation to issuance. We ensure your policies are placed accurately, on time, and in compliance with every requirement.",
    overview:
      "We manage every aspect of your policy placement — from liaising with insurers to coordinating documentation and quality control. Our hands-on approach guarantees smooth, compliant policy activation.",
    keypoints: [
      "Streamlined end-to-end policy placement.",
      "Expert handling of documentation and compliance.",
      "Timely issuance and complete accuracy guaranteed.",
    ],
    featureImage: "/services_pictures/sourcing3.jpg",
    benefits: [
      { title: "Direct Negotiations", text: "We finalise terms with insurers to secure the best possible deal." },
      { title: "Centralised Documentation", text: "All documents securely managed and stored for easy access." },
      { title: "Quality Assurance", text: "Every detail reviewed for accuracy before issuance." },
      { title: "Multi-Carrier Coordination", text: "We manage complex placements across several insurers." },
      { title: "Transparent Tracking", text: "Full visibility from negotiation to final confirmation." },
    ],
    whyUs:
      "We simplify the process so you can focus on your business. Our precision-driven approach ensures your policies are correctly placed, error-free, and fully compliant.",
  },

  /* ---------------------------------------------------------
   * 5. CLAIMS ASSISTANCE
   * --------------------------------------------------------- */
  "claims-assistance": {
    title: "Claims Assistance",
    hero: "/services_pictures/claims1.jpg",
    intro:
      "When things go wrong, we make them right. Our claims specialists manage the process from start to finish, ensuring fair and timely outcomes.",
    overview:
      "We act as your advocate — managing communication, documentation, and negotiation with insurers. Our proactive approach helps minimise delays and maximises your claim success rate.",
    keypoints: [
      "Dedicated claims experts available 24/7.",
      "Full management of paperwork and communications.",
      "Negotiation and representation for fair resolutions.",
    ],
    featureImage: "/services_pictures/claims2.jpg",
    benefits: [
      { title: "24/7 Support", text: "Access to a claims manager any time, any day." },
      { title: "Complete Filing Support", text: "We handle paperwork, statements, and follow-ups." },
      { title: "Negotiation & Settlement", text: "We push for fast, fair, and accurate claim settlements." },
      { title: "Dispute Resolution", text: "Expert mediation for complex or rejected claims." },
      { title: "Post-Claim Review", text: "Detailed analysis to strengthen future protection." },
    ],
    whyUs:
      "We go beyond claims handling — we provide peace of mind. Our success rate and speed in resolving claims have earned the trust of hundreds of satisfied clients.",
  },

  /* ---------------------------------------------------------
   * 6. RENEWALS & POLICY MAINTENANCE
   * --------------------------------------------------------- */
  "renewals-policy-maintenance": {
    title: "Renewals & Policy Maintenance",
    hero: "/services_pictures/renewal.jpg",
    intro:
      "Keep your coverage up to date. We ensure your policies evolve alongside your business growth and new risks.",
    overview:
      "Our policy maintenance services help you manage renewals, endorsements, and adjustments efficiently. We proactively review coverage and negotiate terms so your protection always remains relevant.",
    keypoints: [
      "Never miss a renewal deadline again.",
      "Ensure your policies evolve with your business needs.",
      "Achieve better renewal terms through expert negotiation.",
    ],
    featureImage: "/services_pictures/renewal2.jpg",
    benefits: [
      { title: "Renewal Alerts", text: "Proactive reminders to ensure timely renewals." },
      { title: "Coverage Reviews", text: "Assessments to confirm alignment with your current operations." },
      { title: "Mid-Term Adjustments", text: "Swift updates when your needs or assets change." },
      { title: "Benchmark Negotiations", text: "We secure improved pricing through data-driven benchmarking." },
      { title: "Annual Review Workshops", text: "Collaborative sessions to plan insurance strategies annually." },
    ],
    whyUs:
      "We make renewals effortless. Our proactive management means you’ll always have the right coverage, the right terms, and no last-minute surprises.",
  },

  /* ---------------------------------------------------------
   * 7. CLIENT EDUCATION & TRAINING
   * --------------------------------------------------------- */
  "client-education-training": {
    title: "Client Education & Training",
    hero: "/services_pictures/train1.jpg",
    intro:
      "Empower your team with knowledge that protects your business. Our training equips your staff with the skills to identify and mitigate risks effectively.",
    overview:
      "We deliver structured learning programmes and workshops that develop in-house risk awareness and insurance literacy. With practical, scenario-based training, we help your teams make better decisions every day.",
    keypoints: [
      "Understand your insurance landscape with clarity.",
      "Reduce internal risks through staff education.",
      "Foster a culture of proactive risk management.",
    ],
    featureImage: "/services_pictures/train2.jpg",
    benefits: [
      { title: "On-Site & Virtual Workshops", text: "Interactive training for all staff levels." },
      { title: "Tailored Learning Modules", text: "Custom content based on your industry and needs." },
      { title: "Ongoing Resources", text: "Access to guides, checklists, and refresher videos." },
      { title: "Practical Risk Simulations", text: "Hands-on learning that builds real understanding." },
      { title: "Post-Training Support", text: "Follow-up assessments and continuous improvement tools." },
    ],
    whyUs:
      "Education is empowerment. We make insurance and risk awareness accessible, ensuring your team is confident, informed, and capable of preventing losses before they occur.",
  },
};

const service = computed(() => servicesData[route.params.slug]);
</script>

<style scoped>
section {
  animation: fadeIn 0.7s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
