import React from 'react';

import css from './HomePageBDS.module.css';

import { CategoryCard } from '../../components';
import { Navbar } from '../../components';
import { Footer } from '../../components';
import { categories } from '../../utils/categories';

const HomePageBDS = () => {

    return (
        <div>
            <Navbar />

            <div className={css.Header} id="home">
                <h1> BEYOND DESIGN STUDIO </h1>
                <p><i> Pasión por el arte y creaciones a la medida </i></p>
            </div> 

            <div className={css.Services} id="services">
                <h1> ¿QUÉ OFRECEMOS? </h1>
                    <div className={css.CategoriesList}>
                    {categories.map((category) => {
                        return <CategoryCard key={category.id} category={category} /> 
                    })}
                    </div>
            </div>
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
}

export default HomePageBDS;
