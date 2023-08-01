import { IPlanet } from "../Contracts/IPlanet";
import Button from "./Button";
import InformationCard from "./InformationCard";

function ButtonFactory(planets: IPlanet[], ){
    return (
      <>
        {planets.map((planet) => (
          <Button
            style={{
              padding: "5px 50px",
              textAlign: "center",
              backgroundColor: "navy",
              color: "white",
            }}
            onClick={() => handleClick(planet)}>
            <span>{planet.name}</span>
          </Button>
        ))}
      </>
    );
  }

function handleClick(planet: IPlanet){
  return(
    <InformationCard style={{
      width: "300px",
      border: "15px solid green",
      padding: "50px",
      margin: "20px"}}>
    </InformationCard>
  )
};

  export default ButtonFactory