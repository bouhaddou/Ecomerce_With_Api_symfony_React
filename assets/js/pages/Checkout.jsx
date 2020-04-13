import React, { useEffect, useState } from 'react';
import $ from "jquery"

const Checkout = () => {

  const [montant , setMontant] = useState(0);
  const [client,setClient] = useState({})
  const [shop,setShop] = useState({})
  const [produit,setProduit] = useState({})


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
   
  }

 useEffect(() =>{
  calculTotal()
  $('.bihibihi').hide()
  $('.copponhide').hide();
  $('.passshide').hide();
 })


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
              >Click here to login</button>
          </div>
          <div className="bihibihi">
          <p>
          Si vous avez déjà fait des achats chez nous, veuillez saisir vos 
          coordonnées dans les cases ci-dessous. Si vous êtes un nouveau client,
                  & veuillez passer à la section Facturation et expédition.
          </p>
          
          <form
            className="row contact_form"
            action="#"
            method="post"
        
          >
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              <span
                className="placeholder"
                data-placeholder="Username or Email"
              ></span>
            </div>
            <div className="col-md-6 form-group p_star">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
               
              />
              <span className="placeholder" data-placeholder="Password"></span>
            </div>
            <div className="col-md-12 form-group">
              <button type="submit" value="submit" className="btn submit_btn">
              Envoyer le message
              </button>
              <div className="creat_account">
                <input type="checkbox" id="f-option" name="selector" />
                <label htmlFor="f-option">Remember me</label>
              </div>
              <a className="lost_pass" href="#">Lost your password?</a>
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
        <div className="billing_details">
          <div className="row">
            <div className="col-lg-8">
              <h3>Détails de la facturation</h3>
              <form
                className="row contact_form"
                action="#"
                method="post"
              >
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="first"
                    name="name"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Prénom "
                  ></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="last"
                    name="name"
                  />
                  <span className="placeholder" data-placeholder="Nom"></span>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="Nom d'entreprise"
                  />
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    name="Email"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Email"
                  ></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Numéro de Téléphone"
                  ></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="compemailany"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="pays"
                  ></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="add1"
                    name="add1"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Ville "
                  ></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="add2"
                    name="add2"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Adresse de la rue"
                  ></span>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    placeholder="Code Postal"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <input type="checkbox" id="f-option2" name="selector" className="passshow" onClick={handlemss} />
                    <label htmlFor="f-option2">Créer un compte?</label>
                  </div>
                </div>
                <div className="col-md-12 form-group passshide">
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <h3>Les détails d'expédition</h3>
                    <input type="checkbox" id="f-option3" name="selector" />
                    <label htmlFor="f-option3">Livrer à une adresse différente?</label>
                  </div>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Notes d'ordre"
                  ></textarea>
                </div>
              </form>
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
                <a className="main_btn" href="#">Proceed to Paypal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </> );
}
 
export default Checkout;