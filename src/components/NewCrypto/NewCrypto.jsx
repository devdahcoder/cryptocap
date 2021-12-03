import React from 'react';
import "./newcrypto.scss";

// imported component
import Button from "../Button/Button";

const NewCrypto = () => {

    return (

        <div className="new--crypto--container">

            <div className="new--crypto--display">

                <div className="new--crypto--content--container">

                    <div className="new--crypto--content--text">

                        <div className="new--crypto--content--header">

                            <p>New In Cryptocurrency?</p>

                        </div>

                        <div className="new--crypto--content--body">

                            <p>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>

                        </div>

                    </div>

                </div>

                <div className="new--crypto--btn--container">
                    
                    <Button child="Learn & Explore Now" />
                    
                </div>

            </div>
            
        </div>

    )

}

export default NewCrypto
