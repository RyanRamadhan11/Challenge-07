import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import styles from './style.module.css'
import getCarsService from '../../service/getCars'

import Navbar from '../../components/navbar'
import Car_Desc_Sewa from '../../components/cars_desc_sewa'
import Search_Cars from '../../components/search_cars'
import Output_Cars from '../../components/output_cars'
import Footer from '../../components/footer'

export default function Cars() {
    const [cars, setCars] = useState([])

    const getCars = async () => {
        const allCars = await getCarsService()
        setCars(allCars)
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <div>
            <Navbar />
            <Car_Desc_Sewa />
            <Search_Cars />
            <Container>
                <div className={styles.cars}>
                    {
                        cars.map((item, index) => <Output_Cars key={index} car={item} />)
                    }
                </div>
            </Container>
            <Footer />
        </div>
    )
}

