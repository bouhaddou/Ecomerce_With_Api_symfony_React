import React, { useState, useEffect } from 'react';
import Field from '../Component/forms/Field';


const Cart = ({setCartItems}) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const fetchProduit= async () =>{
    try{
      
      const donnee = JSON.parse(localStorage.getItem("product"))
      if(donnee !== null)
      {
          setCart(donnee)
      }
           
    }catch(error){
        console.log(error.response);
    }
}

  useEffect(() => {
    fetchProduit();
  },[])

  const totalfun = () =>{
    let somme = 0
    const donnee = JSON.parse(localStorage.getItem("product"))
    if(donnee)
    {
    for(let i = 0;i < donnee.length ; i++)
    {
      somme = somme +  (donnee[i].prix * donnee[i].quantite) 
     setTotal(somme)
     localStorage.setItem("total",JSON.stringify(somme));
    }
    if(donnee.length == 0){
      
      setTotal(0)
      localStorage.setItem("total",JSON.stringify(0));
    }
  }
  }  
  useEffect(() => {
    totalfun()
  },[])
  const handleChange = event =>{
  const {name, value} = event.currentTarget;
  const donnee = JSON.parse(localStorage.getItem("product"))
  const  existid = donnee.filter(pro => pro.id === parseFloat(name))
  const index = donnee.findIndex(x => x.id === existid[0].id )
  donnee[index].quantite = value
  localStorage.removeItem("product") 
  localStorage.setItem("product",JSON.stringify(donnee))
  setCartItems(donnee)
  setCart(donnee)
  totalfun()
}

const handleRemoveItem = (event) =>{
  const  name = event.currentTarget.id;
  const dat = localStorage.getItem("product");
  const del = JSON.parse(dat);
  const aaa =  del.filter(item => item.id !== parseFloat(name))
  localStorage.removeItem("product")
  localStorage.setItem("product",JSON.stringify(aaa))
  const data2 = localStorage.getItem("product");
  setCart(JSON.parse(data2));
  setCartItems(JSON.parse(data2))
  totalfun()
  if(cart.length == 0){
    setTotal(0)
  }
 
}

if(!cart){return <div>loading</div>}else{ return ( <>
    
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Cart</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="cart.html">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Produit</th>
                  <th className="text-center" scope="col">Titre</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Montant Total</th>
                  <th className="text-center" scope="col">Supprimer</th>
                </tr>
              </thead>
              <tbody>
              {cart.length >0 && cart.map(produit =>
                <tr key={produit.id}>
                  <td>{produit.id}</td>
                  <td>
                      <div className=" imag-pro">
                        <img className=""
                          src={produit.avatar}
                          alt=""
                        />
                      </div>
                      
                  </td>
                  <td><div className=" ">
                          <p>{produit.title}</p> 
                      </div></td>
                  <td>
                    <h5 className="prix">{produit.prix.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Dirhams </h5> 
                  </td>
                  <td>
                    <div className="prix">
                    <input type="number" className="form-control" id={produit.id}  name={produit.id}  onChange={handleChange} value={produit.quantite} />
                    </div>
                  </td>
                  <td>
                    <h5>{(produit.prix * produit.quantite).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') } Dirhams</h5>
                  </td>
                  <td className="text-center">
                    <button onClick={handleRemoveItem} id={produit.id} className="btn btn-danger">X</button>
                  </td>
                </tr>
              )}
               <tr>
                  <td></td>  
                  <td></td>
                  <td></td>
                  <td>
                  <div className="checkout_btn_inner">
                    <h5>Montant de Panier</h5>
                    </div>
                  </td>
                  <td>
                      <h5>{total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Dirhams </h5>
                  </td>
                </tr>
                <tr>
                  <td></td>  
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Transport</h5>
                  </td>
                  <td>
                    <h5>on va le calculer dans la suite partie</h5>
                  </td>
                </tr>
                <tr>
                  <td></td>  
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Montant Total</h5>
                  </td>
                  <td>
                    <h5>{total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Dirhams</h5>
                  </td>
                </tr>
                <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner">
                      <a className="main_btn" href="#">Proceed to checkout</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
              
           
          </div>
        </div>
      </div>
    </section>

    </> );
}}
export default Cart;