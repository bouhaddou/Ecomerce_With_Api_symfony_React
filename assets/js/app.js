import React,{ useState, useEffect} from 'react';
import ReactDOM from "react-dom"
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';







import { HashRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductInfo from './pages/ProductInfo';
import LoginPage from './pages/LoginPage';
import LoginApi from "./services/LoginApi";
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import Contact from './pages/contact';
import BlogPage from './pages/BlogPage';
import Produits from './pages/produits';
import dashboardPage from './pages/admin/dashboardPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from './Component/AdminNavbar';
import AdminAside from './Component/AdminAside';
import ProduitsPage from './pages/admin/produits/ProduitsPage';

LoginApi.setup();
const App = () => {
    const [cartNav, setCartNav] = useState([])

    const fetchProduits =  () =>{
         
        const items = JSON.parse(localStorage.getItem("product")) 
        setCartNav(items)
    }
    
    useEffect(() => {
        fetchProduits();
    }, []);
    const [isAuthenticated, setIsAuthenticated] = useState(LoginApi.isAuthenticated)  ;
    const PrivatRoute = ({path, isAuthenticated, component}) =>{
        return isAuthenticated ? 
           <Route path={path} isAuthenticated={isAuthenticated} component={component} /> 
           : 
           <Redirect to="/login" />
       }   


    return ( <>
        <HashRouter>
            
            {!isAuthenticated && <Navbar cartNav={cartNav} setCartNav={setCartNav} />}
            
            {isAuthenticated && <AdminNavbar />}
            {isAuthenticated && <AdminAside />}
            <Switch>
              
                {!isAuthenticated && <Route path="/login"  render={props => (  <LoginPage  onLogin={setIsAuthenticated} {...props} /> )} />}
                {!isAuthenticated && <Route  path="/produits" render={props=>{return <Produits setCartNav={setCartNav} {...props} /> }} />}
                {!isAuthenticated && <Route path="/ProductInfo/:id" render={props=> { return <ProductInfo setCartNav={setCartNav} {...props} /> }} />}
                {!isAuthenticated &&<Route path="/cart" render={props=>{ return <Cart setCartNav={setCartNav} {...props} />  }} /> }
                {!isAuthenticated && <Route path="/checkout" component={Checkout} />}
                {!isAuthenticated && <Route path="/contact" component={Contact} />}
                {!isAuthenticated && <Route path="/blogPage" component={BlogPage} /> }
                {!isAuthenticated && <Route path="/" render={props=>{return <HomePage setCartNav={setCartNav} {...props} /> }} /> }
                <div className="content-wrapper">
                        <PrivatRoute path="/produitsAdmin" component={ProduitsPage} isAuthenticated={isAuthenticated}  />
                        {/* <PrivatRoute path="/" component={dashboardPage} isAuthenticated={isAuthenticated}  /> */}
                </div>
            </Switch>
            {!isAuthenticated &&<Footer />}
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        </HashRouter>
    </> );
}
 
const rootElement = document.querySelector('#App');
ReactDOM.render(<App/>,rootElement);