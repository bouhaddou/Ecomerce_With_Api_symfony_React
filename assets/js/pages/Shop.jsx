import React from 'react';
import Produits from './produits';
import { Link } from 'react-router-dom';


const Shop = (props) => {
    return ( <>

    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center">
            <div className="mb-1 mb-md-0">
              <h2>Nouveaux produits</h2>
              <p></p>
            </div>
            <div className="page_link">
              <Link to="/">Accuiel</Link>
              <a className="active text-success">produits</a>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section className="cat_product_area section_gap">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-9">
                        <Produits setCartItems={props.setCartItems} />

                    </div>
                    <div className="col-lg-3">
                        <div className="left_sidebar_area">
                            <aside className="left_widgets p_filter_widgets">
                                <div className="l_w_title">
                                <h3>Product Brand</h3>
                                </div>
                                <div className="widgets_inner">
                                <ul className="list">
                                    <li>
                                    <a href="#">Apple</a>
                                    </li>
                                    <li>
                                    <a href="#">Asus</a>
                                    </li>
                                    <li className="active">
                                    <a href="#">Gionee</a>
                                    </li>
                                    <li>
                                    <a href="#">Micromax</a>
                                    </li>
                                    <li>
                                    <a href="#">Samsung</a>
                                    </li>
                                </ul>
                                </div>
                            </aside>
                            <aside className="left_widgets p_filter_widgets">
                                <div className="l_w_title">
                                <h3>Color Filter</h3>
                                </div>
                                <div className="widgets_inner">
                                    <ul className="list">
                                        <li>
                                            <a href="#">Black</a>
                                        </li>
                                        <li>
                                            <a href="#">Black Leather</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Black with red</a>
                                        </li>
                                        <li>
                                            <a href="#">Gold</a>
                                        </li>
                                        <li>
                                            <a href="#">Spacegrey</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>

                            <aside className="left_widgets p_filter_widgets">
                                <div className="l_w_title">
                                <h3>Price Filter</h3>
                                </div>
                                <div className="widgets_inner">
                                <div className="range_item">
                                    <div id="slider-range"></div>
                                    <div className="">
                                        <label htmlFor="amount">Price : </label>
                                        <input type="text" id="amount" readOnly />
                                    </div>
                                </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </> );
}
 
export default Shop;