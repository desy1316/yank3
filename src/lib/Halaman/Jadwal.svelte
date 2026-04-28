<script>
    import { onMount } from "svelte";
    import { supabase } from "../db";
    import { formatTanggal } from "../Helper";
    const pagename = "Jadwal Ibadat";
    let jadwals = [];

    async function LoadJadwal() {
        const { data, error } = await supabase
            .from("tb_jadwal")
            .select("*")
            .order("id", { ascending: false });
        jadwals = data;
    }

    onMount(() => {
        LoadJadwal();
    });
</script>

<section class="mb-5 pb-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h4 class="my-2">{pagename}</h4>
                <hr />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="grid-jadwal">
                    {#each jadwals as jadwaldata}
                        <div class="card mb-1">
                            <div class="card-body">
                                <p class="m-1">
                                    <i class="bx bxl-flutter bx-border-circle"
                                    ></i>
                                    {jadwaldata.judul}
                                </p>
                                <p class="m-1">
                                    <i
                                        class="bx bx-calendar-event bx-border-circle"
                                    ></i>
                                    {formatTanggal(
                                        jadwaldata.tanggal,
                                    )},{jadwaldata.jam}
                                </p>
                                <p>
                                    <i class="bx bx-user bx-border-circle"></i>
                                    {jadwaldata.host}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
