import React, { useEffect, useState } from 'react';
import $ from "jquery"
import Field from '../Component/forms/Field';
import axios from 'axios';

const Checkout = () => {

  const [montant , setMontant] = useState(0);
  const [client,setClient] = useState({
    firstName : "",
    lastName : "",
    company : "",
    email : "",
    phone : "",
    paye : "",
    city : "",
    postal : "",
    password:"",
    LivraisonAdress:""
  })
  const [error,setError] = useState({
    firstName : "",
    lastName : "",
    company : "",
    email : "",
    phone : "",
    paye : "",
    city : "",
    postal : "",
    password:"",
    LivraisonAdress:""
  })
  const [user,setUser] = useState({
    email : "",
    password : ""
  })
  const [errorUser,setErrorUser] = useState({
    email : "",
    password : ""
  })
  const [shop,setShop] = useState({
    produit:"",
    client:"",
    type:""
  })
  const [produit,setProduit] = useState({})


  const handlSubmit= event =>{
    event.preventDefault();
    axios.post("http://localhost:8000/api/clients",client)
    .then(Response => console.log(Response))
  }
  const handleChange = event =>{
    const {name,value} = event.currentTarget;
    setClient({...client, [name]:value})
  }



  const calculTotal = () =>{
    const montant = localStorage.getItem("total");
    setMontant(parseFloat(montant));
  }

  const handlemss = () =>{
    $('.bihi').on('click', function(){
      $('.bihibihi').slideToggle();
      
   });
   $('.coponclick').on('click', function(){
    $('.copponhide').slideToggle();
  });
  $('.passshow').on('click', function(){
    $('.passshide').slideToggle();
  });
  $('.adressshow').on('click', function(){
    $('.adresshide').slideToggle();
  });
   
  }

 useEffect(() =>{
  calculTotal()
  $('.bihibihi').hide()
  $('.copponhide').hide();
  $('.passshide').hide();
  $('.adresshide').hide();
 })

console.log(client)
    return ( <>
    
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Paiement du produit</h2>
              <p>.............</p>
            </div>
            <div className="page_link">
              <a href="index.html">Accueil</a>
              <a href="checkout.html">Paiement</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="checkout_area section_gap">
      <div className="container">
        <div className="returning_customer">
          <div className="check_title">
            <span className="h5">Déja Inscrit : </span>
             <button 
               
               className="bihi btn-link"
                onClick={handlemss}
              >Cliquez ici pour vous connecter</button>
          </div>
          <div className="bihibihi">
          <p>
          Si vous avez déjà fait des achats chez nous, veuillez saisir vos 
          coordonnées dans les cases ci-dessous. Si vous êtes un nouveau client,
                  & veuillez passer à la section Facturation et expédition.
          </p>
          
          <form className="row contact_form" >
            <Field type="text" placeholder="email " style="col-md-6 form-group p_star"
                value={user.email} 
                name="emailUser"
                id="emailUser"
                error={errorUser.email}
                onChange={handleChange}
                />
            <Field type="text" placeholder="mot de passe " style="col-md-6 form-group p_star"
                value={user.password} 
                name="passwordUser" 
                id="passwordUser" 
                error={errorUser.password}
                onChange={handleChange}
                />
            <div className="col-md-12 form-group">
              <button type="submit" value="submit" className="btn submit_btn">
              se connecter
              </button>
            </div>
          </form>
          </div>
        </div>
        <div className="cupon_area">
          <div className="check_title">
           <span className="h5"> Avez-vous un coupon ?</span>
           
              <button className="coponclick"
              onClick={handlemss}
              >Cliquez ici pour entrer votre code</button>
            
          </div>
          <div className="copponhide">
              <input type="text" placeholder="Enter coupon code" />
              <a className="tp_btn" href="#">Appliquer le Coupon</a>
          </div>
        </div> 
        <form className="row contact_form" onSubmit={handlSubmit} >
        <div className="billing_details">
          <div className="row">
            <div className="col-lg-8">
              <h3>Détails de la facturation</h3>
             
                <Field type="text" placeholder="Prénom " style="col-md-6 form-group p_star"
                id="firstName" 
                name="firstName" 
                value={client.firstName}
                error={error.firstName}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Nom " style="col-md-6 form-group p_star"
                id="lastName"
                name="lastName"
                value={client.lastName}
                error={error.lastName}
                onChange={handleChange}
                />
                 <Field type="text" placeholder="Nom d'entreprise " style="col-md-12 form-group " place="Nom d'entreprise"
                value={client.company} 
                name="company" 
                id="company" 
                error={error.company}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Email " style="col-md-12 form-group p_star"
                value={client.email} 
                name="email"
                id="email"
                error={error.email}
                onChange={handleChange}
               />
               <Field type="number" placeholder="Numéro de téléphone " style="col-md-6 form-group p_star"
                value={client.phone} 
                name="phone" 
                id="phone" 
                error={error.phone}
                onChange={handleChange}
                />
                 <Field type="text" placeholder="paye " style="col-md-6 form-group p_star"
                value={client.paye} 
                name="paye" 
                id="paye" 
                error={error.paye}
                onChange={handleChange}
                />
                <Field type="text" placeholder="ville " style="col-md-12 form-group p_star"
                value={client.city} 
                name="city"
                id="city"
                error={error.city}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Adresse " style="col-md-12 form-group p_star"
                value={client.adress} 
                name="adress" 
                id="adress" 
                error={error.adress}
                onChange={handleChange}
                />
                <Field type="number" placeholder="code Postale " style="col-md-6 form-group p_star"
                value={client.postal} 
                name="postal" 
                id="postal" 
                error={error.postal}
                onChange={handleChange}
                />
               
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <button type="button" className="passshow" onClick={handlemss} >Créer un compte?</button>
                  </div>
                </div>
                <Field type="password" placeholder="Mot de passe " style="col-md-12 form-group passshide p_star" 
                id={client.password} 
                name="password"
                id="password"
                error={error.password}
                onChange={handleChange}
                />
                <div className="col-md-12 form-group ">
                  <div className="creat_account">
                    <h3>Les détails d'expédition</h3>
                    <button type="button" className="adressshow" onClick={handlemss} >Livrer à une adresse différente?</button>
                  </div>
                  <div className="adresshide">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Notes d'ordre"
                    ></textarea>
                  </div>
                </div>
                <input type="submit" value="envoyer" />
            
            </div>
            <div className="col-lg-4">
              <div className="order_box">
                <h2>Votre commande</h2>
                <ul className="list">
                  <li>
                    <a href="#"
                      >produit
                      <span>Total</span>
                    </a>
                  </li>
                </ul>
                <ul className="list list_2">
                  <li>
                    <a href="#"
                      >Total de Panier
                      <span>{montant.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} dirhams</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Livraison est fixé a 
                      <span>50.00 dirhams</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Total à payer
                      <span>{(montant + 50).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} dirhams</span>
                    </a>
                  </li>
                </ul>
                <div className="payment_item">
                  <div className="radion_btn">
                    <input type="radio" id="f-option5" name="selector" />
                    <label htmlFor="f-option5">Le paiement par chèque</label>
                    <div className="check"></div>
                  </div>
                  <p>
                  Effectuez un virement vers l'un des noms mentionnés puis envoyez-nous 
                  le numéro de virement pour confirmer 
                  </p>
                </div>
                <div className="payment_item active">
                  <div className="radion_btn">
                    <input type="radio" id="f-option6" name="selector" />
                    <label htmlFor="f-option6">Paiement à réception </label>
                    <div className="check"></div>
                  </div>
                  <p>
                    Payez à la livraison directement.                 
                  </p>
                </div>
                <div className="creat_account">
                  <input type="checkbox" id="f-option4" name="selector" />
                  <label htmlFor="f-option4">J'ai lu et j'accepte les </label>
                  <a href="#"> conditions &  générales *</a>
                </div>
                <a className="main_btn" href="#">Confirmer la commande</a>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </section>
    
    </> );
}
 
export default Checkout;