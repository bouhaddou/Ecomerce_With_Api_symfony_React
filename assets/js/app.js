import React from 'react';
import ReactDOM from "react-dom"
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import '../css/bootstrap.css'
import '../css/linericon/style.css'
import '../css/font-awesome.min.css'
import '../css/themify-icons.css'
import '../css/flaticon.css'
import '../css/owl-carousel/owl.carousel.min.css'
import '../css/lightbox/simpleLightbox.css'
import '../css/nice-select/css/nice-select.css'
import '../css/animate-css/animate.css'
import '../css/jquery-ui/jquery-ui.css'
import '../css/app.css';
import '../css/style.css'
import '../css/responsive.css';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import ProductInfo from './pages/ProductInfo';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import Contact from './pages/contact';
import BlogPage from './pages/BlogPage';



const App = () => {
    return ( <>
        
        <HashRouter>
                <Navbar />
                <Route path="/shop" component={Shop} />
                <Route path="/ProductInfo/:id" component={ProductInfo} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/" component={HomePage} />
            <Footer />
        </HashRouter>
    </> );
}
 
const rootElement = document.querySelector('#App');
ReactDOM.render(<App/>,rootElement);