<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <?php if (isset($_SESSION['usuario'])): ?>
                <div class="nav">
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small" id="idCamara" data-id="">Hola Usuario:</div>
            </div>
            <?php endif;?>
        </nav>
    </div>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid">