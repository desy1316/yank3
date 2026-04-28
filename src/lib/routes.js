import Home from './Halaman/Home.svelte'
import Ayatsingkat from './Halaman/Ayatsingkat.svelte'
import Audio from './Halaman/Audio.svelte'
import Jadwal from './Halaman/Jadwal.svelte'
export const routes = {
    '/': Home,
    '/ayat-singkat': Ayatsingkat,
    '/audio': Audio,
    '/jadwal-ibadat': Jadwal
}