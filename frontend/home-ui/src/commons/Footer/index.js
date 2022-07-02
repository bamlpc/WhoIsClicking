import React from 'react'

import {
    FooterContainer,
    FooterHorizontalContainer,
    ProjectsPlaceholder,
    ContactPlaceholder,
    ProjectsTitle,
    ContactTitle,
    FooterLinksContainer,
    FooterLink,
    GithubIcon,
    LinkedinIcon,
} from './components/FooterElements.js';


function Footer() {
    return (
        <FooterContainer>
            <FooterHorizontalContainer>
                <ProjectsPlaceholder>
                    <ProjectsTitle>Other Projects</ProjectsTitle>
                    <FooterLinksContainer>
                        <FooterLink href="https://github.com/BMogetta">Bruno Mogetta</FooterLink>
                        <FooterLink href="https://github.com/lukeciatt">Luciano Ciattaglia</FooterLink>
                    </FooterLinksContainer>
                    <GithubIcon></GithubIcon>
                </ProjectsPlaceholder>
                <ContactPlaceholder>
                    <ContactTitle>Contact Information</ContactTitle>
                    <FooterLinksContainer>
                        <FooterLink href="https://www.linkedin.com/in/bmogetta/">Bruno Mogetta</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/lucianociattaglia/">Luciano Ciattaglia</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/antonellaperazzoni/">Antonella Perazzoni</FooterLink>
                    </FooterLinksContainer>
                    <LinkedinIcon></LinkedinIcon>
                </ContactPlaceholder>
            </FooterHorizontalContainer>
        </FooterContainer>
    )
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