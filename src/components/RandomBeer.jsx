import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {

  const [beer, setBeer] = useState({});
    const [buscandoData, setBuscandoData] = useState(true)
  
  
    useEffect(() => {
      getData()
    }, [])
  
  
    const getData = async () => {
      try {
  
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(response)
        setBeer(response)
        setBuscandoData(false)
        // console.log("setBeerNormal", response)
        // console.log("setBeer.data", response.data)

  
      } catch (error) {
        console.log(error)
  
      }
    }
  
    if (buscandoData === true) {
      return (
        <div>
          <h4>Buscando en base de datos...</h4>
        </div>
      )
    }
  
  
  
    return (
      <div>
        {/* <img src={response.data.image_url} width="120px" alt="imagen" />
      <h4>Lema:{response.data.tagline}</h4>
      <h4>Año de elaboración:{response.data.first_brewed}</h4>
      <h4>Nivel de atenuación:{response.data.attenuation_level}</h4>
      <h4>Descripción:{response.data.description}</h4>
      <h4>Por: {response.data.contributed_by}</h4>
        */}
      </div>
  
    )
  }


export default RandomBeer