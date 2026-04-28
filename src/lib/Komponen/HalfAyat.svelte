<script>
    import { onMount } from "svelte";
    import { supabase } from "../db";
    let someayat = [];

    async function Loadsomeayat() {
        const { data, error } = await supabase
            .from("tb_ayatsingkat")
            .select("*")
            .limit(2);
        someayat = data;
        console.log(someayat);
    }

    onMount(() => {
        Loadsomeayat();
    });
</script>

<<<<<<< HEAD
<section class="halfayat mt-3 mb-5 pb-5" data-aos="fade-up">
=======
<section class="halfayat mt-3" data-aos="fade-up">
>>>>>>> 24d8ab8 (add story feature)
    <div class="grid-ayatHalf p-2">
        {#each someayat as item}
            <div class="card mb-1">
                <div class="card-body">
                    <p class="m-0 orange">
                        {item.kitab}, {item.pasal}:{item.ayat}
                    </p>
                    <p class="mb-0">{item.body}</p>
                </div>
            </div>
        {/each}
        <div class="nextstep card">
            <div class="card-body">
                <a href="#/ayat-singkat" class="btn mybtn btn-lg my-4">
                    <i class="bx bx-book-reader"></i>
                    Semua Bacaan Singkat
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .nextstep {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        font-size: 1rem;
    }
    .mybtn {
        background-color: orangered;
        color: #fff !important;
    }
    .grid-ayatHalf {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4px;
    }

    @media (max-width: 576px) {
        .grid-ayatHalf {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
