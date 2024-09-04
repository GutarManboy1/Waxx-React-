import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav">
          <div className="nav-logo">Waxx</div>
          <ul className="nav-menu">
            <li>Home</li>
            <li className='nav-contact'>Your Profile</li>
          </ul>
        </div>
      )
}

export default NavBar