import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link} from 'react-router-dom';
import Home from "./components/Home"
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
function App() {

  
  return (
    <div className="App">
     
        {/* <Home/> */}
        
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/beers/list" element={ <Beers/> } />
           <Route path="/beers/:id" element={ <BeerDetails/>}/>  
           <Route path="/random-beer" element={<RandomBeer/>}/>
          </Routes>
    </div>
  );
}

export default App;
