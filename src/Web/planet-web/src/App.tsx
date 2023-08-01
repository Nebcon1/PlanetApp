import "./App.css";
import ButtonFactory from "./Components/ButtonFactory";
import InformationCard from "./Components/InformationCard";
import { IPlanet } from "./Contracts/IPlanet";
import SpaceBackground from "./Images/Space.png";
import Venus from "./Images/venus.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${SpaceBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "white" }}>Planets of the Solar System</h1>
      <>{ButtonFactory(planets)}</>
      <InformationCard
        style={{
          width: "200px",
          border: "15px solid navy",
          backgroundColor: "black",
          padding: "100px",
          margin: "20px auto",
        }}
      >
        <img
          src={Venus}
          style={{ width: "100%", height: "100%", paddingLeft: "20px" }}
          alt="Planet"
        />
        <h2 style={{ color: "white" }}>{planets[1].name}</h2>
        <ul style={{ listStyleType: "disc", color: "white" }}>
          <li>Mass: {planets[1].mass} (10^24kg)</li>
          <li>Diameter: {planets[1].diameter} (km)</li>
          <li>Distance from Sun: {planets[1].distanceFromSun} (10^6km)</li>
        </ul>
      </InformationCard>
    </div>
  );
}

// TODO: To be returned by appropriate data handler/API Interface:
const planets: IPlanet[] = [
  {
    id: 1,
    name: "Mercury",
    diameter: 4879,
    distanceFromSun: 57.9,
    mass: 0.33,
    planetImage: "",
  },
  {
    id: 2,
    name: "Venus",
    diameter: 12104,
    distanceFromSun: 108.2,
    mass: 4.87,
    planetImage: "",
  },
  {
    id: 3,
    name: "Earth",
    diameter: 12756,
    distanceFromSun: 149.6,
    mass: 5.97,
    planetImage: "",
  },
  {
    id: 4,
    name: "Mars",
    diameter: 6792,
    distanceFromSun: 228.0,
    mass: 0.642,
    planetImage: "",
  },
  {
    id: 5,
    name: "Jupiter",
    diameter: 142984,
    distanceFromSun: 778.5,
    mass: 1898,
    planetImage: "",
  },
  {
    id: 6,
    name: "Saturn",
    diameter: 120536,
    distanceFromSun: 1432,
    mass: 568,
    planetImage: "",
  },
  {
    id: 7,
    name: "Uranus",
    diameter: 51118,
    distanceFromSun: 2867,
    mass: 86.8,
    planetImage: "",
  },
  {
    id: 8,
    name: "Neptune",
    diameter: 49528,
    distanceFromSun: 4515,
    mass: 102,
    planetImage: "",
  },
];

export default App;
