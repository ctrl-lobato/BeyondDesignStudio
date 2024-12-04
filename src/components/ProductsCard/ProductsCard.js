import React, { Component } from "react";
import classNames from "classnames";

import css from "./ProductsCard.module.css";

class ProductsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };

    render() {
        const { className, product } = this.props;
        const { isModalOpen } = this.state;

        return (
            <div className={classNames(css.ProductsCard, className)}>
                <div className={css.ProductsCard_header}>
                    <img src={product.image} alt="Product example" className={css.ProductsCard_img} />
                </div>
                <div className={css.ProductsCard_body}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p> ${product.price}</p>
                </div>

                <button
                    type={"button"}
                    className={css.ProductsCard_button}
                    onClick={(e) => {
                        e.preventDefault();
                        const currentCart = JSON.parse(localStorage.getItem("cart-beyondstudio")) || [];

                        let productTemp = currentCart.find((item) => item.id === product.id);

                        if (productTemp) {
                            productTemp.quantity += 1;
                        } else {
                            currentCart.push({ id: product.id, quantity: 1 });
                        }

                        localStorage.setItem("cart-beyondstudio", JSON.stringify(currentCart));
                    }}
                >
                    Agregar a carrito
                </button>

                <button
                    type={"button"}
                    className={css.ProductsCard_showmore}
                    onClick={this.toggleModal}
                >
                    Mostrar más
                </button>

                {isModalOpen && (
                    <div className={css.ModalOverlay}>
                        <div className={css.ModalContent}>
                            <h2>Más información y características</h2>
                            <p>Más información y características sobre el producto elegido.</p>
                            <button
                                className={css.ModalCloseButton}
                                onClick={this.toggleModal}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
        );
    }
}

export default ProductsCard;
