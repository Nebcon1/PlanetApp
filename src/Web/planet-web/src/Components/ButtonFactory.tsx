import { IPlanet } from "../Contracts/IPlanet";
import Button from "./Button";

function ButtonFactory(planets: IPlanet[]){
    return(
    <>
      {planets.map((planet)=> 
      <Button style={{backgroundColor: 'navy', color: 'white'}} onClick={() => alert("Planet information placeholder.")}><span>{planet.name}</span></Button>)}
    </>
      )
  }

  export default ButtonFactory