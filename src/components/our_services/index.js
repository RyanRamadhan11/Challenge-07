import React from 'react'

import styles from './style.module.css'

import img_service from '../../assets/img_full/img_service.png'
import checklist from '../../assets/icon/checklist.png'

import { Container } from 'react-bootstrap'

export default function Our_ServicesCompononet() {
    return (
        <Container id="ourservices" className={styles.our}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img_service} className="img-fluid" />
                    </div>

                    <div className=" col-sm-6">
                        <h4 className="fw-bold py-4">
                            Best Car Rental for any kind of trip in Karawang!
                        </h4>
                        
                        <p>
                            Sewa mobil di Karawang bersama Binar Car Rental jaminan harga lebih murah dibandingkan
                            yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>

                        <div className={styles.chek}>
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil dengan Supir di Bali 12 Jam<br />
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil Lepas Kunci di Bali 24 Jam<br />
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil Jangka Panjang Bulanan<br />
                            <img src={checklist} className="mb-2" />&emsp;Gratis Antar - Jemput Mobil di Bandara<br />
                            <img src={checklist} className="mb-2" />&emsp;Layanan Airport Transfer / Drop In Out<br />
                        </div>
                    </div>
                </div>
        </Container>
    )
}
