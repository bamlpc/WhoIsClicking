import React from 'react'

import Footer from './components/FooterElements.js'
import Icons from './components/icons.js'

function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">United States</Footer.Link>
                        <Footer.Link href="#">United Kingdom</Footer.Link>
                        <Footer.Link href="#">Australia</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                </Footer.Row> 
            </Footer.Wrapper>
        </Footer>
    )
}

export {FooterContainer};
/*
links
https://www.linkedin.com/in/bmogetta/
https://www.linkedin.com/in/lucianociattaglia/
https://github.com/lukeciatt
https://github.com/BMogetta
https://www.linkedin.com/in/antonellaperazzoni/
https://www.linkedin.com/in/antonellaperazzoni/
*/