import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='https://images.pexels.com/photos/4755029/pexels-photo-4755029.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                    alt=''
                />

                <div className='home__row'>
                    <Product />
                    {/* Product */}
                </div>

                <div className='home__row'>
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className='home__row'>
                    {/* Product */}
                </div>
                
            </div>
        </div>
    )
}

export default Home
