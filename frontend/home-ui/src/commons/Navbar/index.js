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
  MediumNavbarVerticalContainer,
  SmallNavbarVerticalContainer,
  NavbarVerticalContainer,
  NavbarLogoLink,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  DropdownMenu,
  LinksButton,
  PageDropdownButton,
  PageVerticalContainer,
  PageLinkExtended,
  PageLinkExtendedButton,
  MediumPages,
  SmallPages,
} from './components/NavbarElements';
import DropdownLanguage from './components/Dropdown.js'
import AuthContext from '../../context/AuthProvider.js'

const Navbar = () => {

  //language manager
  const { t } = useTranslation()

  //Checking if the user is logged in to define what buttons should be displayed
  const { auth } = useContext(AuthContext);
  const loggedIn = auth?.user ? true : false;

  //Checking the state of the dropdown navigation bar in medium and small screens
  const [MediumPageExtendNavbar, setMediumPageExtendNavbar] = useState(false)
  const [SmallPageExtendNavbar, setSmallPageExtendNavbar] = useState(false)

  const navigate = useNavigate();
  
  //This'll handle the buttons of the navigation bar
  const handleSubmit = async (path) => {
    navigate(path, { replace: true }); //need to further check this once the login is correctly working
  } //TODO: need to close dropdonws after a click

  //This'll handle the About dropdown button
  const [extendedAbout, setExtendedAbout] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false);

  const aboutHandleMouseIn = () => {
    setHoverAbout(true);
  };

  const aboutHandleMouseOut = () => {
    setHoverAbout(false);
  };

  //This'll handle the User dropdown button
  const [extendedUser, setExtendedUser] = useState(false)
  const [hoverUser, setHoverUser] = useState();

  const userHandleMouseIn = () => {
    setHoverUser(true);
  };

  const userHandleMouseOut = () => {
    setHoverUser(false);
  };

//poner margenes negativos a los contenedores verticales para tirarlos hacia arriba
//crear linkcontainer solo para el titulo para evitar que el padding lo separe
  return (
    <>
      <NavbarContainer MediumPageExtendNavbar={MediumPageExtendNavbar}>
        <NavbarHorizontalContainer>
          {/* Really small screen dropdow button*/}
          <SmallPages>
            <DropdownMenu 
                onClick={() => setSmallPageExtendNavbar((current) => !current)}> 
                {SmallPageExtendNavbar ? <> &#10005;</> : <>&#8801;</> }
            </DropdownMenu>
          </SmallPages>
          {/* Medium size screen dropdown button */}
          <MediumPages>
            <DropdownMenu 
                  onClick={() => setMediumPageExtendNavbar((current) => !current)}> 
                  {MediumPageExtendNavbar ? <> &#10005;</> : <>&#8801;</> }
            </DropdownMenu>
          </MediumPages>
          {/* Our logo */}
          <Logo>
            <NavbarLogoLink to="/">WhoIsClicking</NavbarLogoLink>
          </Logo>
          {/* Our navigation tabs */}
          <Pages>
            <NavbarLinkContainer>
              <PageDropdownButton  Click={() => setExtendedAbout((current) => !current)} 
                                      onMouseOver={aboutHandleMouseIn} 
                                      onMouseOut={aboutHandleMouseOut}
              >
                {
                  extendedAbout 
                  ? <PageLinkExtendedButton to="/about">{t('about_page')}</PageLinkExtendedButton>
                  : <PageLinkExtendedButton to="/about">{t('about_page')}</PageLinkExtendedButton>
                }
              
                <PageVerticalContainer>
                  {
                    hoverAbout &&
                     <>
                        <PageLinkExtended to="/aboutwic">{t('about_project_page')}</PageLinkExtended>
                        <PageLinkExtended to="/aboutus">{t('about_us_page')}</PageLinkExtended>
                        <PageLinkExtended to="/thanksto">{t('thanksto_page')}</PageLinkExtended>
                      </>
                  }
                </PageVerticalContainer>
              </PageDropdownButton>
              <NavbarLink to="/guest">{t('guest_page')}</NavbarLink>
              <PageDropdownButton  Click={() => setExtendedUser((current) => !current)} 
                                      onMouseOver={userHandleMouseIn} 
                                      onMouseOut={userHandleMouseOut}
              >
                {
                  extendedUser 
                  ? <PageLinkExtendedButton to="/user">{t('user_page')}</PageLinkExtendedButton>
                  : <PageLinkExtendedButton to="/user">{t('user_page')}</PageLinkExtendedButton>
                }
              
                <PageVerticalContainer>
                  {
                    hoverUser &&
                     <>
                        <PageLinkExtended to="/linkscreation">{t('createlinks_page')}</PageLinkExtended>
                        <PageLinkExtended to="/qrgeneration">{t('qr_page')}</PageLinkExtended>
                        <PageLinkExtended to="/generated">{t('generated_page')}</PageLinkExtended>
                        <PageLinkExtended to="/hunter">{t('hunter_page')}</PageLinkExtended>
                      </>
                  }
                </PageVerticalContainer>
              </PageDropdownButton>
              <NavbarLink to="/disclaimer">{t('disclaimer_page')}</NavbarLink>
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
        <MediumNavbarVerticalContainer>
          {
            MediumPageExtendNavbar && (
              <NavbarVerticalContainer>
                <NavbarLinkExtended to="/about">{t('about_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/guest">{t('guest_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/user">{t('user_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/disclaimer">{t('disclaimer_page')}</NavbarLinkExtended>
              </NavbarVerticalContainer>
            )
          }
        </MediumNavbarVerticalContainer>
        <SmallNavbarVerticalContainer>
          {
            SmallPageExtendNavbar && (
              <NavbarVerticalContainer>
                <NavbarLinkExtended to="/">{t('home_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">{t('about_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/guest">{t('guest_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/user">{t('user_page')}</NavbarLinkExtended>
                <NavbarLinkExtended to="/disclaimer">{t('disclaimer_page')}</NavbarLinkExtended>
                {
                  !loggedIn 
                  ? <>
                    <NavbarLinkExtended to="/login">{t('login_page')}</NavbarLinkExtended>
                    <NavbarLinkExtended to="/signin">{t('register_page')}</NavbarLinkExtended>
                    </>
                  :<NavbarLinkExtended to="/logout">{t('logout_page')}</NavbarLinkExtended>
                }
              </NavbarVerticalContainer>
            )
          }
        </SmallNavbarVerticalContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
