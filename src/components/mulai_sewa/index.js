import React from 'react'

import styles from './style.module.css'

import { Container } from 'react-bootstrap'

export default function Mulai_SewaComponent() {
    return (
        <Container className="mt-5 mb-5">
                <div className="container text-center" id={styles.regist}>
                    <div className={styles.regs_isi}>
                        <h1>
                            Sewa Mobil di Karawang Sekarang
                        </h1>
                        <p className="container text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <a href="/cars" className=" btn btn-success my-2">
                            Mulai Sewa Mobil
                        </a>
                    </div>
                </div>
        </Container>
    )
}
