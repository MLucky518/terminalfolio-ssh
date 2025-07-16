import React from 'react';
import { Text, Box } from 'ink';

// Simplified Projects component to reduce rendering complexity
const Projects = () => {
  return (
    <Box flexDirection="column">
      <Text bold color="yellow">Projects</Text>
      <Text>Here are some of my recent projects:</Text>
      <Box marginY={1}>
        <Text bold color="green">Terminal Portfolio</Text>
        <Text>A terminal-based portfolio website built with React and Ink.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="green">Weather App</Text>
        <Text>A simple weather application that displays current weather conditions.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="green">Task Manager</Text>
        <Text>A full-stack task management application with user authentication.</Text>
      </Box>
    </Box>
  );
};

export default Projects;
