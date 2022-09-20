<?php

require_once($_SERVER['DOCUMENT_ROOT'].PORJECT.'/config/modeloBase.php');

class FastQuery extends ModelBase
{
    public function __construct()
    {
       parent::__construct();
    }

    public function getAll($tabla){
    	$consulta = "SELECT * FROM $tabla";
        $query = $this->db->query($consulta);
        return $query;
    }
    
    public function getAllWhere($tabla,$where){
        $consulta = "SELECT * FROM $tabla $where";
        $query = $this->db->query($consulta);
        return $query;
    }
    
}
