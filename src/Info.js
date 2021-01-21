import React from "react";

const Info =(props) =>{
    return(
        <div classname ="App">
            <p>Name:{props.name}</p>
            <p>Number:{props.number}</p>
            <p>Date Of Birth:{props.dob}</p>
            <p>Hobby:{props.hobby}</p>

        </div>
    );
};

export default Info;