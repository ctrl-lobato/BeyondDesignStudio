import React, { Component } from "react";
import classNames from "classnames";

import css from "./CategoryCard.module.css";

class CategoryCard extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('CategoryCard mounted');
    }
        
    componentDidUpdate() {
        console.log('CategoryCard updated');
    }
    
    componentWillUnmount() {
        console.log('CategoryCard unmounted');
    }

    render() {

        const { className, category } = this.props;

        return (
            <div className={classNames(css.CategoryCard, className)}>
                <div className={css.CategoryCard_header}>
                    <img src={category.image} alt="Product example" className={css.CategoryCard_img}/>
                </div>
                <div className={css.CategoryCard_body}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <p>{category.price}</p>
                </div>
                <button className={css.CategoryCard_button}>Ver más</button>
            </div>
        )
    }

}

export default CategoryCard;