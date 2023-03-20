import { AiOutlineMenu } from "react-icons/ai"
import { useState, useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const navigation = [
  { name: 'Home', href: "/" },
  { name: 'Calendar', href: "/calendar" },
  { name: 'Teams', href: "/teams" },
  { name: 'Shop', href: "/shop" },
  { name: 'News', href: "/news" },
  { name: 'Contact', href: "/contact" },
]

const Navbar = (props) => {

  const { pathname } = useLocation();

  const [menuCollapse, setMenuCollapse] = useState(false)

  const MenuCollapse = () => {
    setMenuCollapse(!menuCollapse)
  }

  const navItems = useMemo(() => {
    return navigation.map((item, i) => {
      const className = item.href === pathname ? "nav-item current" : "nav-item";
      return (
        <li key={i} className={className}>
          <Link to={item.href}>{item.name}</Link>
        </li>
      );
    });
  }, [pathname]);

  return (
    <header>
      <nav className="navigation">
        <div className="container">
          <div className="navbar">
            <a className="navbar-brand" href="/">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="title">
                <p className="main">Karmine Corp</p>
                <p className="subtitle">ESPORTS</p>
              </div>
            </a>
            <div className={'navbar-collapse collapse' + (menuCollapse ? ' show' : '')}>
              <ul className="navbar-nav">
                {navItems}
              </ul>
            </div>
            <button id="burger-menu" className="burger-menu" onClick={MenuCollapse}>
              <AiOutlineMenu className="icon" size={25} display="block" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar