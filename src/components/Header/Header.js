import React from 'react';
import logo from '../../assets/images/logo-s.png';
import { MenuLink } from '../../constants/constants';

const Header = () => (
  <section className="navigation">
    <div className="nav-container">
      <div className="brand">
        <a href="#!" className="homepage"><img src={logo} alt="jio teserract logo" /></a>
      </div>
    </div>
    <Menu />
  </section>
)

const Menu = () => {
  return (
    <nav className="menu-links">
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul className="nav-list">
        {
          MenuLink.map((items, idx) => {
            return <li>
              <a href={items.link} key={items.id} role="button" tabIndex={0}>{items.name}</a>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Header;