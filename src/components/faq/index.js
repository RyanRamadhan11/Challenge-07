import React from 'react'

import styles from './style.module.css'

import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

import { Accordion, AccordionCollapse, Container } from 'react-bootstrap'

export default function FaqComponent() {
    return (
        <Container id="faq" className="container-fluid mt-5 mb-5">
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm">
                        <h4 className="fw-bold">Frequently Asked Question</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="col-sm">
                        <Accordion defaultActiveKey="1" className={styles.acc}>
                            <AccordionItem>
                                <AccordionHeader>
                                    Apa saja syarat yang dibutuhkan?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque 
                                    iure ea excepturi consequuntur non perspiciatis repellat!
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>

                        <Accordion defaultActiveKey="1" className={styles.acc}>
                            <AccordionItem>
                                <AccordionHeader>
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque
                                    iure ea excepturi consequuntur non perspiciatis repellat!
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> 

                        <Accordion defaultActiveKey="1" className={styles.acc}>
                            <AccordionItem>
                                <AccordionHeader>
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque
                                    iure ea excepturi consequuntur non perspiciatis repellat!
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> 

                        <Accordion defaultActiveKey="1" className={styles.acc}>
                            <AccordionItem>
                                <AccordionHeader>
                                    Apakah ada biaya antar-jemput?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque
                                    iure ea excepturi consequuntur non perspiciatis repellat!
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> 
                        
                        <Accordion defaultActiveKey="1" className={styles.acc}>
                            <AccordionItem>
                                <AccordionHeader>
                                    Bagaimana jika terjadi kecelakaan?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque 
                                    iure ea excepturi consequuntur non perspiciatis repellat!
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> 
                    </div>
                </div>
            </div>
        </Container>
    )
}