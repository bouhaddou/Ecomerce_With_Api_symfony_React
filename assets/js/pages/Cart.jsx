import React, { useState, useEffect } from 'react';
import Field from '../Component/forms/Field';


const Cart = ({setCartItems}) => {


  const [cart, setCart] = useState({
    id:"", 
    avatar:"",
    title:"", 
    prix:"",
    quantity:""
  });

  useEffect(() => {
   const data =  localStorage.getItem("produits");
   if(Array.isArray(JSON.parse(data))){
    setCart(JSON.parse(data));
    setCartItems(JSON.parse(data))
   }
  },[])

  const handleChange = event =>{
    const {value, name ,id} = event.currentTarget;
     const data =  localStorage.getItem("produits");
      const resu =JSON.parse(data);
    for(let i=0;i<resu.length;i++)
    {
     if(id == resu[i].id){
     resu[i].quantity = parseFloat(value)
    }
  }
  localStorage.removeItem("produits")
  localStorage.setItem("produits",JSON.stringify(resu))
  const data2 = localStorage.getItem("produits");
  setCart(JSON.parse(data2));
  setCartItems(JSON.parse(data))
}

const handleRemoveItem = (event) =>{


  const  name = event.currentTarget.id;
  const dat = localStorage.getItem("produits");
  const del = JSON.parse(dat);
  const aaa =  del.filter(item => item.id !== parseFloat(name))
  localStorage.removeItem("produits")
  localStorage.setItem("produits",JSON.stringify(aaa))
  const data2 = localStorage.getItem("produits");
  setCart(JSON.parse(data2));
  setCartItems(JSON.parse(data2))
 
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
                  <th scope="col">Produit</th>
                  <th scope="col">titre</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Montant Total</th>
                  <th scope="col">Supprimer</th>
                </tr>
              </thead>
              <tbody>
              {cart.length >0 && cart.map(produit =>
                <tr key={produit.id}>
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
                    <h5 className="prix">{produit.prix} Dirhams </h5> 
                  </td>
                  <td>
                    <div className="prix">
                    <input type="number" className="form-control"     id={produit.id}  name="quantity"  onChange={handleChange} value={produit.quantity} />
                    </div>
                  </td>
                  <td>
                    <h5>720.00 Dirhams</h5>
                  </td>
                  <td>
                    <button onClick={handleRemoveItem} id={produit.id} className="btn btn-danger">X</button>
                  </td>
                </tr>
              )}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>
                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>
                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>
                          <a href="#">Flat Rate: $5.00</a>
                        </li>
                        <li>
                          <a href="#">Free Shipping</a>
                        </li>
                        <li>
                          <a href="#">Flat Rate: $10.00</a>
                        </li>
                        <li className="active">
                          <a href="#">Local Delivery: $2.00</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner">
                      <a className="gray_btn" href="#">Continue Shopping</a>
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