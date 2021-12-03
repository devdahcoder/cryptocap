import React, {useState} from 'react';
import "./featureslist.scss";

// imported components
import FeaturesItems from "../FeaturesItems/FeaturesItems";


import Portfolio from "../../assets/images/feature-image 1.png";
import Secure from "../../assets/images/feature-image 1 (1).png";
import Crypto from "../../assets/images/feature-image 1 (2).png";
import Practice from "../../assets/images/feature-image 1 (3).png";


const FeaturesList = () => {

    const [features] = useState([
        {
            id: 1,
            image: Portfolio,
            title: "Manage Portfolio",
            description: "Buy and sell popular digital currencies, keep track of them in the one place."
        },
        {
            id: 2,
            image: Secure,
            title: "Protected Securely",
            description: "All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
        },
        {
            id: 3,
            image: Crypto,
            title: "Cryptocurrency Variety",
            description: "Supports a variety of the most popular digital currencies and always uptodate."
        },
        {
            id: 4,
            image: Practice,
            title: "Learn Best Practice",
            description: "Easy to know how to cryptocurrency works and friendly to newbie."
        }
    ]);

    return (

        <div className="features--list--container">

            <div className="features--list--display">

                {features.map(feature => (<FeaturesItems key={feature.id} feature={feature} />))}

            </div>
            
        </div>

    )

}

export default FeaturesList
