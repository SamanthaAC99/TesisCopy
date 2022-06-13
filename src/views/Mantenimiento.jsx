import React from "react";
import Button from '@mui/material/Button';
import Tablareporte from "../components/EstatusReporte";
import '../hoja-de-estilos/Mantenimiento.css'
import { useNavigate } from 'react-router-dom'


export default function Mantenimientoview(){

    const navigate = useNavigate();
    const agregarformulario= () => {
       navigate('/home/OTS')
     }

    return(
        <>
        <h1> Módulo Gestión de Mantenimiento </h1>
        <Tablareporte/>
        { <Button variant="contained" color='success'className="boton" onClick={agregarformulario}>Agregar Orden de Trabajo</Button>}
        </>
    
    );
}