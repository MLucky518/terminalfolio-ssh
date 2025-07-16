import React from 'react';
import { Text, Box } from 'ink';

// Updated Home component with under construction message
const Home = () => {
  return (
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Box marginY={1} alignItems="center" justifyContent="center">
        <Text bold color="green">✨ Welcome to my Terminalfolio ✨</Text>
      </Box>
      
      <Box marginY={1} alignItems="center" justifyContent="center">
        <Text color="yellow">This site is currently under construction</Text>
      </Box>
      
      <Box marginY={2} flexDirection="column" alignItems="center" justifyContent="center">
        <Text>I'm working hard to build something amazing!</Text>
      </Box>
      
      <Box marginY={2} alignItems="center" justifyContent="center">
        <Text>🧙‍♂️ ✨ ✨ ✨</Text>
      </Box>
      
      <Box marginY={1} alignItems="center" justifyContent="center">
        <Text italic color="cyan">Check back soon for updates</Text>
      </Box>
    </Box>
  );
};

export default Home;
