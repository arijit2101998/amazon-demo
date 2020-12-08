import React from 'react'

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>The lean startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>20.00</strong>
                </p>
                <div className='product__rating'>
                    <p>*</p>
                </div>
            </div>
            <img 
                src='https://images.pexels.com/photos/2228582/pexels-photo-2228582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                alt=''
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
