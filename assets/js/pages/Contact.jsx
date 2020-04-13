import React from 'react';


const Contact = () => {
    return ( <>
    
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center" >
            <div className="mb-3 mb-md-0">
              <h2> contactez Nous</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Accueil</a>
              <a href="contact.html"> contacte</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section className="section_gap">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        <div id="map" ></div>
        {/* <script>
          function initMap() {
            var uluru = {lat: -25.363, lng: 131.044};
            var grayStyles = [
              {
                featureType: "all",
                stylers: [
                  { saturation: -90 },
                  { lightness: 50 }
                ]
              },
              {elementType: 'labels.text.fill', stylers: [{color: '#A3A3A3'}]}
            ];
            var map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -31.197, lng: 150.744},
              zoom: 9,
              styles: grayStyles,
              scrollwheel:  false
            });
          }
          
        </script> */}
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap"></script> */}
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Entrer en contact</h2>
        </div>
        <div className="col-lg-8 mb-4 mb-lg-0">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Tapez votre Message"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Enter votre Nom"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Enter votre addresse  email "/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" placeholder="tapez un Objet"/>
                </div>
              </div>
            </div>
            <div className="form-group mt-lg-3">
              <button type="submit" className="main_btn">Envoyer le message</button>
            </div>
          </form>


        </div>

        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Maroc , Ouarzazate</h3>
              <p>Ait kdif, N°  91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3><a href="tel:454545654">+212 618 911 741</a></h3>
              <p>Du lundi au vendredi de 9h à 18h</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3><a href="mailto:support@colorlib.com"> DATTESALJINAN@GMAIL.COM</a></h3>
              <p>Envoyez-nous votre demande !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </> );
}
 
export default Contact;