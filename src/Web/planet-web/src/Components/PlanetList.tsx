import { IPlanet } from "../Contracts/IPlanet"



function PlanetList(){

  // To be pulled from data store:
    const planets : IPlanet[] = [
      {id:1, name:'Mercury', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:2, name:'Venus', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:3, name:'Earth', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:4, name:'Mars', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:5, name:'Jupiter', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:6, name:'Saturn', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:7, name:'Uranus', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
      {id:8, name:'Neptune', diameter:1, distanceFromSun:1,mass:1,planetImage:''}
    ]
    // return(
    //   <>
    //   <h2>Currently Classified as Planets:</h2>
    //   <ul>
    //     {planets.map((planet)=> <li>{planet.name}</li>)}
    //   </ul>
    //   </>
    // )
    return(planets)
  }

  export {PlanetList}