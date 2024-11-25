import './recepcion.css';
import { useState } from "react";

export function Recepcion() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDropdown} className="dropbtn">Tipo de servicio</button>
            {isOpen && (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            )}
        </div>
    );
}

export default Recepcion;