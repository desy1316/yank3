<script>
    const brandname = "Bapen";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top glass-nav">
    <a class="navbar-brand" href="#/">{brandname}</a>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" href="#/">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
        </div>
    </div>
</nav>

<style>
    /* Reset background bawaan bootstrap */
    :global(.navbar.glass-nav) {
        background-color: rgba(
            255,
            255,
            255,
            0.5
        ) !important; /* Transparansi Putih */
        backdrop-filter: blur(15px); /* Efek Blur + Saturasi khas iOS */
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Garis bawah tipis */
        padding: 0.8rem 1rem;
        transition: all 0.3s ease;
    }

    /* Merapikan Link */
    .nav-link {
        font-weight: 500;
        color: #333 !important;
    }

    .navbar-brand {
        color: #000 !important;
        letter-spacing: -0.5px;
    }

    /* Efek saat menu di hover */
    .nav-link:hover {
        color: orangered !important; /* Warna biru khas Apple */
    }
</style>
