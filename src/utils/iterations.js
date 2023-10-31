// src/utils/iterations.js

const iterateOverTasks = (tasks, callback) => {
  tasks.forEach((task, index) => {
    callback(task, index);
  });
};

const iterateOverUsers = (users, callback) => {
  users.forEach((user, index) => {
    callback(user, index);
  });
};

const iterateOverAIEntities = (entities, callback) => {
  entities.forEach((entity, index) => {
    callback(entity, index);
  });
};

const iterateOverChallenges = (challenges, callback) => {
  challenges.forEach((challenge, index) => {
    callback(challenge, index);
  });
};

export {
  iterateOverTasks,
  iterateOverUsers,
  iterateOverAIEntities,
  iterateOverChallenges,
};