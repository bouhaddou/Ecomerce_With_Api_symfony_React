import React, { useState, useEffect } from 'react';
import produitsApi from '../services/produitsApi';
import { Link } from 'react-router-dom';

const Produits = ({setCartItems}) => {

  const [produits,setProduits] = useState({});
  const [edi,setEdi] = useState(false);

  


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

// const {value, name ,id} = event.currentTarget;
//      const data =  localStorage.getItem("produits");
//       const resu =JSON.parse(data);
    
//   }
//   localStorage.removeItem("produits")
//   localStorage.setItem("produits",JSON.stringify(resu))




const handleShop =(param) => {
const {id, avatar,title, prix} = param;
const items = JSON.parse(localStorage.getItem("produits")) 
const quantity= 1;
console.log(items)
if(Array.isArray(items)){
  for(let i=0;i< items.length;i++)
    {
      console.log(items[i].id)
     if(id == items[i].id){
      items[i].quantity = parseFloat(items[i].quantity  + 1)
      setEdi(true); 
      localStorage.removeItem("produits")
      localStorage.setItem("produits",JSON.stringify(items))
      setCartItems(items)
      break
    }
    
  }
  if(edi == true){
  items.push({id, avatar,title, prix,quantity})
  localStorage.setItem("produits",JSON.stringify(items))
  setCartItems(items)
  setEdi(false)
 
  }
  
}else{
  localStorage.removeItem("produits")
  localStorage.setItem("produits",JSON.stringify([{id, avatar, title, prix,quantity}]))
  setCartItems(items)
} 
}



   if(!produits){
      return <div>loading</div>}else{ return ( <>
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
          {produits.length >0 && produits.map(produit =>
            <div key={produit.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src={produit.avatar}  />
                  <div className="p_icon">
                      <Link  to={"/ProductInfo/" + produit.id } >
                        <i className="ti-eye"></i>
                      </Link>
                      <a href="#"> <i className="ti-heart"></i></a>
                      <a 
                      onClick={() => handleShop(produit)}
                      > <i className="ti-shopping-cart"></i> </a>
                  </div>
                </div>
                <div className="product-btm">
                  <Link className="d-block text-center " to={"/ProductInfo/" + produit.id }>
                  <h4 className="text-info">{produit.title.slice(0,22)}</h4>
                  </Link>
                  <div className="mt-3 text-center">
                    <h6 className="mr-4 text-center text-danger">{produit.prix} Dirhams</h6>
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
}
 
export default Produits;