<script>
    import { onMount } from "svelte";
    import { supabase } from "../db";
    import { push } from "svelte-spa-router";
    let ayats = [];
    let pencarian = "";
    const pagename = "Ayat Singkat";

    function backHome() {
        push("/");
    }
    async function getAyats() {
        const { data, error } = await supabase
            .from("tb_ayatsingkat")
            .select("*")
            .order("id", { ascending: false });
        ayats = data;
    }

    onMount(() => {
        getAyats();
    });
    $: all = ayats.filter((data) =>
        data.kitab.toLowerCase().includes(pencarian.toLowerCase()),
    );
</script>

<section class="mb-5 pb-5" data-aos="flip-up">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="my-3">{pagename}</h4>
                    <button
                        class="btn btn-white btn-lg"
                        title="kembali"
                        on:click={backHome}
                    >
                        <i class="bx bx-chevrons-left"></i>
                        Kembali
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="my-2">
                    <input
                        bind:value={pencarian}
                        type="search"
                        class="form-control form-control-lg"
                        placeholder="Cari Nama Kitab..."
                    />
                </div>
                <div class="grid-ayat">
                    {#each all as value}
                        <div class="card">
                            <div class="card-body">
                                <p class="m-0 orange font-weight-bold">
                                    {value.kitab}, {value.pasal}:{value.ayat}
                                </p>
                                <p class="my-1">
                                    {value.body}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        min-height: 100vh;
    }
    .grid-ayat {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3px;
    }

    .form-control {
        border-radius: 15px;
    }

    .card {
        /* Tambahkan ini: Biar GPU sudah siap-siap sebelum animasi dimulai */
        will-change: transform, box-shadow;

        /* Pakai transition yang lebih efisien */
        transition:
            transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            box-shadow 0.3s ease,
            background 0.3s ease;

        border: none;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.7);

        /* HINT: Kalau masih patah, coba kurangi nilai blur ini atau matikan sementara */
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

        /* Tambahkan ini biar render teks lebih stabil saat scaling */
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
    }

    .card:hover {
        /* Gunakan translate3d biar dapet akselerasi hardware (GPU) */
        transform: translate3d(0, -8px, 0) scale(1.02);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.9);
    }

    /* Efek saat Klik (Optional, biar makin kerasa pegasnya) */
    .card:active {
        transform: scale(0.95);
    }

    /* smartphone */
    @media (max-width: 576px) {
        .grid-ayat {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
