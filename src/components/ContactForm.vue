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
        name="contact_form"
        method="POST"
        data-netlify="true"
        class="space-y-8"
        @submit="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact_form" />

      

        <!-- Status Messages -->
        <div v-if="status === 'error'" class="text-red-600 font-semibold text-center">
          {{ errorMsg }}
        </div>
        <div v-else-if="status === 'success'" class="text-green-600 font-semibold text-center">
          Thank you! Your message has been sent successfully.
        </div>

        <!-- Fields -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Full Name -->
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
            <label for="name" class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700">
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
            <label for="email" class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700">
              Email Address
            </label>
          </div>
        </div>

        <!-- Phone -->
        <div class="relative">
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=" "
            class="peer w-full border-b-2 border-gray-300 text-slate-800 placeholder-transparent focus:border-blue-700 focus:outline-none py-3 transition-all"
          />
          <label for="phone" class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700">
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
          <label for="message" class="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-700">
            Your Message
          </label>
        </div>

        <!-- Submit -->
        <div class="text-center pt-4">
          <button
            type="submit"
            :disabled="status === 'sending'"
            class="relative inline-flex items-center justify-center px-10 py-3 font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-600 transition disabled:opacity-60"
          >
            <span v-if="status !== 'sending'">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const formName = "contact_form";
const status = ref("idle");
const errorMsg = ref("");

const form = reactive({
  name: "",
  phone: "",
  email: "",
  message: "",
});

function encode(data) {
  return new URLSearchParams(data).toString();
}

async function handleSubmit(e) {
  e.preventDefault();
  status.value = "sending";
  errorMsg.value = "";

  try {
    const body = encode({
      "form-name": formName,
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
    });

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!res.ok && !res.redirected) throw new Error("Submission failed. Please try again.");

    status.value = "success";
    form.name = "";
    form.phone = "";
    form.email = "";
    form.message = "";

    setTimeout(() => {
      status.value = "idle";
    }, 5000);
  } catch (err) {
    status.value = "error";
    errorMsg.value = err?.message || "Something went wrong. Please try again.";
  }
} 
</script>

<style scoped>
section {
  animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

input, textarea {
  background: transparent;
}
input:focus,
textarea:focus {
  box-shadow: 0 1px 0 0 #1d4ed8;
}

label {
  pointer-events: none;
}

/* Float label up when input has a value */
input:not(:placeholder-shown) ~ label,
textarea:not(:placeholder-shown) ~ label {
  top: -1rem;
  font-size: 0.75rem;
  color: #1d4ed8;
}
</style>
