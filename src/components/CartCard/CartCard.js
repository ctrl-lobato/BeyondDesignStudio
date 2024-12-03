import React, { Component } from "react";
import classNames from "classnames";

import css from "./CartCard.module.css";

class CartCard extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('CartCard mounted');
    }
        
    componentDidUpdate() {
        console.log('CartCardProducts updated');
    }
    
    componentWillUnmount() {
        console.log('CartCard unmounted');
    }

    render() {

        const { className, cartproduct } = this.props;

        return (
            <div className={classNames(css.CartCard, className)}>
                <div className={css.CartCard_header}>
                    <img src={cartproduct.image} alt="Product to buy" className={css.CartCard_img}/>
                </div>
                <div className={css.CartCard_body}>
                    <h2>{cartproduct.name}</h2>
                    <p>{cartproduct.description}</p>
                    <p>{cartproduct.price}</p>
                </div>
                <button className={css.CartCard_button}>Comprar</button>
            </div>
        )
    }

}

export default CartCard;