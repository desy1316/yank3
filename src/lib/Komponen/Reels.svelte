<script>
    import { onMount, onDestroy } from "svelte";
    import { supabase } from "../db";

    let myreels = [];
    let activeIndex = null;
    let progress = 0;
    let timerInterval = null;
    let swiperInstance = null;
    const DURATION = 5000;

    // Kunci scroll body biar nggak bablas pas modal muncul
    $: if (typeof document !== "undefined") {
        document.body.style.overflow = activeIndex !== null ? "hidden" : "auto";
    }

    async function GetReels() {
        const { data } = await supabase
            .from("tb_reels")
            .select("*")
            .order("id", { ascending: false });
        myreels = data ?? [];
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        let start = Date.now();
        timerInterval = setInterval(() => {
            progress = ((Date.now() - start) / DURATION) * 100;
            if (progress >= 100) nextStory();
        }, 30);
    }

    function openStory(i) {
        activeIndex = i;
    }

    function closeStory() {
        clearInterval(timerInterval);
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
        activeIndex = null;
        progress = 0;
    }

    function nextStory() {
        if (activeIndex < myreels.length - 1) swiperInstance?.slideNext();
        else closeStory();
    }

    function initSwiper(node) {
        swiperInstance = new Swiper(node, {
            initialSlide: activeIndex,
            speed: 300,
            on: {
                slideChange: (s) => {
                    activeIndex = s.activeIndex;
                    startTimer();
                },
            },
        });
        startTimer();
        return {
            destroy: () => closeStory(),
        };
    }

    onMount(GetReels);

    onDestroy(() => {
        if (typeof document !== "undefined")
            document.body.style.overflow = "auto";
        closeStory();
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
    <script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
    ></script>
</svelte:head>

<div class="grid">
    {#each myreels as item, i}
        <button class="thumb" on:click={() => openStory(i)}>
            <img src={item.reel} alt="" loading="lazy" />
        </button>
    {/each}
</div>

{#if activeIndex !== null}
    <div class="modal" on:click|self={closeStory}>
        <div class="viewer">
            <div class="bars">
                {#each myreels as _, i}
                    <div class="bg-bar">
                        <div
                            class="fill"
                            style="width: {i < activeIndex
                                ? 100
                                : i === activeIndex
                                  ? progress
                                  : 0}%"
                        ></div>
                    </div>
                {/each}
            </div>

            <button class="close" on:click={closeStory}>✕</button>

            <div class="swiper" use:initSwiper>
                <div class="swiper-wrapper">
                    {#each myreels as item}
                        <div class="swiper-slide">
                            <img src={item.reel} alt="" class="main-img" />
                        </div>
                    {/each}
                </div>
            </div>

            <div class="taps">
                <div
                    role="button"
                    aria-label="Prev"
                    on:click={() => swiperInstance?.slidePrev()}
                ></div>
                <div role="button" aria-label="Next" on:click={nextStory}></div>
            </div>
        </div>
    </div>
{/if}

<style>
    /* Grid simpel & responsif */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 4px;
        padding: 10px;
    }
    .thumb {
        border: none;
        padding: 0;
        cursor: pointer;
        aspect-ratio: 9/16;
        background: #222;
        border-radius: 8px;
        overflow: hidden;
    }
    .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Modal: Kunci di layar paling depan */
    .modal {
        position: fixed;
        inset: 0; /* top, right, bottom, left: 0 */
        background: #000;
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        touch-action: none; /* Cegah scroll pull-to-refresh di HP */
    }

    .viewer {
        position: relative;
        width: 100%;
        max-width: 450px;
        height: 100dvh; /* Mengikuti tinggi layar HP yang dinamis */
        overflow: hidden;
        background: #000;
    }

    /* Progress Bars di atas */
    .bars {
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        display: flex;
        gap: 4px;
        padding: 0 10px;
        z-index: 100;
    }
    .bg-bar {
        flex: 1;
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
    }
    .fill {
        height: 100%;
        background: #fff;
    }

    .close {
        position: absolute;
        top: 25px;
        right: 15px;
        z-index: 101;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        color: #fff;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Gambar utuh, nggak kepotong */
    }

    /* Area Tap Navigasi */
    .taps {
        position: absolute;
        inset: 0;
        display: flex;
        z-index: 50;
    }
    .taps div {
        flex: 1;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent; /* Hapus kotak biru pas di tap di HP */
    }
</style>
