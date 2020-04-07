import React, { useState, useEffect } from 'react';
import produitsApi from '../services/produitsApi';


const ProductInfo = ({match}) => {
  const  id  = match.params.id;
  const [produit,setProduit] = useState(undefined);
  


  const fetchProduit= async () =>{
    try{
     const  {ref,title,content,prix,setAt,observation,avatar,images} = await produitsApi.findbyId(id)
           setProduit({ref,title,content,prix,setAt,observation,avatar,images})

    }catch(error){
        console.log(error.response);
    }
}
useEffect(() =>{
  fetchProduit();
  
},[])


  if(!produit){ return <div>loading</div>}else{  return ( <>
     <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Détails du produit</h2>
              <p>Les meilleurs types de dattes au Royaume du Maroc</p>
            </div>
            <div className="page_link">
              <a href="index.html">Accuiel</a>
              <a href="single-product.html">Produits</a>
              <a href="single-product.html">Détails du produit</a> 
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_product_img">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
              
                {produit.images.map(function(image, index) {  
                  return <li key={image.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={"  " + (index == 0 && " active ")}>
                    <img className="w-100 h-100" src={image.path} alt=""/>
                  </li>
                } )}
                </ol>
                <div className="carousel-inner">
                
                {produit.images.map(function(image, index){
                  return <div  key={image.id} className={"carousel-item  " + (index == 0 && " active")}>
                    <img
                      className="d-block w-100"
                      src={image.path}
                      alt="First slide"
                    />
                  </div>
                  })}
                  
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>{produit.title}</h3>
              <h2>{ produit.prix } Dirhams</h2>
              <ul className="list">
                <li>
                  <a className="active" href="#">
                    <span>Réference</span> : {produit.ref}</a>
                </li>
                <li>
                  <a href="#"> <span>Disponibilité</span> : En Stock</a>
                </li>
              </ul>
              <p>
               {produit.content}
              </p>
              <div className="product_count">
                <label htmlFor="qty">Quantité:</label>
                <input
                  type="number"
                  className="input-text qty"
                />
                <button
                  className="increase items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-up"></i>
                </button>
                <button
                  className="reduced items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-down"></i>
                </button>
              </div>
              <div className="card_area">
                <a className="main_btn" href="#">Ajouter au panier</a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-diamond"></i>
                </a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 



























    <section className="product_description_area">
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              >Description</a
            >
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              >Specification</a
            >
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p>
              Beryl Cook is one of Britain’s most talented and amusing artists
              .Beryl’s pictures feature women of all shapes and sizes enjoying
              themselves .Born between the two world wars, Beryl Cook eventually
              left Kendrick School in Reading at the age of 15, where she went
              to secretarial school and then into an insurance office. After
              moving to London and then Hampton, she eventually married her next
              door neighbour from Reading, John Cook. He was an officer in the
              Merchant Navy and after he left the sea in 1956, they bought a pub
              for a year before John took a job in Southern Rhodesia with a
              motor company. Beryl bought their young son a box of watercolours,
              and when showing him how to use it, she decided that she herself
              quite enjoyed painting. John subsequently bought her a child’s
              painting set for her birthday and it was with this that she
              produced her first significant work, a half-length portrait of a
              dark-skinned lady with a vacant expression and large drooping
              breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
            </p>
            <p>
              It is often frustrating to attempt to plan meals that are designed
              for one. Despite this fact, we are seeing more and more recipe
              books and Internet websites that are dedicated to the act of
              cooking for one. Divorce and the death of spouses or grown
              children leaving for college are all reasons that someone
              accustomed to cooking for more than one would suddenly need to
              learn how to adjust all the cooking practices utilized before into
              a streamlined plan of cooking that is more efficient for one
              person creating less
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <h5>Width</h5>
                    </td>
                    <td>
                      <h5>128mm</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Height</h5>
                    </td>
                    <td>
                      <h5>508mm</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Depth</h5>
                    </td>
                    <td>
                      <h5>85mm</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Weight</h5>
                    </td>
                    <td>
                      <h5>52gm</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Quality checking</h5>
                    </td>
                    <td>
                      <h5>yes</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Freshness Duration</h5>
                    </td>
                    <td>
                      <h5>03days</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>When packeting</h5>
                    </td>
                    <td>
                      <h5>Without touch of hand</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Each Box contains</h5>
                    </td>
                    <td>
                      <h5>60pcs</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    </> );
}}
 
export default ProductInfo;