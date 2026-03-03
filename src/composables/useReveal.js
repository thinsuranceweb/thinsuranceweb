// src/composables/useReveal.js
import { onMounted, onBeforeUnmount, ref } from "vue";

export function useReveal(options = {}) {
  const el = ref(null);
  let io;

  onMounted(() => {
    io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          io?.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );

    if (el.value) io.observe(el.value);
  });

  onBeforeUnmount(() => io?.disconnect());

  return { el };
}