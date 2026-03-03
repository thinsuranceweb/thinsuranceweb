<template>
  <div class="bg-white text-slate-800">
    <!-- HERO -->
    <section
      class="relative flex items-center justify-center h-[65vh] overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 opacity-95"
      ></div>

      <img
        src="../../public/additonal_images/contact-hero.jpeg"
        alt="Office environment"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Get in Touch with Our Team
        </h1>
        <p
          class="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Let’s discuss how we can help protect your people, property, and
          business — with the clarity and care you deserve.
        </p>
        <div class="mt-8">
          <a
            href="#contact-form"
            class="inline-block bg-white text-blue-500 font-semibold px-8 py-3 rounded-lg transition"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>

    <!-- CONTACT INFO SECTION -->
    <section
      class="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div
            class="flex flex-col items-center md:items-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div
              class="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mb-4"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.40431 5.02115L10.0481 7.01934C10.0989 7.17723 10.1502 7.40219 10.119 7.65893C10.0253 8.4276 9.51225 9.0909 8.77425 9.36766L6.08207 10.3772C4.71176 10.8911 3.25 9.87809 3.25 8.41459V7.306C3.25 6.69945 3.53022 6.09966 4.05922 5.73225C5.31766 4.85823 6.72754 4.18597 8.24183 3.76283C9.43829 3.42851 10.6989 3.25 12.0001 3.25C13.3012 3.25 14.5618 3.42851 15.7583 3.76282C17.2726 4.18595 18.6825 4.85822 19.9409 5.73224C20.4699 6.09966 20.7502 6.69948 20.7501 7.30605L20.7501 8.41461C20.7501 9.87809 19.2884 10.8911 17.918 10.3772L15.2259 9.36766C14.4879 9.0909 13.9748 8.4276 13.8812 7.65893C13.8499 7.40219 13.9012 7.17723 13.9521 7.01934L14.5958 5.02114C13.7591 4.84354 12.8909 4.75 12.0001 4.75C11.1093 4.75 10.241 4.84355 9.40431 5.02115Z"
                  fill="#323544"
                />
                <path
                  opacity="0.4"
                  d="M9.99277 10.5307C11.2782 9.99887 12.7221 9.99887 14.0075 10.5307L18.823 12.5234C19.4949 12.8014 19.9911 13.3871 20.1549 14.0956L21.0559 17.9931C21.3819 19.4032 20.3111 20.7499 18.8638 20.7499H5.13647C3.68916 20.7499 2.61829 19.4032 2.9443 17.9931L3.84536 14.0956C4.00917 13.3871 4.5053 12.8014 5.17725 12.5234L9.99277 10.5307ZM9.25 15.5116C9.25 17.0304 10.4812 18.2616 12 18.2616C13.5188 18.2616 14.75 17.0304 14.75 15.5116C14.75 13.9928 13.5188 12.7616 12 12.7616C10.4812 12.7616 9.25 13.9928 9.25 15.5116Z"
                  fill="#323544"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Call Us</h3>
            <p class="text-gray-600 text-lg font-medium">+251 911217247</p>
            <p class="text-gray-600 text-lg font-medium">+251 911204045</p>
            <p class="text-gray-600 text-lg font-medium">+251 911503700</p>
            <p class="text-gray-500 text-sm mt-1">Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p class="text-gray-500 text-sm mt-1">
              Saturday: 10:00 AM – 4:00 PM
            </p>
            <p class="text-gray-500 text-sm mt-1">Saturday: Closed</p>
          </div>

          <div
            class="flex flex-col items-center md:items-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div
              class="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mb-4"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M3.73586 4.5C2.7772 4.5 2.00008 5.27724 2.00025 6.2359L2.00024 6.26829C2.01058 6.81904 2.28193 7.33272 2.73193 7.65165L2.7428 7.65929L10.713 13.2171C11.3896 13.689 12.2608 13.7479 12.9861 13.3941C13.0897 13.3435 13.1903 13.2845 13.287 13.2171L21.2569 7.65949C21.7224 7.33485 21.9998 6.8031 21.9998 6.23554C21.9996 5.27702 21.2229 4.5 20.2644 4.5H3.73586Z"
                  fill="#343C54"
                />
                <path
                  opacity="0.4"
                  d="M22.0001 8.96973L14.145 14.4473C12.8562 15.346 11.1438 15.346 9.85507 14.4473L2.00023 8.96991L2 17.2498C2 18.4924 3.00736 19.4998 4.25 19.4998H19.75C20.9926 19.4998 22 18.4924 22 17.2498L22.0001 8.96973Z"
                  fill="#343C54"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Email</h3>
            <p class="text-gray-600 text-lg font-medium">
              info@thinsurancebrokers.com
            </p>
            <p class="text-gray-500 text-sm mt-1">
              Expect a reply within 1 day
            </p>
          </div>

          <div
            class="flex flex-col items-center md:items-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div
              class="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mb-4"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M5.03125 9.89198C5.03125 5.76528 8.3766 2.41992 12.5033 2.41992C16.63 2.41992 19.9754 5.76528 19.9754 9.89198C19.9754 12.694 18.9108 15.2454 17.6454 17.2938C16.3778 19.3458 14.8791 20.941 13.9389 21.8454C13.139 22.6148 11.9045 22.6163 11.1026 21.8493C10.1581 20.9458 8.65084 19.3507 7.37569 17.2982C6.1028 15.2493 5.03125 12.6963 5.03125 9.89198ZM9.50391 9.89062C9.50391 11.5475 10.8471 12.8906 12.5039 12.8906C14.1608 12.8906 15.5039 11.5475 15.5039 9.89062C15.5039 8.23377 14.1608 6.89062 12.5039 6.89062C10.8471 6.89062 9.50391 8.23377 9.50391 9.89062Z"
                  fill="#323544"
                />
                <path
                  d="M12.5039 6.89062C10.8471 6.89062 9.50391 8.23377 9.50391 9.89062C9.50391 11.5475 10.8471 12.8906 12.5039 12.8906C14.1608 12.8906 15.5039 11.5475 15.5039 9.89062C15.5039 8.23377 14.1608 6.89062 12.5039 6.89062Z"
                  fill="#323544"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Visit Us</h3>
            <p class="text-gray-600 text-lg font-medium leading-relaxed">
            Bole Medhanialem, Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM SECTION -->
    <section
      id="contact-form"
      class="relative py-24 bg-white border-t border-gray-100"
    >
      <div
        class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start"
      >
        <div class="md:pr-10">
          <h2 class="text-4xl font-bold text-blue-900 mb-6">
            Let’s Start the Conversation
          </h2>
          <p class="text-gray-700 leading-relaxed mb-8 text-lg">
            Whether it’s a general enquiry or a request for a tailored quote,
            we’d love to hear from you. Our advisors will respond personally and
            promptly.
          </p>

          <ul class="space-y-4 text-gray-700">
            <li class="flex items-center space-x-3">
              <span
                class="w-3 h-3 rounded-full bg-blue-400 inline-block"
              ></span>
              <p>Receive expert guidance — no obligation consultation.</p>
            </li>
            <li class="flex items-center space-x-3">
              <span
                class="w-3 h-3 rounded-full bg-blue-400 inline-block"
              ></span>
              <p>Dedicated support for claims and renewals.</p>
            </li>
            <li class="flex items-center space-x-3">
              <span
                class="w-3 h-3 rounded-full bg-blue-400 inline-block"
              ></span>
              <p>Transparent advice tailored to your needs.</p>
            </li>
          </ul>
        </div>

        <div
          class="bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-8"
        >
          <h3 class="text-2xl font-bold text-blue-900 mb-4">
            Send Us a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- MAP -->
   <section class="py-20 bg-gray-50 border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h3 class="text-2xl font-bold text-blue-900 mb-4">Where to Find Us</h3>
      <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
        Our office is centrally located and easily accessible. We welcome both
        scheduled meetings and walk-in consultations.
      </p>

      <div class="rounded-2xl overflow-hidden shadow-md">
        <div
          ref="map"
          class="w-full h-[350px] md:h-[450px]"
        ></div>
      </div>
    </div>
  </section>

    <!-- CTA -->
    <section class="bg-blue-950 text-white py-20 text-center">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-3xl font-bold mb-4">
          Speak to a Dedicated Advisor Today
        </h3>
        <p class="text-gray-300 mb-8 leading-relaxed">
          Insurance doesn’t have to be complex. Our team will simplify your
          options, handle your paperwork, and help you secure the right
          protection at the right price.
        </p>
        <RouterLink
          to="/services"
          class="bg-blue-400 text-blue-950 font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Explore Our Services
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from "../components/ContactForm.vue";
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const map = ref(null)

onMounted(() => {
  const leafletMap = L.map(map.value).setView(
    [8.997264175553905, 38.78704793522388], // London
    13
  )

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(leafletMap)

  L.marker([51.5074, -0.1278])
    .addTo(leafletMap)
    .bindPopup('Our Office')
})
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
