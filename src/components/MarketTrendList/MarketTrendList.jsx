import React, {useState} from 'react';
import "./markettrendlist.scss"

import Bitcoin from "../../assets/images/bitcoin-ic 2.png";
import Ethereum from "../../assets/images/bitcoin-ic 2 (2).png";
import Binance from "../../assets/images/bitcoin-ic 2 (3).png";
import Tether from "../../assets/images/bitcoin-ic 2 (1).png";

// imported components
import MarketTrendItem from "../MarketTrendItem/MarketTrendItem";

const MarketTrendList = () => {

    const [data] = useState([
        {
            id: 1,
            image: Bitcoin,
            name: 'Bitcoin',
            shortName: "BTC",
            price: '$12,000.30',
            percentage: "2.5%",
        },
        {
            id: 2,
            image: Ethereum,
            name: 'Ethereum',
            shortName: "ETH",
            price: '$12,000.30',
            percentage: "2.5%",
        },
        {
            id: 3,
            image: Binance,
            name: 'Binance',
            shortName: "BNB",
            price: '$12,000.30',
            percentage: "2.5%",
        },
        {
            id: 4,
            image: Tether,
            name: 'Tether',
            shortName: "USDT",
            price: '$12,000.30',
            percentage: "2.5%",
        }
    ]);

    return (

        <div className="market--trend--list--container">

            <div className="market--trend--list--display">

                {data.map(item => ( <MarketTrendItem key={item.id} data={item} /> ))}

            </div>
            
        </div>

    )

}

export default MarketTrendList
