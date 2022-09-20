<?php

require '../../../config/requireoncedefault.php';
/**
 *  * esta clase es heredada para todos los ajax 
 * este ya contiene las configuraciones de 
 * los principales archivos que re quiere para su fucionameinto
 * Contiene una clase para que esta sea utilizada en los archivos heredados
 * esta sera reescrita
 */
class AjaxDefault{
    protected $datos;

    public function __construct($datos)
    {
        $this->datos = $datos;
        
    }

    /**
     * Get the value of datos
     */
    public function getDatos()
    {
        return $this->datos;
    }

    /**
     * Set the value of datos
     */
    public function setDatos($datos)
    {
        $this->datos = $datos;

        return $this;
    }

    public function  sendToController(){
        return 0;
    }
    
}