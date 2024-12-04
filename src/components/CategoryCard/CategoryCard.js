import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import css from "./CategoryCard.module.css";

class CategoryCard extends Component {
    render() {
        const { className, category } = this.props;

        return (
            <div className={classNames(css.CategoryCard, className)}>
                <div className={css.CategoryCard_header}>
                    <img
                        src={category.image}
                        alt="Product example"
                        className={css.CategoryCard_img}
                    />
                </div>
                <div className={css.CategoryCard_body}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <p>{category.price}</p>
                </div>
                <Link to="/products" className={css.CategoryCard_button}>
                    Ver disponibles
                </Link>
            </div>
        );
    }
}

export default CategoryCard;
