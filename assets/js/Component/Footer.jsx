import React from 'react';

const Footer = () => {
    return ( <>
     <footer className="footer-area section_gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Top Products</h4>
          <ul>
            <li><a href="#">Managed Website</a></li>
            <li><a href="#">Manage Reputation</a></li>
            <li><a href="#">Power Tools</a></li>
            <li><a href="#">Marketing Service</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Brand Assets</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Features</h4>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Brand Assets</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Experts</a></li>
            <li><a href="#">Agencies</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 single-footer-widget">
          <h4>Newsletter</h4>
          <p>You can trust us. we only send promo offers,</p>
          <div className="form-wrap" id="mc_embed_signup">
            <form target="" action=""
              method="get" className="form-inline">
              <input className="form-control" name="EMAIL" placeholder="Your Email Address" 
                 required="" type="email" />
              <button className="click-btn btn btn-default">Subscribe</button>
              <div className="info"></div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom row align-items-center">
        <p className="footer-text m-0 col-lg-8 col-md-12">
Copyright &copy;
<script>document.write(new Date().getFullYear());
    </script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
        <div className="col-lg-4 col-md-12 footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-behance"></i></a>
        </div>
      </div>
    </div>
  </footer>

 
    
    </> );
}
 
export default Footer;