import React from 'react'
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import Status from './pages/Status'
import Reservations from './pages/Reservations'
import SearchPage from './pages/SearchPage'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Amadeus from 'amadeus'


const amadeus = new Amadeus({
  clientId: 'a4yxJx3IZaPt34dTyoBl2Xxal368Ngy2',
  clientSecret: '9xSV1mQtLGE2cmyF'
});

export const AmadeusContext = React.createContext()


function App() {

  return (
    <>
    <AmadeusContext.Provider value={amadeus}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Reservations" component={Reservations}/>
          <Route exact path="/Status" component={Status}/>
          <Route exact path="/Search" component={SearchPage} />
          <Route component={Error}/>
        </Switch>
      </AmadeusContext.Provider>
    </>
  );
}

export default App;
