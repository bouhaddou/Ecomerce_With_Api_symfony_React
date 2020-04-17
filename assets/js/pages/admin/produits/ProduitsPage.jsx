import React, { useState, useEffect } from 'react';
import produitsApi from '../../../services/produitsApi';
import { Link } from 'react-router-dom';
import Pagination from '../../../Component/Pagination';


const ProduitsPage = () => {
    const [Produits, setProduits] = useState([])
    const [currentPage, setCurrentPage]= useState(1);
    const fetchProduits = async () =>{
        try{
         const data = await  produitsApi.findAll();
             setProduits(data);
       }catch(error){
           console.log(error.response)
       }
    }
    
    
    
    useEffect(() => {
      fetchProduits();
    }, []);
    const handleChange = (id) =>{
        setCurrentPage(id);
    }
    const itemsPerPage = 6 ;
    const PaginationProduits = Pagination.getData(currentPage,itemsPerPage,Produits);


   if(!Produits){ return <div>chargement</div>}else{ return ( <>
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Table de bord</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Accueil</a></li>
              <li className="breadcrumb-item active">Table de bord</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
     <h2 className="mt-2 text-center">Liste des Produits</h2>
    <div className="container">
        <div className="card mt-3">
              <div className="card-header">
                <h3 className="card-title text-danger">Produits ( {Produits.length} produits)</h3>
              </div>
              <div className="card-body p-0">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th >ref</th>
                      <th>Titre</th>
                      <th>Image</th>
                      <th >Content</th>
                      <th >action</th>
                    </tr>
                  </thead>
                  <tbody>
                {PaginationProduits.map(produit => 
                    <tr key={produit.id}>
                      <td>{produit.ref}</td>
                      <td>{produit.title.slice(0,10)}</td>
                      <td className="">
                        <img className=" img-size-50  " src={produit.avatar} alt={produit.ref} /> 
                      </td>
                      <td>{produit.content.slice(0,15)}</td>
                      <td>
                          <Link className="btn text-primary" to=""><i className="fas fa-eye"></i></Link>
                          <Link className="btn text-success" to=""><i className="fas fa-edit"></i></Link>
                      </td>
                    </tr>
                )}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
           
            <div className="d-flex justify-content-center">
            <Pagination 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                handleChange={handleChange} 
                length={Produits.length} />
            </div>
    </> );
}
}
 
export default ProduitsPage;