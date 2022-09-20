<?php
require_once('fastQuery/FastQuery.php');


class Login extends FastQuery{
    private $id;
    private $idUsuario;
    private $email;
    private $pass;
    private $idEstado;
    
    public function __construct() {
        parent::__construct();
    }
    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }
    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 

         /**
     * Get the value of pass
     */ 
    public function getPass()
    {
        //return $this->pass;
        return password_hash($this->db->real_escape_string($this->pass), PASSWORD_BCRYPT, ['cost' => 4]);
    }

    /**
     * Set the value of pass
     *
     * @return  self
     */ 
    public function setPass($pass)
    {
        $this->pass = $pass;

        return $this;
    }
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }
        /**
     * Get the value of idUsuario
     */ 
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * Set the value of idUsuario
     *
     * @return  self
     */ 
    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }
/**
     * @return mixed
     */
    public function getIdEstado()
    {
        return $this->idEstado;
    }

    /**
     * @param mixed $idEstado
     *
     * @return self
     */
    public function setIdEstado($idEstado)
    {
        $this->idEstado = $idEstado;

        return $this;
    }

    public function getMunModels(){
    	$consulta = "SELECT mp.idMunicipio,mp.municipio,es.estado FROM estados_municipios esmp
									INNER JOIN municipios mp
									ON esmp.municipios_id = mp.idMunicipio
									INNER JOIN estados es
									ON esmp.estados_id = es.idEstado
									WHERE es.idEstado = {$this->getIdEstado()}";
    	$query = $this->db->query($consulta);

        return $query;
    }



}
