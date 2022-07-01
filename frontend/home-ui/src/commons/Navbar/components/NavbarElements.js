import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

//NAVEGATION BAR CONTAINER
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "5rem")};
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, #282c34 100%);;
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
`;
//NAVEGATIOS LINK PLACEHOLDER
export const Pages = styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
  padding-right: 3rem;
`;
//LOGIN, LOGOUT, SIGNIN PLACEHOLDER
export const Buttons = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
  padding-right: 0.25rem;
`;

//CHANGE LANGUEAGE BUTTON PLACEHOLDER
export const Language = styled.div`
  flex: 5%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0rem;
  padding-top: 1.25rem;
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

  @media screen and (max-width: 768px) {
    display: none;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

//DROPDOWN BAR FOR SMALL SCREENS
export const NavbarVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
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