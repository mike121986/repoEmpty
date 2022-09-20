 <div class="sticky-top headerPositionSticky">     
     <div class="cabeceraBtn">
         <?php if (isset($_SESSION['formulario_cliente'])) {
             echo '<div class="alert alert-danger" role="alert" style="width:80%;">HUBO UN ERROR INTERNO EN EL SISTEMA, CONTACTA A TU ADMINISTRADOR DE SISTEMAS</div>';
             Utls::deleteSession('formulario_cliente');
            }
            ?>
        <div class="boton"  id="botondiv">
            <button type="button" id="backHisotry" class="btn btn-primary">REGRESAR</button>
        </div>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page"><?=Utls::namebreadcum($_GET)?></li>
        </ol>
    </nav> 
</div>