import React,{ useState, useEffect} from 'react';
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
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import ProductInfo from './pages/ProductInfo';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import Contact from './pages/contact';
import BlogPage from './pages/BlogPage';
import Produits from './pages/produits';



const App = () => {
    const [cartItems, setCartItems] = useState([])

    const fetchProduits =  () =>{
        const items = JSON.parse(localStorage.getItem("produits")) 
        setCartItems(items)
    }
    
    useEffect(() => {
        fetchProduits();
    }, []);
   
   


    return ( <>
        <HashRouter>
                <Navbar cartItems={cartItems} />
                <Switch>
                <Route  path="/produits" render={props=>{
                   return <Produits setCartItems={setCartItems} {...props} /> 
                }} />
                <Route path="/ProductInfo/:id" render={props=>{
                   return <ProductInfo setCartItems={setCartItems} {...props} /> 
                }} />
                <Route path="/cart" render={props=>{
                   return <Cart setCartItems={setCartItems} {...props} /> 
                }} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact} />
                <Route path="/blogPage" component={BlogPage} />
                <Route path="/" render={props=>{
                   return <HomePage setCartItems={setCartItems} {...props} /> 
                }} />
                </Switch>
            <Footer />
        </HashRouter>
    </> );
}
 
const rootElement = document.querySelector('#App');
ReactDOM.render(<App/>,rootElement);