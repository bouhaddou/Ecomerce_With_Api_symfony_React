import React from 'react';
import { Link } from 'react-router-dom';



const AdminAside = () => {
    return ( <>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
   
    <a href="index3.html" className="brand-link">
      <img  src="" alt="ertert" className="brand-image  elevation-3"
          />
      <span className="brand-text font-weight-light">Dar AL Karam</span>
    </a>

 
    <div className="sidebar">
     
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
        </div>
        <div className="info">
          <a href="#" className="d-block">Admin </a>
        </div>
      </div>

  
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Table de Bord
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview menu-open mt-5 mb-2">
            <a href="#" className="nav-link active bg-danger">
              <i className="nav-icon fas fa-user"></i>
              <p>
                Gestion des Utilisateurs
              </p>
            </a>
          </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-danger"></i>
                <p className="text">Liste des Utilisateurs</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-warning"></i>
                <p>Ajouter un utilsateur</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-warning"></i>
                <p>Ajouter un Role</p>
              </a>
            </li>
          <li className="nav-item has-treeview menu-open mt-3 mb-2">
            <a href="#" className="nav-link active bg-info">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Gestion des Produits
              </p>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">
              <i className="fas fa-circle nav-icon"></i>
              <p>Liste des Produits</p>
            </Link>
          </li>
              <li className="nav-item">
                <Link to="/product/new" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                   <p>Ajouter un Produits</p>
                </Link>
            </li>
            <li className="nav-item has-treeview menu-open mt-3 mb-2">
            <a href="#" className="nav-link active bg-success">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Orphelins
              </p>
            </a>
          </li>
            <li className="nav-item">
              <a href="{{ path('orphelin_index') }}" className="nav-link">
                <i className="nav-icon far fa-circle text-danger"></i>
                <p className="text">Liste des Orphelins</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="{{ path('orphelin_new')}}" className="nav-link">
                <i className="nav-icon far fa-circle text-warning"></i>
                <p>Ajouter un Orphelin</p>
              </a>
            </li>
            <li className="nav-item has-treeview menu-open mt-3 mb-3">
            <a href="#" className="nav-link active bg-warning">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Annonces de Site
              </p>
            </a>
          </li>
            <li className="nav-item">
              <a href="{{ path('post_index')}}" className="nav-link">
                <i className="fas fa-circle nav-icon"></i>
                <p>Liste des Annonces</p>
              </a>
            </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-circle nav-icon"></i>
                    <p>Ajouter une Annonce</p>
                  </a>
              </li>
              <li className="nav-header">Projets</li>
            <li className="nav-item">
              <a href="{{ path('projets_index') }}" className="nav-link">
                <i className="nav-icon far fa-circle text-danger"></i>
                <p className="text">Liste des Projets</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="{{ path('projets_new')}}" className="nav-link">
                <i className="nav-icon far fa-circle text-warning"></i>
                <p>Ajouter un Projet</p>
              </a>
            </li>
             <li className="nav-header">Contact</li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Contact
                </p>
              </a>
          </li>
        </ul>
      </nav>
    
    </div>
  
  </aside>

    
    
    </> );
}
 
export default AdminAside;