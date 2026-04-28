<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./lib/routes";

  // Komponen
  import Navigasi from "./lib/Komponen/Navigasi.svelte";
  import Footer from "./lib/Komponen/Footer.svelte";

  // CSS (Aman diimport di atas)
  import "bootstrap/dist/css/bootstrap.min.css";
  import "boxicons/css/boxicons.css";
  import "aos/dist/aos.css";

  onMount(async () => {
    // 1. Import Bootstrap JS secara dinamis agar tidak error SSR
    await import("bootstrap/dist/js/bootstrap.min.js");

    // 2. Import AOS
    const AOS = (await import("aos")).default;

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });

    // 3. Refresh AOS setiap kali pindah halaman (Router)
    // Karena Svelte-SPA-Router menghapus/menambah elemen DOM secara dinamis
    window.addEventListener("svelte-spa-router:routeLoaded", () => {
      AOS.refresh();
    });
  });
</script>

<Navigasi />

<main>
  <Router {routes} />
</main>

<Footer />

<style>
  /* Tambahkan min-height agar footer tidak melayang */
  main {
    min-height: 80vh;
  }
</style>
