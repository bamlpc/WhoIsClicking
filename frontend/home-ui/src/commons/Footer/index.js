import React from 'react';

import {
  ContactLinksContainer,
  ContactPlaceholder,
  ContactTitle,
  FooterContainer,
  FooterHorizontalContainer,
  FooterLink,
  GithubIcon,
  LinkedinIcon,
  ProjectLinksContainer,
  ProjectsPlaceholder,
  ProjectsTitle,
} from './components/FooterElements.js';

function Footer() {
  return (
    <FooterContainer>
      <FooterHorizontalContainer>
        <ProjectsPlaceholder>
          <GithubIcon></GithubIcon>
          <ProjectsTitle>Other Projects:</ProjectsTitle>
          <ProjectLinksContainer>
            <FooterLink href="https://github.com/BMogetta">Bruno Mogetta</FooterLink>
            <FooterLink href="https://github.com/lukeciatt">
              Luciano Ciattaglia
            </FooterLink>
          </ProjectLinksContainer>
        </ProjectsPlaceholder>
        <ContactPlaceholder>
          <LinkedinIcon></LinkedinIcon>
          <ContactTitle>Contact Information:</ContactTitle>
          <ContactLinksContainer>
            <FooterLink href="https://www.linkedin.com/in/bmogetta/">
              Bruno Mogetta
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/lucianociattaglia/">
              Luciano Ciattaglia
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/antonellaperazzoni/">
              Antonella Perazzoni
            </FooterLink>
          </ContactLinksContainer>
        </ContactPlaceholder>
      </FooterHorizontalContainer>
    </FooterContainer>
  );
}

export default Footer;
/*
links
https://www.linkedin.com/in/bmogetta/
https://www.linkedin.com/in/lucianociattaglia/
https://github.com/lukeciatt
https://github.com/BMogetta
https://www.linkedin.com/in/antonellaperazzoni/
https://www.linkedin.com/in/antonellaperazzoni/
*/
