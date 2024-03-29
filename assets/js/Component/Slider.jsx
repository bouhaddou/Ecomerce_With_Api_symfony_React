import React from 'react';


const Slider = () => {
    return ( <>
<div className="colorback">
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/product/tomor2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/product/tomor.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/product/newsbg.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  <section className="feature-area section_gap_bottom_custom">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-money"></i>
              <h3>Garantie de remboursement</h3>
            </a>
            <p>...</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-truck"></i>
              <h3>Livraison à domicile</h3>
            </a>
            <p>...</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-support"></i>
              <h3>Contacte</h3>
            </a>
            <p>7/24</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  </div> 
    </> );
}
 
export default Slider;