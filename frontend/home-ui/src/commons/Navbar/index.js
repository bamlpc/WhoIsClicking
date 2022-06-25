import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './components/NavbarElements';
import Drop from './components/Dropdown.js'

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/*<img src={require('../../images/logo.svg')} alt='logo' />*/}
          WhoIsClicking
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/linkscreation'  activeStyle>
            Links generator
          </NavLink>
          <NavLink to='/webscrapper'    activeStyle>
            Web Scrapper
          </NavLink>
          <NavLink to='/about'          activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
          <Drop />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
