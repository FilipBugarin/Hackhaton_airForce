import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title='AirForce' subtitle='Fly with us'>
                    <Link to="/Reservations" className='btn-primary'>
                        Reserve your ticket today
                    </Link>
                </Banner>
            </Hero>
            <Services />
        </>
    )
}

export default Home
