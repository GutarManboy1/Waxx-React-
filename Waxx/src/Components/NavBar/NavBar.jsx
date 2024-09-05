import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav">
          <div className="nav-logo">Waxx</div>
          <ul className="nav-menu">
            <li> <Link to="/home">Home</Link></li>
            <li className='nav-contact'><Link to="/profile">Your Profile</Link></li>
          </ul>
        </div>
      )
}

export default NavBar