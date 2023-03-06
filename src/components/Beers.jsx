
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';



function Beers() {

  const [allBeers, setAllBeers] = useState(null)
  const [buscandoData, setBuscandoData] = useState(true)


  useEffect(() => {

    getData()

  }, [])


  const getData = async () => {
    try {

      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      // console.log(response)
      setAllBeers(response.data)
      // console.log("allbeers", setAllBeers)
      setBuscandoData(false)
     

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
      <h1>lista BEERS</h1>
      {allBeers.map((eachBeer) => {

        return (
          <div key={eachBeer._id}>
            <Link to={{ pathname: `/beers/${eachBeer._id}`, state: { allBeers: allBeers } }}>

              <img src={eachBeer.image_url} alt="image" width={70} />

              <div>
                <h2>{eachBeer.name}</h2>
                <h3 style={{ color: "blue" }}>{eachBeer.tagline}</h3>
                <h4>{eachBeer.contributed_by}</h4>

              </div>
            </Link>


          </div>


        )
      })}
    </div>

  )
}

export default Beers