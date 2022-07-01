import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {
  NavbarContainer,
  Logo,
  Pages,
  Buttons,
  Language,
  NavbarHorizontalContainer,
  NavbarVerticalContainer,
  NavbarLogoLink,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  DropdownMenu,
  LinksButton,
} from './components/NavbarElements';
import DropdownLanguage from './components/Dropdown.js'
import AuthContext from '../../context/AuthProvider.js'

const Navbar = () => {

  //language manager
  const { t } = useTranslation()

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
  {t('home_page')}
  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarHorizontalContainer>
          {/* Our logo */}
          <Logo>
            <NavbarLogoLink to="/">WhoIsClicking</NavbarLogoLink>
          </Logo>
          {/* Our navigation tabs */}
          <Pages>
            <NavbarLinkContainer>
              <NavbarLink to="/aboutwic">{t('about_project_page')}</NavbarLink>
              <NavbarLink to="/aboutus">{t('about_us_page')}</NavbarLink>
              <NavbarLink to="/thanksto">{t('thanksto_page')}</NavbarLink>
              <NavbarLink to="/guest">{t('guest_page')}</NavbarLink>
              <NavbarLink to="/user">{t('user_page')}</NavbarLink>
              <NavbarLink to="/linkscreation">{t('createlinks_page')}</NavbarLink>
              <NavbarLink to="/contact">{t('contact_us_page')}</NavbarLink>
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
                    <LinksButton onClick={ () => handleSubmit("/login")}>{t('login_button')}</LinksButton>
                    <LinksButton onClick={ () => handleSubmit("register")}>{t('register_button')}</LinksButton>
                  </>
                :   <LinksButton onClick={ () => handleSubmit("logout")}>{t('logout_button')}</LinksButton>
            }
          </Buttons>
          {/* Our language button */}
          <Language>
            <DropdownLanguage></DropdownLanguage>
          </Language>
        {/* Our dropdown navigation button and bar */}
        </NavbarHorizontalContainer>
          {
            extendNavbar && (
              <NavbarVerticalContainer>
                <NavbarLinkExtended to="/">{t('home_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">{t('about_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/">{t('thanksto_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/create">{t('createlinks_page')}</NavbarLinkExtended>
              </NavbarVerticalContainer>
            )
          }
      </NavbarContainer>
    </>
  );
};

export default Navbar;
