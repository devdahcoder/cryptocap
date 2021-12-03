import React from 'react';
import "./featuresitems.scss";

const FeaturesItems = ({feature}) => {

    return (

        <div className="features--items--container">
            
            <div className="features--items--display">

                <div className="features--items--logo--container">

                    <img src={feature.image} alt={feature.title} />

                </div>

                <div className="features--items--header--container">

                    <div className="features--items--header--text">

                        {feature.title}

                    </div>

                </div>

                <div className="features--items--description--container">

                    <div className="features--items--description--text">

                        {feature.description}

                    </div>

                </div>


                <div className="features--items--more--link--container">

                    <div className="features--items--link--text">

                        <a className="features--items--link" href="http://" target="_blank" rel="noopener noreferrer">

                            See Explained 

                            <span>

                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M8.92425 1.30884L12.3089 5.30884M12.3089 5.30884L8.92425 9.30884M12.3089 5.30884L1.80887 5.30884" stroke="#0FAE96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                                </svg>

                            </span>

                        </a>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default FeaturesItems
