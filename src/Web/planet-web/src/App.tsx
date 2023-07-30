import './App.css';
import { IPlanet } from './Contracts/IPlanet';

function App(){
  return (
    <div className="App">
      <h1>Planets of the Solar System</h1>
        <PlanetList></PlanetList>
    </div>
  );
}

function PlanetList(){

  const planets : IPlanet[] = [
    {name:'Mercury', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Venus', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Earth', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Mars', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Jupiter', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Saturn', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Uranus', diameter:1, distanceFromSun:1,mass:1,planetImage:''},
    {name:'Neptune', diameter:1, distanceFromSun:1,mass:1,planetImage:''}
  ]
  return(
    <>
    <h2>Currently Classified as Planets:</h2>
    <ul>
      {planets.map((planet)=> <li>{planet.name}</li>)}
    </ul>
    </>
  )
}

export default App;
