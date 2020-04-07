import React, { useState, useEffect } from 'react';
import axios from 'axios';
import produitsApi from '../services/produitsApi';
import { Link } from 'react-router-dom';

const Produits = () => {


  const [produits,setProduits] = useState([]);
  const [cart, setCart] = useState([])
  const [add, setAdd] = useState(false)
  


  const fetchProduits = async () =>{
    try{
     const data = await  produitsApi.findAll();
        setProduits(data);
   }catch(error){
       console.log(error.response)
   }
}

useEffect(() => {
  fetchProduits();
 
}, []);

const handleShop =(id) =>{
  setAdd(true);
  window.localStorage.setItem("id", id);  
  let itemsArray = []

  window.localStorage.setItem('items', JSON.stringify(id))
}


console.log(cart)
    return ( <>
  <section className="inspired_product_area section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span className="text-success"> Produits</span></h2>
            <p>Les meilleurs types de dattes au Royaume du Maroc</p>
          </div>
        </div>
      </div>

      <div className="row">
          {produits.map(produit =>
            <div key={produit.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src={produit.avatar} alt={produit.title} />
                  <div className="p_icon">
                      <Link className="d-block text-center " to={"/ProductInfo/" + produit.id }>
                        <i className="ti-eye"></i>
                      </Link>
                      <a href="#"> <i className="ti-heart"></i></a>
                      <button 
                      onClick={() => handleShop(produit.id)}
                      > <i className="ti-shopping-cart"></i> </button>
                      
                  </div>
                </div>
                <div className="product-btm">
                  <Link className="d-block text-center " to={"/ProductInfo/" + produit.id }>
                  <h4 className="text-info">{produit.title.slice(0,22)}</h4>
                  </Link>
                  <div className="mt-3 text-center">
                    <h6 className="mr-4 text-center text-danger">{produit.prix.toFixed(2)} Dirhams</h6>
                  </div>
                </div>
              </div>
            </div>
           )}
      </div>
    </div>
  </section>
    
    </> );
}
 
export default Produits;