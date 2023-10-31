import React from 'react';
import AIButler from './components/AIButler';
import AIAgent from './components/AIAgent';
import Metaverse from './components/Metaverse';
import GamifiedLearning from './components/GamifiedLearning';
import UI from './components/UI';
import UX from './components/UX';
import InteractiveElements from './components/InteractiveElements';
import Transitions from './components/Transitions';
import Animations from './components/Animations';
import Accessibility from './components/Accessibility';
import Usability from './components/Usability';
import Marketplace from './components/Marketplace';
import Challenges from './components/Challenges';
import Tutorials from './components/Tutorials';
import Persona1 from './components/Persona1';
import Persona2 from './components/Persona2';
import Persona3 from './components/Persona3';
import PRD from './components/PRD';

function App() {
  return (
    <div className="App">
      <UI />
      <UX />
      <InteractiveElements />
      <Transitions />
      <Animations />
      <Accessibility />
      <Usability />
      <Marketplace />
      <Challenges />
      <Tutorials />
      <Persona1 />
      <Persona2 />
      <Persona3 />
      <PRD />
      <AIButler />
      <AIAgent />
      <Metaverse />
      <GamifiedLearning />
    </div>
  );
}

export default App;