import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

//NAVEGATION BAR CONTAINER
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '5rem')};
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #282c34 100%);
  display: flex;
  flex-direction: column;
  color: white;

  @media (min-width: 768px) {
    height: 5rem;
  }
`;

//WEBPAGE LOGO PLACEHOLDER
export const Logo = styled.div`
  flex: 15%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding-right: 3rem;

  @media (max-width: 805px) {
    flex: 60%;
    align-items: center;
    padding-right: 0rem;
    justify-content: flex-start;
  }

  @media (max-width: 547px) {
    flex: 60%;
    align-items: center;
    padding-right: 0rem;
    justify-content: center;
  }
  @media (max-width: 374px) {
    display: none;
  }
`;
//NAVEGATION LINK PLACEHOLDER
export const Pages = styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: center;

  @media (max-width: 805px) {
    display: none;
    flex: 0%;
  }
`;

//LOGIN, LOGOUT, SIGNIN PLACEHOLDER
export const Buttons = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
  padding-right: 0.25rem;

  @media (max-width: 547px) {
    flex: 0%;
    display: none;
  }
`;

//CHANGE LANGUEAGE BUTTON PLACEHOLDER
export const Language = styled.div`
  flex: 5%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0rem;
  padding-top: 1.25rem;

  @media (max-width: 547px) {
    flex: 20%;
  }

  @media (max-width: 374px) {
    display: flex;
    flex: 50%;
    align-items: right;
  }
`;

//LOGO LINK COMPONENT
export const NavbarLogoLink = styled(Link)`
  color: #18ffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 2rem;
  font-family: 'The Nautigal', cursive;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #00e676;
  }
  &.active {
    color: #18ffff;
  }
`;
//THIS IS THE CONTAINER FOR: LOGO, LINKS, BUTTONS, LANGUAGE
export const NavbarHorizontalContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
`;

//THIS IS THE CONTAINER FOR ALL THE LINKS
export const NavbarLinkContainer = styled.div`
  display: flex;
  position: absolute;
  margin-top: -0.7rem;
`;

//LINKS COMPONENT
export const NavbarLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }
  &.active {
    color: #ff1744;
  }
`;

//LOGIN, LOGOUT AND SIGNIN BUTTON
export const LinksButton = styled.button`
  width: 4.4rem;
  height: 3.2rem;
  background-color: #3d5afe;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.125rem 0 #263238;
  transition: all 0.2s ease-in-out;
  border-radius: 1rem;
  outline-width: 1rem;
  align-self: center;
  margin-left: 0.75rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
    background: #304ffe;
  }
  &.active {
    background: #ff1744;
  }
`;

///////////////////////////////////////////////////////////////////////////////

//DROPDOWN MENU BUTTON USE IN SMALL SCREENS
export const DropdownMenu = styled.button`
  width: 4.4rem;
  height: 3.2rem;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: -3.5rem;
  margin-top: -1.25rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }
`;

//DROPDOWN BAR FOR SMALL SCREENS
export const NavbarVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//WRAPPER TO HANDLE AUTOMATIC CLOSURE IF THE MEDIUM SIZE SCREEN CHANGES TO LARGE
export const MediumNavbarVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 806px) {
    display: none;
  }

  @media (max-width: 546px) {
    display: none;
  }
`;

//WRAPPER TO HANDLE AUTOMATIC CLOSURE IF THE SMALL SIZE SCREEN CHANGES TO MEDIUM
export const SmallNavbarVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 547px) {
    display: none;
  }
`;

//LINKS COMPONENT FOR THE DROPDOWN BAR
export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }

  &.active {
    color: #ff1744;
  }
`;
////////////////////////////////////////////////////////////////////////////////

//PAGE DROPDOWN BUTTON
export const PageDropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  max-height: 3rem; //this will handle the gap between the buttom and the list that drops on hover

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }
`;

//PAGE VERTICAL CONTAINER
export const PageVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // margin-top: -2.5rem; se me mueve todo si toco esto..
`;

//LINKS COMPONENT FOR PAGE DROP BAR
export const PageLinkExtended = styled(Link)`
  color: #fff;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  padding-top: 0.45rem;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }

  &.active {
    color: #ff1744;
  }
`;

//PAGE LINK EXTENDED BUTTON
export const PageLinkExtendedButton = styled(Link)`
  color: #fff;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }

  &.active {
    color: #ff1744;
  }
`;

///////////////////////////////////////////////////////

//MEDIUM PAGES DROPDOWN
export const MediumPages = styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
  padding-right: 3rem;

  @media (min-width: 806px) {
    flex: 0%;
    display: none;
  }

  @media (min-width: 547px) {
    flex: 20%;
    align-items: left;
    justify-content: flex-start;
  }

  @media (max-width: 546px) {
    display: none;
  }
`;

//REALLY SMALL PAGES DROPDOWN
export const SmallPages = styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
  padding-right: 3rem;

  @media (min-width: 547px) {
    display: none;
  }

  @media (max-width: 547px) {
    flex: 20%;
    padding-right: 0rem;
    align-items: left;
    justify-content: flex-start;
  }

  @media (max-width: 374px) {
    padding-right: 0rem;
    flex: 50%;
    align-items: left;
    justify-content: flex-start;
  }
`;
