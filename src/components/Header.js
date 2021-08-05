import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
    return ( 
        <>
        <div className="header">
            <div className="header_content">
                <div className="logo">
                    <Router>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </Router>
                </div>
                <div className="menu">
                    <Router>
                    <ul>
                        <li><Link to="/" >Home</Link><i className="fas fa-angle-down"></i></li>
                        <li><Link to="/" >About</Link><i className="fas fa-angle-down"></i></li>
                        <li><Link to="/" >Pages</Link><i className="fas fa-angle-down"></i></li>
                        <li><Link to="/" >Show</Link><i className="fas fa-angle-down"></i></li>
                        <li><Link to="/" >Blog</Link><i className="fas fa-angle-down"></i></li>
                        <li><Link to="/" >Contact</Link></li>
                        <ShoppingCartIcon className="shopping_cart"/>
                        <Link className="support" to="support">Support</Link>
                        <Link className="login" to="login">Login</Link>
                    </ul>
                    </Router>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Header;