import React from 'react'

import Navbar from '../../components/navbar'
import Desc_Sewa from '../../components/desc_sewa'
import OurServices from '../../components/our_services'
import WhyUs from '../../components/why_us'
import Testimonial from '../../components/testimonial'
import Mulai_Sewa from '../../components/mulai_sewa'
import FAQ from '../../components/faq'
import Footer from '../../components/footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Desc_Sewa />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Mulai_Sewa />
            <FAQ />
            <Footer />
        </div>
    )
}
