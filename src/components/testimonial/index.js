import React from 'react'

import '../../styles/style.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Row, Col, } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';

import profile1 from '../../assets/testimonials/img_photo.png';
import profile2 from '../../assets/testimonials/img_photo2.png';
// import rate from '../../assets/testimonials/Rate.png'


export default function TestimonialComponent() {
    return (
        
        <section className="testimonial" id="testimonial">
        <div className="Testimonial-title text-center" id="Testimonial">
            <h2 className="fw-700">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel items={2} className="owl-theme" loop nav center margin={10}>
            <Row>
            <Col>
                <div className="item">
                <div className="testi-body">
                    <div className="card-left img-card">
                    <img src={profile1} className="rounded-circle" />
                    </div>
                    <div className="card-right">
                    <div className="faq-icon">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <div className="item">
                <div className="testi-body">
                    <div className="card-left img-card">
                    <img src={profile2} className="rounded-circle" />
                    </div>
                    <div className="card-right">
                    <div className="faq-icon">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <div className="item">
                <div className="testi-body">
                    <div className="card-left img-card">
                    <img src={profile2} className="rounded-circle" />
                    </div>
                    <div className="card-right">
                    <div className="faq-icon">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                </div>
            </Col>
            </Row>
        </OwlCarousel>
        </section>
    )
}