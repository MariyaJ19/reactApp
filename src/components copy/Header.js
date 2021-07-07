import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav className ='navbar navbar-light navbar-expand-md sticky-top nav-bar'>
            <div className ="container">
                <a className="navbar-brand" href ="#">
                    SOLENT 
                    <br></br>
                </a>
                <button 
                data-bs-toggle="collapse"
                data-bs-target="navcol-1"
                className="navbar-toggler"
                >
                    <span className="visually-hidden">Toggle Navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id ="navcol-1">
                    <ul className="navbar-nav ns-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="src/components/Home.js">Menu</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;