// Importing necessary libraries
import { render, screen } from '@testing-library/react';
import App from '../App';

// Test suite for App component
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Elysium Innovations' Interactive AI Metaverse Demo/i)).toBeInTheDocument();
  });
});

// Importing components for testing
import AIButler from '../components/AIButler';
import AIAgent from '../components/AIAgent';
import Metaverse from '../components/Metaverse';
import GamifiedLearning from '../components/GamifiedLearning';

// Test suite for AIButler component
describe('AIButler', () => {
  test('renders AIButler component', () => {
    render(<AIButler />);
    expect(screen.getByText(/AI Butler/i)).toBeInTheDocument();
  });
});

// Test suite for AIAgent component
describe('AIAgent', () => {
  test('renders AIAgent component', () => {
    render(<AIAgent />);
    expect(screen.getByText(/AI Agent/i)).toBeInTheDocument();
  });
});

// Test suite for Metaverse component
describe('Metaverse', () => {
  test('renders Metaverse component', () => {
    render(<Metaverse />);
    expect(screen.getByText(/Metaverse/i)).toBeInTheDocument();
  });
});

// Test suite for GamifiedLearning component
describe('GamifiedLearning', () => {
  test('renders GamifiedLearning component', () => {
    render(<GamifiedLearning />);
    expect(screen.getByText(/Gamified Learning/i)).toBeInTheDocument();
  });
});