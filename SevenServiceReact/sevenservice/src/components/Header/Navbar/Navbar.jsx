import './Navbar.css'
export function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-left">
                <div className="categories">
                    <button>Categories</button>
                </div>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><a href="">Menú</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href=""></a></li>
                    <li><button>Paginas</button></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <div>
                    <a href="">{'<3'}</a>
                    <a href="">{'Shop'}</a>
                </div>
            </div>
        </div>
    );
}