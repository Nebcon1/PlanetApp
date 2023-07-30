import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

it('renders planets header', () => {
  render(<App/>);
  const pageTitle = screen.getByText(/Planets of the Solar/i);
  expect(pageTitle).toBeInTheDocument();});

it('renders with at least one planet', () => {
  render(<App/>);
  const planet = screen.getByText("Jupiter");
  expect(planet).toBeInTheDocument();});

it('renders the full list of planets', () => {
  render(<App/>);
  const planets : string[] = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  planets.forEach(element => {
    const planet = screen.getByText(element);
    expect(planet).toBeInTheDocument();
  });
 });

it('does not include pluto', () => {
render(<App/>);
const planet = screen.queryByText("Pluto");
expect(planet).not.toBeInTheDocument();});
//



  
