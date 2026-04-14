<template>
  <section class="py-20" id="contact">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-blue-950 mb-4">Get in Touch</h2>
        <div class="h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
        <p class="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have a question or want to discuss your insurance needs?<br />
          Fill out the form below and our specialists will contact you shortly.
        </p>
      </div>

      <!-- Form -->
      <form
        @submit.prevent="handleSubmit"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="bg-white shadow-xl rounded-2xl p-10 md:p-12 border border-gray-100 space-y-8"
      >
    
        <!-- Fields -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Full Name -->
          <input type="hidden" name="bot-field" />

          <div class="relative">
            <input
              v-model="form.name"
              type="text"
              id="name"
              name="name"
              required
              placeholder=" "
              class="peer w-full border-b-2 border-gray-300 text-slate-800 placeholder-transparent focus:border-blue-700 focus:outline-none py-3 transition-all"
            />
            <label
              for="name"
              class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700"
            >
              Full Name
            </label>
          </div>

          <!-- Email -->
          <div class="relative">
            <input
              v-model="form.email"
              type="email"
              id="email"
              name="email"
              required
              placeholder=" "
              class="peer w-full border-b-2 border-gray-300 text-slate-800 placeholder-transparent focus:border-blue-700 focus:outline-none py-3 transition-all"
            />
            <label
              for="email"
              class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700"
            >
              Email Address
            </label>
          </div>
        </div>

        <!-- Phone -->
        <div class="relative">
          <input
            v-model="form.phone"
            type="tel"
            required
            id="phone"
            name="phone"
            placeholder=" "
            class="peer w-full border-b-2 border-gray-300 text-slate-800 placeholder-transparent focus:border-blue-700 focus:outline-none py-3 transition-all"
          />
          <label
            for="phone"
            class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700"
          >
            Phone Number
          </label>
        </div>

        <!-- Message -->
        <div class="relative">
          <textarea
            v-model="form.message"
            id="message"
            name="message"
            rows="5"
            required
            placeholder=" "
            class="peer w-full border-b-2 border-gray-300 text-slate-800 placeholder-transparent focus:border-blue-700 focus:outline-none py-3 transition-all resize-none"
          ></textarea>
          <label
            for="message"
            class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700"
          >
            Your Message
          </label>
        </div>

        <!-- Submit -->
        <div class="text-center pt-4">
          <button
            type="submit"
            :disabled="loading"
            class="relative inline-flex items-center justify-center px-10 py-3 font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-600 transition disabled:opacity-60"
          >
            <span v-if="!loading">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p
              v-if="success"
              class="text-green-600 font-semibold text-center mt-6"
            >
              ✅ Thank you! Your message has been sent successfully.
            </p>
          </transition>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const loading = ref(false);
const success = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  success.value = false;

  try {
    const formData = new URLSearchParams({
      "form-name": "contact",
      "bot-field": "",
      subject: `New enquiry from ${form.value.name || "website"}`,
      ...form.value,
    });

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    if (!res.ok) throw new Error("Submission failed. Please try again.");

    success.value = true;
    form.value = { name: "", email: "", phone: "", message: "" };

    setTimeout(() => {
      success.value = false;
    }, 5000);

  } catch (err) {
    console.error(err?.message || "Something went wrong. Please try again.");
  } finally {
    loading.value = false;
  }
};
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

/* Smooth underline animation */
input,
textarea {
  background: transparent;
}
input:focus,
textarea:focus {
  box-shadow: 0 1px 0 0 #1d4ed8;
}

/* For Safari label positioning */
label {
  pointer-events: none;
}
</style>
