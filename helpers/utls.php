<?php

class Utls{

    public static function deleteSession($name){
        if(isset($_SESSION[$name])){
                $_SESSION[$name] = null;
                unset($_SESSION[$name]);
        }
        return $name;
    }

    public static function nameMonth($numberMonth){
        date_default_timezone_set("America/Mexico_City");

        $mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][$numberMonth - 1];

        return $mes;
    }

    public static function sinSession(){
        $_SESSION['errorLoguin'] = "NECESITAS CREDENCIALES PARA INGRESAR";
                    echo '<script>window.location="'.base_url.'"</script>';
    }

    public static function valFomulario($array){
        $valida = 1;
        foreach ($array as $dato => $valor) {
            if ($valor == false) {
                $valida ++;
                $_SESSION['formulario_cliente'] = array(
                    'error' => 'El campo ' . $dato . ' es incorrecto, llena los campos faltantes',
                    'datos' => $array
                );
                break;
            }
        }
        return $valida;
    }

    public static function getisNull($get){
        if(is_null($get)){
            $_SESSION['errorCliente'] = "EL CLIENTE NO ESTA REGISTRADO, FAVOR DE VERIFICAR LOS DATOS";
            echo '<script>window.location="' . base_url .'Pedido/index"</script>';
        
        }
    }


    public static function namebreadcum($linkGet){
        $action = $linkGet ["action"];
        $retorno ='';
        switch ($linkGet["controller"]) {
            case 'Pedido':
               
               break;
           
           default:
               # code...
               break;
       }

       return $retorno;
    }

      /**
       * toma la fecha de hoy, le pasamos como parameto un numero, este parametro nos indica de cuantos dias sumara a la fecha
       */
      public static function sumDays($sumDays){
        $currenteDate =date("Y-m-d");
        
        $newDate = date('Y-m-d',strtotime($currenteDate."+ ".$sumDays." days"));
        return $newDate;
      }

      public static function dd($array){
		$arr = '<pre>';
		$arr .= var_dump($array);
		$arr .= '</pre>';

		return $arr;
	}

}
