export function Clientes(){
    return(
        <div className="Clientes">
            Clientes
            <label>Nombre</label>
            <input type="text" />
            <label>Segundo Nombre</label>
            <input type="text" />
            <label>Apellido Paterno</label>
            <input type="text" />
            <label>Apellido Materno</label>
            <input type="text" />
            <label>Direccion</label>
            <input type="text" /> 
            <label>Distrito</label>
            <input type="text" />
            <label>Celular </label>
            <input type="number" />
            <label>Correo</label>
            <input type="email"></input>
            <label>DNI</label>
            <input type="number"/>
            <input type="submit" value="Guardar"></input>
        </div>
    );
}