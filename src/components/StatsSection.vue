<template>
  <section class="bg-blue-900 text-white py-20 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div
      class="absolute inset-0 opacity-10"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle fill=\'%23ffffff\' cx=\'50\' cy=\'50\' r=\'1\'/%3E%3C/svg%3E');"
    ></div>

    <div class="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
      <!-- Header -->
      <h2 class="text-3xl md:text-4xl font-bold mb-14">Our Achievements</h2>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col items-center"
        >
          <h3
            class="text-5xl font-extrabold mb-2 text-white0"
            :class="{ 'animate-count': animate }"
          >
            {{ displayValue(index) }}
          </h3>
          <p class="text-gray-300 font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = [
  { value: 24, label: "Years of Experience" },
  { value: 120, label: "Clients Served" },
  { value: 18, label: "Insurance Partners" },
  { value: 24, label: "Hour Support Availability" },
];

const animate = ref(false);
const displayValues = ref(stats.map(() => 0));

// Animate count when component mounts
onMounted(() => {
  animate.value = true;
  stats.forEach((stat, index) => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = stat.value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        start = stat.value;
        clearInterval(counter);
      }
      displayValues.value[index] = Math.floor(start);
    }, 16);
  });
});

const displayValue = (index) => {
  const stat = stats[index];
  const value = displayValues.value[index];
  return stat.label.includes("Hour") ? `${value}/7` : `${value}+`;
};
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeUp 1s ease-in-out;
}
</style>
