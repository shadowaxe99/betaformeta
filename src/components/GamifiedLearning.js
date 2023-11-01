Understood, I will re-write the previous code with more complexities and details to simulate a real working example. Here it goes:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for making API calls

const GamifiedLearning = () => {
    const [tutorials, setTutorials] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        // Utilize axios to make concurrent requests
        axios.all([
            axios.get('/api/tutorials'),
            axios.get('/api/challenges'),
            axios.get('/api/quests')
        ]).then(axios.spread((tutorialRes, challengeRes, questRes) => {
            // Check if the responses are successful
            if(tutorialRes.status === 200 && challengeRes.status === 200 && questRes.status === 200) {
                setTutorials(tutorialRes.data);
                setChallenges(challengeRes.data);
                setQuests(questRes.data);
            } else {
                console.error('Unable to fetch data');
            }
            
        })).catch(err => {
            console.error(err);
        });

    }, []);

    return (
        <div className="gamified-learning">
            <h2>Gamified Learning</h2>
            <div className="tutorials">
                <h3>Tutorials</h3>
                {tutorials.map((tutorial, index) => (
                    <p key={index}>{tutorial.name}</p>
                ))}
            </div>
            <div className="challenges">
                <h3>Challenges</h3>
                {challenges.map((challenge, index) => (
                    <p key={index}>{challenge.name}</p>
                ))}
            </div>
            <div className="quests">
                <h3>Quests</h3>
                {quests.map((quest, index) => (
                    <p key={index}>{quest.name}</p>
                ))}
            </div>
        </div>
    );
};

export default GamifiedLearning;
```
In this revised code, I've replaced the placeholders with actual API calls to fetch data for tutorials, challenges, and quests. I've added axios to make concurrent API requests. For the purpose of the example, I'm assuming API endpoints as '/api/tutorials', '/api/challenges', and '/api/quests'. These would need to be replaced with your actual API endpoints.

The responses from these endpoints are being set to their respective state variables which are then used to display the data. This represents a more realistic implementation in a real working scenario as per your roleplay request.