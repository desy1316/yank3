<script>
</script>

<footer>
    <div class="flex-footer bg-light py-3">
        <a href="#/">
            <i class="bx bx-home-heart bx-border-circle"></i>
        </a>
        <a href="#/audio">
            <i class="bx bx-headphone bx-border-circle"></i>
        </a>
        <a href="#/jadwal-ibadat">
            <i class="bx bx-calendar-event bx-border-circle"></i>
        </a>
        <a href="#">
            <i class="bx bx-mail-send bx-border-circle"></i>
        </a>
    </div>
</footer>

<style>
    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999999;
        display: none;
        padding: 10px 15px;
    }

    .flex-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;

        /* Core Glassmorphism */
        background: rgba(255, 255, 255, 0.4); /* Warna putih transparan */
        backdrop-filter: blur(15px); /* Efek blur kaca */
        -webkit-backdrop-filter: blur(15px); /* Support Safari */

        /* Border halus ala iOS */
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px; /* Biar lebih modern & melengkung */

        /* Bayangan tipis agar terlihat melayang */
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    }

    footer a {
        font-size: 1.5rem !important; /* Ukuran icon agak dibesarkan */
        color: orangered;
        padding: 10px;
        transition: transform 0.2s ease;
    }

    footer a:active {
        transform: scale(0.9); /* Efek klik membal ala iOS */
    }

    @media (max-width: 576px) {
        footer {
            display: block;
        }
    }
</style>
