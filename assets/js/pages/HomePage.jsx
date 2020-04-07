import React from 'react';
import Produits from './produits';
import ProductArea from './ProductArea';
import ProductAreaPro from './ProductAreaPro';
import BlogPage from './BlogPage';
import Slider from '../Component/Slider';


const HomePage = (props) => {
    return ( <>
            <Slider />
            <Produits />
            <ProductArea />
            <ProductAreaPro />
            <BlogPage />
    </> );
}
 
export default HomePage;