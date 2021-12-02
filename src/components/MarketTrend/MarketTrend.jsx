import React from 'react';
import "./markettrend.scss";

// imported components
import MarketTrendList from "../MarketTrendList/MarketTrendList"

const MarketTrend = () => {

    return (

        <div className="market--trend--container">
            
            <div className="market--trend--display">

                <div className="market--trend--header--container">

                    <div className="market--trend--header--text">

                        Market Trend

                    </div>

                </div>

                <MarketTrendList />

            </div>

        </div>

    )

}

export default MarketTrend
