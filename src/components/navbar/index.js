import React from 'react'

import styles from './style.module.css'

import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export default function NavbarComponent() {
    return (
        <Navbar className={styles.nav_bg} variant="light" expand="lg" fixed="top">
            <Container className={styles.nav_container}>
                <Nav.Link href="/">
                    <div className={styles.nav_logo}></div>
                </Nav.Link>

                <Nav className="ms-auto" >
                    <Nav.Link className={styles.nav_link} href="#ourservices">
                        Our Services
                    </Nav.Link>

                    <Nav.Link className={styles.nav_link} href="#whyus">
                        Why Us
                    </Nav.Link>

                    <Nav.Link className={styles.nav_link} href="#testimonial">
                        Testimonial
                    </Nav.Link>

                    <Nav.Link className={styles.nav_link} href="#faq">
                        FAQ
                    </Nav.Link>

                    <Button variant="success" className={styles.nav_button}> 
                        Register
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}
