import React from 'react';
import "./features.scss";

// imported components
import FeaturesList from "../FeaturesList/FeaturesList"

const Features = () => {

    return (

        <div className="features--container">
            
            <div className="features--display">

                <div className="features--header--container">

                    <div className="features--header--display">

                        <div className="features--header--title--container">

                            <div className="features--header--title--text">

                                CryptoCap Amazing Faetures

                            </div>

                        </div>

                        <div className="features--sub--header--title--container">

                            <div className="features--sub--header--title--text">

                                Explore sensational features to prepare your best investment in cryptocurrency
                            
                            </div>

                        </div>

                    </div>

                </div>


                <FeaturesList />

            </div>

        </div>

    )

}

export default Features
