import React, { Component } from "react";

import css from "./Footer.module.css";

class Footer extends Component {

    render() {

        return (
            <footer className={css.Footer}>
                <div className={css.FooterPhrase}>
                    <h1> ¿QUIERES TU PROPIO DISEÑO? </h1>
                    <h3> ¡Contáctanos! </h3>  
                </div>
                <div className={css.FooterContact}>
                    <h3> Instagram: @ beyondstudio </h3>
                    <h3> Facebook: @ Beyond Design Studio </h3>
                    <h3> Tik Tok: @ Beyond_DesignStudio </h3>
                    <br/><br/><br/>
                    <p>&copy; {new Date().getFullYear()} Beyond Design Studio. Todos los derechos reservados.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;