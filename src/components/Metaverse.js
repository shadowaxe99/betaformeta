Sure! Here's an optimized version of the same Metaverse component with no placeholders, on Task, Agents, and Challenges level.

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios";

import AIButler from './AIButler';
import AIAgent from './AIAgent';
import Challenges from './Challenges';
import './Metaverse.css';

const Metaverse = () => {
    const [agents, setAgents] = useState([]);
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        const fetchAIAgents = async () => {
            try {
                const response = await axios.get('https://my.api.com/ai-agents');
                setAgents(response.data);
            } catch (error) {
                console.error("Failed in fetching AI agents", error);
            }
        };

        const fetchChallenges = async () => {
            try {
                const response = await axios.get('https://my.api.com/challenges');
                setChallenges(response.data);
            } catch (error) {
                console.error("Failed in fetching challenges", error);
            }
        };

        fetchAIAgents();
        fetchChallenges();
    }, []);

    return (
        <div className="metaverse">
            <AIButler />
            <div className="ai-agents">
                {agents.map(agent => <AIAgent key={agent.id} agent={agent} />)}
            </div>
            <div className="challenges">
                {challenges.map(challenge => <Challenges key={challenge.id} challenge={challenge} />)}
            </div>
        </div>
    );
};

export default Metaverse;
```

In this code snippet, I have removed the placeholder functions and implemented the actual API calls using `axios` within `useEffect` hook of the `Metaverse` function component. We are fetching data asynchronously from "https://my.api.com/ai-agents" and "https://my.api.com/challenges" URLs and then updating the states with the fetched data.

Note: Please replace 'https://my.api.com/ai-agents' and 'https://my.api.com/challenges' with your actual API endpoints. This is assuming API returns an array of objects for 'ai-agents' and 'challenges' as required by following lines respectively.

```jsx
{agents.map(agent => <AIAgent key={agent.id} agent={agent} />)}
{challenges.map(challenge => <Challenges key={challenge.id} challenge={challenge} />)}
```