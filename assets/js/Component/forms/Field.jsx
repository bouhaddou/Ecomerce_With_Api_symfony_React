import React from 'react';


const Field = ({name,onChange,type ="text",id }) => (
    <div className="form-group">
    {/* <label htmlFor={name}>{label}</label> */}
    <input
        onChange={onChange}
        
        type={type} 
        // placeholder={placeholder}
        name={name}
       id={id}
        className="form-control"
     />
    {/* {error &&<p className="invalid-feedback">{error}</p>} */}
</div>
 );
export default Field;