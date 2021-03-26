import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Error = () => {
    return (
        <div>
            <Hero hero='errorHero'>
                <Banner title='[404]' subtitle='site not found'>
                    <Link to='/' className='btn-primary'>
                        Home Page
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error
