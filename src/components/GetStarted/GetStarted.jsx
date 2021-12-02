import React from 'react';
import "./getstarted.scss";

//imported components
import Button from "../Button/Button";

const GetStarted = () => {

    return (

        <div className="portfolio--container">

            <div className="portfolio--display">

                <div className="portfolio--display--title">

                    <h1>Start and Build Your Crypto Portfolio Here</h1>

                </div>

                <div className="portfolio--display--content">

                    <p>Only at CryptoCap, you can build a good portfolio and learn <br /> best practices about cryptocurrency.</p>

                </div>

                <div className="portfolio--button--container">

                    <Button child="Get started" />

                </div>

            </div>

        </div>

    )

}

export default GetStarted
