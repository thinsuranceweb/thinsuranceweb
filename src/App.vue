<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />

    <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const showButton = ref(false)

function onScroll() {
  showButton.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  background: #6b93f1;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s, transform 0.2s;
}

.scroll-top-btn:hover {
  transform: translateY(-2px);
}
</style>