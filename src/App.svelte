<script>
  import { onMount } from "svelte";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";
  import "boxicons/css/boxicons.css";
  import Navigasi from "./lib/Komponen/Navigasi.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./lib/routes";
  import Footer from "./lib/Komponen/Footer.svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  onMount(() => {
    AOS.init({
      // Settingan Opsional biar lebih halus:
      duration: 800, // durasi animasi (ms)
      easing: "ease-out-cubic", // gaya gerak animasi
      once: false,
    });
  });
</script>

<Navigasi />
<Router {routes} />
<Footer />
