import React from 'react'

import styles from './style.module.css'

import img_price from '../../assets/icon/price.png'
import img_hours from '../../assets/icon/24hrs.png'
import img_thumbsUp from '../../assets/icon/thumbs-up.png'
import img_professional from "../../assets/icon/professional.png"

import { Container, Card } from 'react-bootstrap'


export default function Why_UsComponent() {
    return (
        <Container id="whyus" className={styles.why}>            
                <div>
                    <h4 className="fw-bold">Why Us?</h4>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                
                <div className={styles.card_why}>
                    <Card>
                        <div className="card-body">
                            <img src={img_thumbsUp} className="img-fluid mb-4" />
                            <h5 className="card-title mb-3">Mobil Lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="card-body">
                            <img src={img_price} className="img-fluid mb-4" />
                            <h5 className="card-title mb-3">Harga Murah</h5>
                            <p className="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                                lain
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <div className="card-body">
                            <img src={img_hours} className="img-fluid mb-4" />
                            <h5 class="card-title mb-3">Layanan 24 Jam</h5>
                            <p class="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                                akhir minggu
                            </p>
                        </div>
                    </Card>
                    
                    <Card>
                        <div className="card-body">
                            <img src={img_professional} className="img-fluid mb-4" />
                            <h5 className="card-title mb-3">Sopir Profesional</h5>
                            <p className="card-text">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                        </div>
                    </Card>
                </div>
        </Container>
    )
}
