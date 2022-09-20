<?php

/* 
 * creamos la conexion a la base de datos en una clase estatica
 */
class ConectDb{
    public static function connect(){
        try {
            $conexion = new mysqli(HOST, USER, PASSWORD, DB);
            $conexion->query("SET NAMES 'utf8'");
            return $conexion;
        } catch (\Throwable $th) {
            echo "ERROR DETECTADO : ".$th->getMessage;
            echo "error: ".$th->getTrace;
        }
       
    }

    
}

