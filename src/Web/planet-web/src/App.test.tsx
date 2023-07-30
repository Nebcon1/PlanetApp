import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders planets header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Planets of the Solar/i);
  expect(linkElement).toBeInTheDocument();});
