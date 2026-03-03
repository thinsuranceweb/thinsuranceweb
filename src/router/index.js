import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import ServicesDetail from "../components/ServicesDetail.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Gallery from "../pages/Gallery.vue";
import Industries from "../pages/Industries.vue";
import IndustryDetail from "../pages/IndustryDetail.vue";
import Library from "../pages/Library.vue";
import LibraryDetail from "../pages/LibraryDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "TH Insurance Brokers – Home" },
  },
  {
    path: "/services",
    component: Services,
    meta: { title: "Our Services | TH Insurance Brokers" },
  },
  {
    path: "/about",
    component: About,
    meta: { title: "About Us | TH Insurance Brokers" },
  },
  {
    path: "/contact",
    component: Contact,
    meta: { title: "Contact Us | TH Insurance Brokers" },
  },
  {
    path: "/gallery",
    component: Gallery,
    meta: { title: "Certifications & Awards | TH Insurance Brokers" },
  },
  {
    path: "/services/:slug",
    name: "ServiceDetail",
    component: ServicesDetail,
    props: true,
    meta: { title: "Service | TH Insurance Brokers" }, // static fallback
  },
  {
    path: "/industries",
    component: Industries,
    meta: { title: "Industries We Serve | TH Insurance Brokers" },
  },
  {
    path: "/industries/:slug",
    name: "IndustryDetail",
    component: IndustryDetail,
    props: true,
    meta: { title: "Industry | TH Insurance Brokers" },
  },
  {
    path: "/library",
    component: Library,
  },
  {
    path: "/library/:slug",
    component: LibraryDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "TH Insurance Brokers";
});

export default router;
