export function formatTanggal(tanggal) {
    const date = new Date(tanggal)
    return Intl.DateTimeFormat("id-ID", {
        day: 'numeric', month: 'long', year: 'numeric'
    }).format(date)
}