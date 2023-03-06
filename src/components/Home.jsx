import { Route, Routes, Link} from 'react-router-dom';


function Home() {
  return (
    <div>
     <div>
      <img src={require("../assets/beers.png")} alt="Imagen de cervezas" />
      <Link to="/beers/list"><h2>ALL BEERS</h2></Link>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Aliquam euismod, libero sit amet porta gravida, metus tellus euismod dui, 
       fringilla ornare lacus diam ac odio.
      
     </div>
     <div>
      <img src={require("../assets/random-beer.png")} alt="Imagen de cervezas" />
      <Link to="/random-beer"><h2>Random Beer</h2></Link>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Aliquam euismod, libero sit amet porta gravida, metus tellus euismod dui, 
       fringilla ornare lacus diam ac odio.
      
     </div>
        



        </div>
  )
}

export default Home