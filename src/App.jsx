import './app.scss';

// imported components
import Header from './components/Header/Header';
import GetStarted from './components/GetStarted/GetStarted';
import MarketTrend from './components/MarketTrend/MarketTrend';
import Features from "./components/Features/Features";
import NewCrypto from './components/NewCrypto/NewCrypto';

function App() {

  return (

    <div className="root--app">

      <Header />

      <div className="main--app">

        <GetStarted />

        <MarketTrend />

        <Features />

        <NewCrypto />

      </div>


    </div>

  )

}

export default App
