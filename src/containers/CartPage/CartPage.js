import React from 'react';

import css from './CartPage.module.css';

import { Navbar } from '../../components';
import { Footer } from '../../components';
import { CartCard } from '../../components';
import { cart } from '../../utils/cart';

const CartPage = () => {

    return (
        <div>
            <Navbar />

            <div className={css.Cart}>
                <h1> CARRITO </h1>
            </div> 

            <div className={css.CartProducts}>
                    <div className={css.CartProductsList}>
                    {cart.map((cartproduct) => {
                        return <CartCard key={cartproduct.id} cartproduct={cartproduct} /> 
                    })}
                    </div>
            </div>

            <div id="contact">
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;