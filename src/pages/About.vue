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
        <source src="/8731231-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      <div class="relative z-10 max-w-4xl">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-900"
        >
          Building Trust. Delivering Protection.
        </h1>
        <p
          class="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed"
        >
          We’re an independent insurance brokerage shaping the future of
          transparent, data-driven and client-first insurance services.
        </p>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-24 border-t border-gray-100">
      <div
        class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-blue-900">
            Message from the Founder & Chief Executive Officer
          </h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            It is with great pride that I extend my sincere appreciation to all
            our clients, partners, and stakeholders who have accompanied
            <span class="font-semibold">T.H. Insurance Brokers S.C.</span>
            throughout its more than two-decade journey of growth and
            excellence.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Since our establishment,
            <span class="font-semibold">T.H. Insurance Brokers S.C.</span> has
            been driven by a clear vision to deliver professional, reliable, and
            value-driven insurance brokerage services that contribute to the
            stability and progress of Ethiopia’s insurance sector. Our 23 years
            of uninterrupted operation stand as a testament to our commitment to
            quality, integrity, and innovation.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Through strong partnerships with leading local insurers, we have
            built a robust platform that ensures our clients receive optimal
            coverage solutions tailored to their unique risk profiles. Our
            approach is grounded in deep industry knowledge, strategic insight,
            and a steadfast dedication to protecting our clients’ interests at
            all times.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            As we look ahead, we remain focused on expanding our institutional
            capacity, enhancing service efficiency through technology, and
            reinforcing our role as a trusted advisor and partner to businesses
            and investors alike.
          </p>

          <p class="text-gray-700 leading-relaxed">
            We are confident that the future holds even greater opportunities
            for collaboration and shared success, as we continue to strengthen
            our position as a leader in Ethiopia’s insurance brokerage industry.
          </p>
        </div>
        <div class="relative">
          <img
            src="../../public/founder.jpg"
            alt="Founder"
            class="rounded-2xl shadow-xl w-full object-cover"
          />
          <div
            class="absolute bottom-6 left-6 bg-white/90 px-4 py-3 rounded-lg shadow-md"
          >
            <!-- <p class="text-sm text-gray-500">Founder & Managing Director</p> -->
            <p class="font-semibold text-blue-900 text-lg">Mr. Tefera Hunde</p>
            <p class="text-sm text-gray-500">T.H. Insurance Brokers S.C</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission + Approach -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-4">
          Our Mission & Approach
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-16">
          From policy placement to client advocacy, we combine expertise with
          empathy to redefine how insurance is delivered — building meaningful,
          lasting partnerships.
        </p>

        <div class="grid md:grid-cols-2 gap-10 text-left">
          <div
            class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <h3 class="font-semibold text-xl text-blue-900 mb-3">
              Our Mission
            </h3>
            <p class="text-gray-700 leading-relaxed">
              To empower individuals, families, and businesses with clear,
              customised insurance solutions backed by integrity, innovation,
              and advocacy — ensuring every client feels supported and informed.
            </p>
          </div>

          <div
            class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <h3 class="font-semibold text-xl text-blue-900 mb-3">
              Our Approach
            </h3>
            <p class="text-gray-700 leading-relaxed">
              We believe in partnership — working alongside clients,
              understanding their goals, and leveraging data, insight, and
              experience to create confident, long-term protection strategies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-blue-900 mb-12">Our Core Values</h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          <div class="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition">
            <h4 class="text-blue-500 text-lg font-bold mb-2">01</h4>
            <h5 class="font-semibold text-xl mb-2 text-blue-900">
              Trustworthiness
            </h5>
            <p class="text-gray-600">
              We act with honesty, integrity, and complete transparency in every
              interaction.
            </p>
          </div>
          <div class="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition">
            <h4 class="text-blue-500 text-lg font-bold mb-2">02</h4>
            <h5 class="font-semibold text-xl mb-2 text-blue-900">
              Reliability
            </h5>
            <p class="text-gray-600">
              We’re consistent and dependable — supporting our clients whenever
              they need us most.
            </p>
          </div>
          <div class="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition">
            <h4 class="text-blue-500 text-lg font-bold mb-2">03</h4>
            <h5 class="font-semibold text-xl mb-2 text-blue-900">
              Forward-Thinking
            </h5>
            <p class="text-gray-600">
              We anticipate change and innovate proactively to provide solutions
              that evolve with our clients.
            </p>
          </div>
          <div class="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition">
            <h4 class="text-blue-500 text-lg font-bold mb-2">04</h4>
            <h5 class="font-semibold text-xl mb-2 text-blue-900">
              Client Empowerment
            </h5>
            <p class="text-gray-600">
              We guide clients to make informed, confident decisions about their
              financial security.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
section {
  animation: fadeIn 1s ease-in-out;
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
