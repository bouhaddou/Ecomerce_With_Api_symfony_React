import React, { useState, useEffect } from 'react';
import FieldsAd from '../../../Component/forms/FieldsAd';
import CategorieApi from '../../../services/CategorieApi';
import Select from '../../../Component/forms/Select';
import axios from 'axios';
import { toast } from 'react-toastify';
import Images from '../../../Component/Images';

const produitPage = () => {

    const [categories, setCategories] = useState(undefined)
    const [produit, setProduit] = useState({
      
    })  
    const [fileImage, setFileImage] = useState([])

    const [produitImageName, setProduitImageName] = useState({})

    const [error, setError] = useState({
        ref:"",
        Categorie:"",
        title:"",
        content:"",
        prix:"",
        setAt:"",
        observation:"",
        image:""
    })
    const CategorieItem =async () =>{
        try{
        const data = await  CategorieApi.findAll()
        setCategories(data)
        console.log(categories)
        }catch(error){
            console.log(error.response)
        }
    }

    useEffect(() =>{
        CategorieItem()
    },[])

    const handleChange =async event =>{
        const {value,name} = event.currentTarget;
        const  dd =new FormData();
       if(name == "file"){
      dd.append('file',event.target.files[0],event.target.files[0].name);
      const response = await axios.post("http://localhost:8000/api/avatars",dd)
      setFileImage(fileImage => [...fileImage,response.data])
       }

        if(name == "prix")
        {
        setProduit({...produit, [name] : parseFloat(value)})
        }else{
        setProduit({...produit, [name] : value})
        }
    }
  const handleSubmit =async event =>{
    event.preventDefault();
  // try{
    console.log(...fileImage,fileImage.id);
    const response = await axios.post("http://localhost:8000/api/produits",{...produit, 
    Categorie:`/api/categories/${produit.Categorie}`, ...fileImage,
         avatars: fileImage.map(img => 
         `/api/avatars/${img.id}`)
      });

      // const  dd =new FormData();
      // dd.append('contentUrl',produitImage,produitImageName);
      // dd.append('Produit',"/api/produits/5")
      // const response = await axios.post("http://localhost:8000/api/media_objects",dd
  // )
       
    
  //     toast.success("Le produit a été Ajouter Avec succée ")
  // }catch(error){
  //   console.log(error.response)
  // }
 
  }


  if(!categories){ return <div>chargement</div>}else{ return ( <>
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
    <h2 className="text-center mt-2 mb-2">Ajouter un Produit</h2>        
    <div className="card card-primary container">
              <div className="card-header">
                <h3 className="card-title">Information Produit</h3>
              </div>
              <form role="form mr-5 ml-5" onSubmit={handleSubmit} encType="multipart/form-data"  >
                <div className="card-body">
                <FieldsAd type="text" placeholder="Réference : " style="form-group"
                    label="Réference :"
                    value={produit.ref} 
                    name="ref"
                    error={error.ref}
                    onChange={handleChange}
                />
                 <FieldsAd type="text" placeholder="Titre : " style="form-group"
                    label="Titre :"
                    value={produit.title} 
                    name="title"
                    error={error.title}
                    onChange={handleChange}
                />
                 <Select name="Categorie" id="Categorie" label="List des categories :" error={error.Categorie} value={produit.Categorie} onChange={handleChange} >
                    {categories.map(categorie => 
                    <option key={categorie.id} value={categorie.id}>{categorie.title} </option>
                    )}
                </Select>
                 <FieldsAd type="number" placeholder="prix" style="form-group"
                    label="prix :"
                    value={produit.prix} 
                    name="prix"
                    error={error.prix}
                    onChange={handleChange}
                />
                 <FieldsAd type="file" placeholder="Image  " style="form-group"
                    label="Image :"
                    name="file"
                    error={error.image}
                    onChange={handleChange}
                />
                <div className="">
                    <Images  fileImage={fileImage} />
                </div>
                <FieldsAd type="text" placeholder="Content  " style="form-group"
                    label="content :"
                    value={produit.content} 
                    name="content"
                    error={error.content}
                    onChange={handleChange}
                />
                <FieldsAd type="text" placeholder="observation  " style="form-group "
                    label="observation :"
                    value={produit.observation} 
                    name="observation"
                    error={error.observation}
                    onChange={handleChange}
                />
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Sauvgarder</button>
                </div>
              </form>
            </div>
    
    </> );
}
}
export default produitPage;