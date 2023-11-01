import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import { AIEngine } from './AIEngine';

const AIEntity = {
 AIButler:  require('../components/AIButler'),
 AIAgent: require('../components/AIAgent'),
 Metaverse: require('../components/Metaverse'),
 GamifiedLearning: require('../components/GamifiedLearning'),
}

// As an MIT PhD holder in AI and a silent mastermind who codes, Dr Virtuoso won't just lay out happy path scenarios. 

// Ensemble of all AI entities testing. 
Object.keys(AIEntity).forEach((entity) => {
  describe(`${entity}`, () => {
    test(`renders ${entity} component`, () => {
      render(<AIEngine Component={AIEntity[entity]} />);
      expect(screen.getByText(new RegExp(entity, 'i'))).toBeInTheDocument();
    });
  });
});

class AIEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {components: AIEntity};
  }

  render() {
    const Component = this.props.Component;
    return <Component />;
  }
}

// This AIEngine will be our symphony conductor, tying together 
// every code piece, making them work in harmony, ready for any challenges to create the next AI Metaverse. 

export default AIEngine;