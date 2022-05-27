import React from 'react'

import styles from './style.module.css'

import img_car from '../../assets/img_full/img_car.png'

import { Container } from 'react-bootstrap'

export default function Desc_SewaComponent() {
    return (
        <div className={styles.header}>
            <Container >
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <h1 className="fw-bold mb-3">
                            Sewa & Rental Mobil Terbaik di Kawasan Karawang
                        </h1>
                        <p className={styles.parag}>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                            dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <a href="/cars" className="btn btn-success my-2 my-sm-0">
                            Mulai Sewa Mobil
                        </a>
                    </div>

                    <div className="col-sm-6 mt-5">
                        <img src={img_car} className={styles.img}/>                        
                    </div>
                </div>
            </Container>
        </div>
    )
}