import React from 'react'

import styles from './style.module.css'

import icon_fb from '../../assets/footer-icon/icon_facebook.png'
import icon_ig from '../../assets/footer-icon/icon_instagram.png'
import icon_twiter from '../../assets/footer-icon/icon_twitter.png'
import icon_mail from '../../assets/footer-icon/icon_mail.png'
import icon_twitc from '../../assets/footer-icon/icon_twitch.png'

import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className="container-fluid mb-5" id={styles.footer}>
            <div>
                <div className="row mt-5">
                    <div className="col-sm-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>

                    <div className="col-sm-3 fw-bold lh-lg">
                        <a
                            className={styles.link_footr} href="#ourservices">Our Services</a><br />
                        <a
                            className={styles.link_footr}
                            href="#whyus">Why Us</a><br />
                        <a
                            className={styles.link_footr} href="#testimonial">Testimonial</a><br />
                        <a
                            className={styles.link_footr} href="#faq">FAQ</a><br />
                    </div>

                    <div className="col-sm-4">
                        <p>Connect with us</p>
                        <div className={styles.icon_foot}>
                            <a href="https://www.facebook.com/">
                                <img src={icon_fb}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src={icon_ig}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.twitter.com/">
                                <img src={icon_twiter}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.gmail.com/">
                                <img src={icon_mail}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.twitch.com/">
                                <img src={icon_twitc}
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <p>Copyright Binar 2022</p>
                        <a href="/">
                            <div className={styles.navbar_logo}></div>
                        </a>
                    </div>
                </div>
            </div >
        </Container >
    )
}