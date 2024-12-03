import React from 'react';

import css from './AboutUsPage.module.css';

import { Navbar } from '../../components';
import { Footer } from '../../components';

const AboutUsPage = () => {
    return (
        <div>
            <Navbar />
        <div className={css.AboutUs} id="about">
            <div className={css.AboutUsInfo}>
                <h1> SOBRE NOSOTROS </h1>
                <p> En <b><i> Beyond Design Studio </i></b>, la creatividad se combina con la personalización. Somos un equipo de apasionados diseñadores y animadores dedicados a darle vida a tus ideas a través de creaciones digitales únicas. Ya sea que estés buscando avatares 3D llamativos, stickers personalizadas, logos animados, GIF's extravagantes o ilustraciones impresionantes, lo tenemos cubierto.</p>
            </div>
            <div className={css.AboutImg}>
            </div>
        </div>
        <div className={css.Mision}>
            <div className={css.MisionImg}>
            </div>
            <div className={css.MisionInfo}>
                <h1> NUESTRA MISIÓN </h1>
                <p> Nuestra misión es combinar arte y tecnología para crear productos personalizados que se destaquen. Cada creación está diseñada para reflejar tu personalidad, marca o visión. Con experiencia en diseño gráfico y animación, nuestro objetivo es ofrecer diseños imaginativos de alta calidad que inspiren e impresionen.</p>
            </div>
        </div>
        
        <div id="contact">
            <Footer />
        </div>

        </div>
    );
}

export default AboutUsPage;
