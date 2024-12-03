import React, { Component } from "react";
import css from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {

  render() {

    return (

      <nav className={css.Navbar}>
        <div className={css.Container}>
          <img src="/logobeyond.png" alt="Logo página" className={css.NavLogo} />

          <ul className={css.Navlinks}>
            <li><a href="/home">INICIO</a></li>
            <li><a href="/about">SOBRE NOSOTROS</a></li>
            <li><a href="/products">PRODUCTOS</a></li>
            <li><a href="#contact">CONTACTO</a></li>
          </ul>

          <form className={css.Search}>
            <input
              type="text"
              placeholder="Buscar"
              className={css.SearchInput}
            />
            <button type="submit" className={css.SearchButton}>Buscar</button>
          </form>

          <button
            onClick={() => (window.location.href ="/cart")}
            className={css.CartButton}
          >
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
