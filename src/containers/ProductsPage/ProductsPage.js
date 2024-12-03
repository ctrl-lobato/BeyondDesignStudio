import React from 'react';

import css from './ProductsPage.module.css';

import { ProductsCard } from '../../components';
import { Navbar } from '../../components';
import { Footer } from '../../components';
import { products } from '../../utils/products';

const ProductsPage = () => {

    return (
        <div>
            <Navbar />

            <div className={css.Available} id="products">
                <h1> PRODUCTOS DISPONIBLES </h1>
            </div> 

            <div className={css.Products}>
                    <div className={css.ProductsList}>
                    {products.map((product) => {
                        return <ProductsCard key={product.id} product={product} /> 
                    })}
                    </div>
            </div>
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
}

export default ProductsPage;
