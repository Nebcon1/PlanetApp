import './App.css';
import { PlanetList } from './Components/PlanetList';
import Button from './Components/Button';

function App(){

  // const handleClick = () => {
  //   console.log('Button was clicked!');
  // };

  return (
    <div className="App">
      <h1>Planets of the Solar System</h1>
        <PlanetList></PlanetList>
        <Button style={{backgroundColor: 'navy', color: 'white'}} onClick={() => alert("Planet information placeholder.")}>
        <span>Planet Name Placeholder</span>
        </Button>
    </div>
  );
}

export default App;
