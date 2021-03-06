import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/bootstrap.css'
import '../../css/linericon/style.css'
import '../../css/font-awesome.min.css'
import '../../css/themify-icons.css'
import '../../css/flaticon.css'
import '../../css/owl-carousel/owl.carousel.min.css'
import '../../css/lightbox/simpleLightbox.css'
import '../../css/nice-select/css/nice-select.css'
import '../../css/animate-css/animate.css'
import '../../css/jquery-ui/jquery-ui.css'
import '../../css/app.css';
import '../../css/style.css'
import '../../css/responsive.css';

const Navbar = ({cartNav,setCartNav}) => {

 return ( 
    <>
  <header className="header_area">
    <div className="top_menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="float-left">
              <p><i className="fas fa-phone"></i> +212 618 911 741</p>
              <p><i className="fas fa-message"></i>email: dattesaljinan@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="float-right">
              <ul className="right_side">
                <li>
                  <a href="cart.html">
                    gift card
                  </a>
                </li>
                <li>
                  <a href="tracking.html">
                    track order
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main_menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light w-100">
          <Link className="navbar-brand logo_h" to="/">
            {/* <img className="logo" src="img/logo.png" alt="" /> */} dattes Aljinan
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
            <div className="row w-100 mr-0">
              <div className="col-lg-7 pr-0">
                <ul className="nav navbar-nav center_nav pull-right">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Accueil</Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Produits</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/produits">Produits</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                      <Link className="nav-link" to="/blogPage">Blog </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="tracking.html">Tracking</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="elements.html">Elements</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">
                  <li className="nav-item submenu dropdown">
                    <a  className="nav-link dropdown-toggle icons text-danger" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false"> 
                      
                      Panier 
                      <span className=""> {cartNav.length > 0 && cartNav.length} </span> Produits 
                      <i className="ti-shopping-cart fa-3x text-danger"></i></a>
                   
                    <ul className="dropdown-menu "> <Link to="/cart">
                      <table className="table table-hover">
                        <thead>
                          
                        </thead>
                        <tbody>
                            {cartNav.length > 0 && cartNav.map(produit =>  
                              <tr key={produit.id}>
                                  <td>{produit.title.slice(0,7)}</td>
                                  <td>
                                    <img className="w-100 h-15 rounded" src={produit.avatar} />
                                  </td>
                                  <td>{produit.prix.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td>
                              </tr> 
                            
                             )}
                        </tbody>
                     </table>  </Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
 
    </>
 );
}

export default Navbar;