import React from 'react';
import "./markettrenditem.scss";

const MarketTrendItem = ({data}) => {

    return (

        <div className="market--list--item--container">

            <div className="market--list--item--display">

                <div className="market--list--name--logo--container">
                    
                    <div className="market--list--name--logo--display">

                        <div className="market--list--logo--container">

                            <div className="market--list--name--logo">

                                <img className="market--list--image" src={data.image} alt={data.name} />

                            </div>

                            <div className="coin--name--market market--list--short--name">

                                <div className="market--list--short--name--text">

                                    {data.shortName}
                                    
                                </div>

                            </div>

                            <div className="coin--name--market market--list--name">

                                <div className="market--list--name--text">

                                    {data.name}

                                </div>

                            </div>

                        </div>

                        <div className="market--list--chart--arrow--logo--container">

                            <div className="market--list--chart--arrow--logo--display">

                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M5.54595 1.084L14.7383 1.79111M14.7383 1.79111L15.4454 10.9835M14.7383 1.79111L1.26166 15.2678" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                
                                </svg>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="market--list--item--line">

                </div>

                <div className="market--list--price--container">

                    <div className="market--list--price--display">

                        <div className="market--list--price--percentage">

                            <div className="market--list--price">
                                {data.price}
                            </div>

                            <div className="market--list--padding"></div>

                            <div className="market--list--percentage">
                                {data.percentage}
                            </div>

                        </div>

                        <div className="market--list--chart--container">

                            <div className="market--list--chart--display">
                                <svg width="100" height="54" viewBox="0 0 100 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect y="0.364487" width="100" height="53.271" fill="url(#pattern0)"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_146_60" transform="translate(-0.119881) scale(0.00484282 0.00909091)"/>
                                    </pattern>
                                    <image id="image0_146_60" width="256" height="110" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                </svg>

                            </div>
                        

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default MarketTrendItem