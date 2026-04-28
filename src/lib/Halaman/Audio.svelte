<script>
    import { onMount } from "svelte";
    import { supabase } from "../db";
    const pagename = "Dengar Audio";
    let audiodata = [];
    let jalan = null;

    function handlePlay(e) {
        if (jalan && jalan !== e.target) {
            jalan.pause();
            jalan.setcurrentTime = 0;
        }
        jalan = e.target;
    }

    async function LoadAudio() {
        const { data, error } = await supabase
            .from("tb_voice")
            .select("*")
            .order("id", { ascending: false });
        audiodata = data;
    }

    onMount(() => {
        LoadAudio();
    });
</script>

<section class="mb-5 pb-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h4>{pagename}</h4>
                <hr />
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="grid-audio">
                    {#each audiodata as item}
                        <div data-aos="fade-up">
                            <p class="m-1">{item.judul}</p>
                            <audio
                                src={item.audio}
                                on:play={handlePlay}
                                controls
                                class="w-100"
                            ></audio>
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
    p {
        font-size: 1rem;
    }
    .grid-audio {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }

    @media (max-width: 576px) {
        .grid-audio {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
