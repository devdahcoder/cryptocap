import './app.scss';

// imported components
import Header from './components/Header/Header';
import GetStarted from './components/GetStarted/GetStarted';

function App() {

  return (

    <div className="root--app">

      <Header />

      <div className="main--app">
        <GetStarted />
      </div>


    </div>

  )

}

export default App
