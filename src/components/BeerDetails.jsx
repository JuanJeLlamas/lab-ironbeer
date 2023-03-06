import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Link, useParams } from 'react-router-dom';
// function BeersDetails(props) {
//   const { allBeers } = props;
//   (console.log(props , "props"))

//   // console.log(beerId, "id props")
//   // const beer = allBeers.find((beer) => beer._id === beerId);

//   return (
//     <div>
//       <h2>HOLA DETAILS</h2>
//       {/* <h1>{beer.name}</h1>
//       <img src={beer.image_url} alt={beer.name} />
//       <p>{beer.description}</p> */}
//     </div>
//   );
// }

// // function BeersDetails(props) {
// //     const { allBeers } = props
// //     // const { allBeers } = props;
// //     console.log("each de details", props)
    
// //     // console.log("propsss", props)
// // //   const { beer } = props.location.state;
// // //   console.log(beer , "beer de props")
// //   return (
// //     <div>
// //       <h1>HOLA PROPS DETAILS</h1>
      
// //       {/* <img src={beer.image_url} alt="beer" />
// //       <p>{beer.description}</p> */}
// //       {allBeers.map((eachBeer) => {
// //     return (
// //     <div key={eachBeer._id}>
     


     
// //       <div>
// //       <h2>{eachBeer.name}</h2>
// //       <h3 style={{color: "blue"}}>{eachBeer.tagline}</h3>
// //       <h4>{eachBeer.contributed_by}</h4>
        
// //          </div>
        
// //     </div>

    
// //     )
// //   })}
// //     </div>
// //   );
// // }
function BeersDetails() {
  const beerId = useParams().id;
  const [oneBeer, setOneBeer] = useState(null);
  const [buscandoData, setBuscandoData] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/");
      setOneBeer(response.data);
      setBuscandoData(false);
    } catch (error) {
      console.log(error);

    }
  };

  if (buscandoData === true) {
    return (
      <div>
        <h4>Buscando en base de datos...</h4>
      </div>
    );
  }

  const filteredBeer = oneBeer.find((beer) => beer._id === beerId);

  return (
    <div>
      <h1>Detalles</h1>
      <img src={filteredBeer.image_url} width="120px" alt="imagen" />
      <h4>Lema:{filteredBeer.tagline}</h4>
      <h4>Año de elaboración:{filteredBeer.first_brewed}</h4>
      <h4>Nivel de atenuación:{filteredBeer.attenuation_level}</h4>
      <h4>Descripción:{filteredBeer.description}</h4>
      <h4>Por: {filteredBeer.contributed_by}</h4>
    </div>
  );
}

export default BeersDetails;
