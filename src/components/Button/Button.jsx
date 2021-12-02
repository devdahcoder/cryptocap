import React from 'react';
import "./button.scss";


const Button = ({child}) => {

    return (

        <button className="button--container">

            {child}

        </button>

    )

}

export default Button
