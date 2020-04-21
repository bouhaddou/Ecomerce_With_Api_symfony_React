import React, { useState, useEffect } from 'react';


const Images = ({fileImage}) => {
    
  console.log(fileImage);
   if(fileImage.length == 0 ){return <div>no image</div>}else{  
       return ( <>
        <h2>Les images</h2>
        <div className="row">
         {fileImage.length > 0 && fileImage.map( image =>
            <div className="col-md-3">
                    <img className="img-fuild w-100 h-100" key={image.id} className="img-fluid w-100" src={"avatars/" +  image.filePath} />
            </div>
         )} 
        </div>
       
        
       
    </> );
}
} 
export default Images;