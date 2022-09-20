<?php
require_once 'ConectDb.php';
class ModelBase{
    public $db;
    
    public function __construct() {
        $this->db = ConectDb::connect();
        
    }

    public function getCountDatos($tabla,$where,$idAContar){
        $consulta = "SELECT COUNT($idAContar) FROM $tabla
                    WHERE $where ";
        $contar = $this->db->query($consulta);
        return $contar;
    }
}