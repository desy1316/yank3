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
        <a href="#">
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
    }
    .flex-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    footer a {
        font-size: 1.6rem !important;
        color: orangered;
    }

    @media (max-width: 576px) {
        footer {
            display: block;
        }
    }
</style>
