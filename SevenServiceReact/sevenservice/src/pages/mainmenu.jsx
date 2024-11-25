import { Clientes } from "../components/Clients/clientes";
import { Recepcion } from "../components/Recepcion/recepcion";
import { useState } from "react";
import { Servicios } from "../components/Servicio/servicio";
export function Mainmenu(){
    return(
        <div>
            <Clientes/>
            <Recepcion/>
            <Servicios/>
        </div>
    );
}