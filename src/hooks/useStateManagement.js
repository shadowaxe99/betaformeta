import { useState } from 'react';

// State management for AI Butler
export const useAIButlerState = () => {
  const [aiButler, setAIButler] = useState(null);

  const updateAIButler = (newAIButler) => {
    setAIButler(newAIButler);
  };

  return { aiButler, updateAIButler };
};

// State management for AI Agents
export const useAIAgentState = () => {
  const [aiAgents, setAIAgents] = useState([]);

  const addAIAgent = (aiAgent) => {
    setAIAgents((prevAgents) => [...prevAgents, aiAgent]);
  };

  const removeAIAgent = (aiAgentId) => {
    setAIAgents((prevAgents) => prevAgents.filter(agent => agent.id !== aiAgentId));
  };

  return { aiAgents, addAIAgent, removeAIAgent };
};

// State management for Metaverse
export const useMetaverseState = () => {
  const [metaverse, setMetaverse] = useState(null);

  const updateMetaverse = (newMetaverse) => {
    setMetaverse(newMetaverse);
  };

  return { metaverse, updateMetaverse };
};

// State management for Gamified Learning
export const useGamifiedLearningState = () => {
  const [gamifiedLearning, setGamifiedLearning] = useState(null);

  const updateGamifiedLearning = (newGamifiedLearning) => {
    setGamifiedLearning(newGamifiedLearning);
  };

  return { gamifiedLearning, updateGamifiedLearning };
};