<?php
/* require_once("./models/logginModel.php"); */
class LogginController
{
    public $table;
    public $match;
    public $id;

    public function index(){
       echo "desde index";
    }

    public function logout()
    {
        session_destroy();
        echo '<script>
            sessionStorage.removeItem("lasTUrl");
            sessionStorage.removeItem("logguin");
            window.location="' . base_url . '"</script>';
    }

   
/*     public function getCorreoExistent($email)
    {
        $correo = Validacion::validarEmail($email);

        if ($correo != '0') {
            $mail = new Usuario();
            $resultado = $mail->getEmailExis($correo);
            if ($resultado->num_rows > 0) {
                echo 1;
            } else {
                echo 0;
            }
        } else {
            echo 2;
        }
    } */

    
}
