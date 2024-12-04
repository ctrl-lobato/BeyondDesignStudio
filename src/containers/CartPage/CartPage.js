import React, { useEffect, useState } from 'react';

import css from './CartPage.module.css';
import { Navbar, Footer } from '../../components';
import { products, promoCodes } from '../../utils/products';

const CartPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart-beyondstudio")) || []);
    const [total, setTotal] = useState(0);
    const [promoCodeInput, setPromoCodeInput] = useState("");
    const [hasPromoCode, setHasPromoCode] = useState(false);

    console.log("cart", cart);

    const applyPromoCode = (promoCode) => {
        if (hasPromoCode) return;

        const promoCodeData = promoCodes.find(code => code.code === promoCode);
        if (promoCodeData) {
            if (promoCodeData.quantity && total >= promoCodeData.quantity) {
                setTotal(total - promoCodeData.quantity);
            }
            if (promoCodeData.percentage) {
                setTotal(total - (total * promoCodeData.percentage / 100));
            }
            setHasPromoCode(true);
        }
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart-beyondstudio", JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart
            .map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
            .filter(item => item.quantity > 0); // Remove items with 0 quantity

        setCart(updatedCart);
        localStorage.setItem("cart-beyondstudio", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const calculatedTotal = cart.reduce((acc, item) => {
            const product = products.find(product => product.id === item.id);
            return product ? acc + (product.price * item.quantity) : acc;
        }, 0);
        setTotal(calculatedTotal);
    }, [cart, hasPromoCode]);

    return (
        <div>
            <Navbar />

            <div className={css.CartPage}>
                <h1> CARRITO </h1>
            </div>

            <div className={css.CartPage_list}>
                {cart.length > 0 ? cart.map((item, index) => {
                    const product = products.find(product => product.id === item.id);

                    if (product) {
                        return (
                            <div key={index} className={css.CartPage_item}>
                                <div className={css.CartPage_item_header}>
                                    <img src={product.image} alt="Producto" className={css.CartPage_img} />
                                </div>
                                <div className={css.CartPage_item_body}>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p>Precio: ${product.price}</p>
                                </div>
                                <div className={css.CartPage_item_quantity}>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button
                                        className={css.CartPage_buttonquantity}
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        + Añadir
                                    </button>
                                    <button
                                        className={css.CartPage_buttonquantity}
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        - Quitar
                                    </button>
                                </div>
                                <div className={css.CartPage_item_total}>
                                    <p>Total: ${product.price * item.quantity}</p>
                                </div>
                            </div>
                        );
                    }
                    return null;
                }) : <p className={css.CartPage_emptycart}> El carrito está vacío </p>}
            </div>

            <div className={css.CartPage_promoCode}>
                <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                />
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        applyPromoCode(promoCodeInput);
                    }}
                >
                    Aplicar
                </button>
            </div>

            <div className={css.CartPage_total}>
                <p>Total: ${total}</p>
            </div>

            <div id="contact">
                <Footer />
            </div>
        </div>
    );
};

export default CartPage;
