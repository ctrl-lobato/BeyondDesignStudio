import React, { Component } from "react";

import css from "./Footer.module.css";

class Footer extends Component {

    render() {

        return (
            <footer className={css.Footer}>
                <div>
                    <h3> Instagram: @ beyondstudio </h3>
                    <h3> Facebook: @ Beyond Design Studio </h3>
                    <h3> Tik Tok: @ Beyond_DesignStudio </h3>
                </div>
                <p>&copy; {new Date().getFullYear()} Beyond Design Studio. Todos los derechos reservados.</p>
            </footer>
        )
    }
}

export default Footer;