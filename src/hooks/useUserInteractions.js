import { useState, useEffect } from 'react';

const useUserInteractions = () => {
  const [interaction, setInteraction] = useState(null);

  const handleInteraction = (event) => {
    setInteraction(event);
  };

  useEffect(() => {
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return interaction;
};

export default useUserInteractions;