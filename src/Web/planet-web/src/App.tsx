import './App.css';
import ButtonFactory from './Components/ButtonFactory';
import { IPlanet } from './Contracts/IPlanet';

function App(){

  // TODO: To be updated for info return:
    // const handleClick = () => {
    //   console.log('Button was clicked!');
    // };

  return (
    <div className="App">
      <h1>Planets of the Solar System</h1>
        <>{ButtonFactory(planets)}</>
    </div>
  );
}

// TODO: To be returned by appropriate data handler/API Interface:
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

export default App;
