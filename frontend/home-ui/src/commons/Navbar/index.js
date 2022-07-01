import React, { useState, useContext } from 'react';
import {
  NavbarContainer,
  Logo,
  Pages,
  Buttons,
  Language,
  NavbarHorizontalContainer,
  NavbarVerticalContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  DropdownMenu,
  LinksButton,
} from './components/NavbarElements';
import Drop from './components/Dropdown.js'
import AuthContext from '../../context/AuthProvider.js'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  //Checking if the user is logged in to define what buttons should be displayed
  const { auth } = useContext(AuthContext);
  const loggedIn = auth?.user ? true : false;

  //Checking the state of the dropdown navigation bar in small screens
  const [extendNavbar, setExtendNavbar] = useState(false)

  const navigate = useNavigate();
  
  //This'll handle the buttons of the navigation bar
  const handleSubmit = async (path) => {
    navigate(path, { replace: true }); //need to further check this once the login is correctly working
  }

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarHorizontalContainer>
          {/* Our logo */}
          <Logo>
            WhoIsClicking
          </Logo>
          {/* Our navigation tabs */}
          <Pages>
            <NavbarLinkContainer>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/about">About Us</NavbarLink>
              <NavbarLink to="/">Thanks to</NavbarLink>
              <NavbarLink to="/create">Create Link</NavbarLink>
              <DropdownMenu 
                onClick={() => setExtendNavbar((current) => !current)}> 
                {extendNavbar ? <> &#10005;</> : <>&#8801;</> }
              </DropdownMenu>
            </NavbarLinkContainer>
          </Pages>
          {/* Our buttons */}
          <Buttons>
            {
              !loggedIn 
                ? <>
                    <LinksButton onClick={ () => handleSubmit("/login")}>Login</LinksButton>
                    <LinksButton onClick={ () => handleSubmit("register")}>Signin</LinksButton>
                  </>
                :   <LinksButton onClick={ () => handleSubmit("logout")}>Logout</LinksButton>
            }
          </Buttons>
          {/* Our language button */}
          <Language>
            <Drop></Drop>
          </Language>
        {/* Our dropdown navigation button and bar */}
        </NavbarHorizontalContainer>
          {
            extendNavbar && (
              <NavbarVerticalContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">About Us</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Thanks to</NavbarLinkExtended>
                <NavbarLinkExtended to="/create">Create Link</NavbarLinkExtended>
              </NavbarVerticalContainer>
            )
          }
      </NavbarContainer>
    </>
  );
};

export default Navbar;
