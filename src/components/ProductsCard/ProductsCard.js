import React, { Component } from "react";
import classNames from "classnames";

import css from "./ProductsCard.module.css";

class ProductsCard extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('ProductsCard mounted');
    }
        
    componentDidUpdate() {
        console.log('ProductsCardProducts updated');
    }
    
    componentWillUnmount() {
        console.log('ProductsCard unmounted');
    }

    render() {

        const { className, product } = this.props;

        return (
            <div className={classNames(css.ProductsCard, className)}>
                <div className={css.ProductsCard_header}>
                    <img src={product.image} alt="Product example" className={css.ProductsCard_img}/>
                </div>
                <div className={css.ProductsCard_body}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
                <button className={css.ProductsCard_button}>Agregar a carrito</button>
            </div>
        )
    }

}

export default ProductsCard;