import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
     <Link to="Home" className="site-title">Pets 4 Life</Link>   
     <ul>
     <li>
        <Link to="/About">About</Link>
      </li>
      <li>  
        <Link to="/Checkout">Checkout</Link>
      </li>   
     </ul>

    </nav>
}