import './Header.css'
import { Navbar } from './Navbar/Navbar';
function Header() {
    return (
        <div className="header">
          <div className="header-top">
          <div className="header-top-right">
            <a href="header-top-right-about">Acerca de</a>
            <a href="header-top-right-contact">Contacto</a>
            <a href="header-top-right-help">Ayuda</a>
            <a href="header-top-right-faqs">FAQs</a>
          </div>
          <div className="header-top-left">
            <button>Mi cuenta</button>
            <button>PEN</button>
            <button>ES</button>
          </div>
          </div>
          <div className="header-down">
            <div className="header-down-logo">
              <a href="">Seven Service</a>
            </div>
            <div className="header-down-searchbar">
              Buscar
            </div>
            <div className="header-down-phone">
              <a href="title">Atención al cliente</a>
              <a href="phonenumber">+51 999 999 999</a>
            </div>
          </div>
          {/*Barra de Navegación*/}
          <Navbar/>
        </div>
      );
}
export default Header;