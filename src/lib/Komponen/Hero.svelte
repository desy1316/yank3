<script>
    import { onMount } from "svelte";
    import { supabase } from "../db";
    let hero = {};

    async function LockHero() {
        const { data, error } = await supabase
            .from("tb_hero")
            .select("*")
            .limit(1)
            .maybeSingle();
        hero = data;
        console.log(data);
    }

    onMount(() => {
        LockHero();
    });
</script>

<div
    class="jumbotron jumbotron-fluid bg-light"
    data-aos="fade-down"
    data-aos-duration="2500"
>
    <div class="container-fluid">
        <h1 class="display-4 text-capitalize font-weight-bolder my-4">
            {hero.title}
        </h1>
        <hr />
        <div class="gambar">
            <img src={hero.gambar_profil} alt="..." class="img-fluid" />
        </div>
        <div class="bottom p-1">
            <p class="py-1">{hero.ayat}</p>
        </div>
    </div>
</div>

<!-- <style>
    .jumbotron {
        min-height: 450px;
        position: relative;
        z-index: 0;
    }
    .jumbotron img {
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        height: 520px;
    }
    .jumbotron .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }

    @media (max-width: 576px) {
        .jumbotron img {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 450px;
        }
        .display-4 {
            display: none;
        }

        hr {
            display: none;
        }
    }
</style> -->
<style>
    .jumbotron {
        min-height: 450px;
        position: relative;
        z-index: 0;
        overflow: hidden; /* Tambahkan ini supaya gambar/efek tidak luber */
    }

    .jumbotron img {
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        height: 480px;
        object-fit: cover;
    }

    /* Efek Glassmorphism ala iOS */
    .jumbotron .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;

        /* Glass Effect */
        background: rgba(255, 255, 255, 0.4); /* Warna putih transparan */
        backdrop-filter: blur(15px); /* Ini yang bikin efek blur kaca */
        -webkit-backdrop-filter: blur(15px); /* Support Safari */

        /* Border tipis ala iOS */
        border-top: 1px solid rgba(255, 255, 255, 0.3);

        /* Merapikan teks panjang */
        padding: 20px 30px;
        box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
    }

    .jumbotron .bottom p {
        margin: 0;
        font-size: 1.1rem;
        line-height: 1.6; /* Biar teks panjang gak rapat banget */
        color: #333;
        text-align: center; /* Opsional: biar lebih estetik kalau ayatnya panjang */
        font-style: italic;
    }

    @media (max-width: 576px) {
        p {
            font-size: 1rem;
        }
        .jumbotron img {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 450px;
        }
        .display-4,
        hr {
            display: none;
        }

        .jumbotron .bottom {
            padding: 15px; /* Padding lebih kecil di HP */
        }

        .jumbotron .bottom p {
            font-size: 0.9rem; /* Ukuran font lebih kecil di HP */
        }
    }
</style>
