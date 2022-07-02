import styled from 'styled-components';
import {Github} from '@styled-icons/bootstrap/Github';
import {Linkedin} from '@styled-icons/bootstrap/Linkedin';

//NAVEGATION BAR CONTAINER
export const FooterContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #282c34 100%);;
  display: flex;
  flex-direction: column;
  color: white;

  @media screen and (min-width: 768px) {
    height: 5rem;
  }

  
`;

//HORIZONTAL CONTAINER
export const FooterHorizontalContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
`;

//OTHER PROJECTS PLACEHOLDER
export const ProjectsPlaceholder = styled.div`
  flex: 40%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  
  @media (max-width: 565px) {
    display: none;
  }
`;

//CONTACT US PLACEHOLDER
export const ContactPlaceholder = styled.div`
  flex: 60%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;

  @media (max-width: 1335px) {
    display: none;
  }
`;

//CONTACT SECTION TITLE

export const ContactTitle = styled.p`
  color: white;
  height: 100%;
  display: flex;
  margin-right: -1.7rem;
`;

//PROJECT SECTION TITLE

export const ProjectsTitle = styled.p`
  color: white;
  height: 100%;
  display: flex;
`;

//CONTAINER FOR ALL THE LINKS
export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin-left: -3rem;
  cursor: pointer;
`;

//LINKS COMPONENT
export const FooterLink = styled.a`
  display: flex;
  margin-bottom: 0rem;
  padding-left: 1rem;
  transition: all 0.2s ease-in-out;
  color: whitesmoke;
  text-decoration:none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #18ffff;
  }
`;

export const GithubIcon = styled(Github)`
  color: white;
  max-width: 2.5rem;
  margin-left: -2rem;
  margin-top: -1.1rem;
`;

export const LinkedinIcon = styled(Linkedin)`
  color: white;
  max-width: 2.5rem;
  margin-left: -3.5rem;
  margin-top: -1.1rem;
`;