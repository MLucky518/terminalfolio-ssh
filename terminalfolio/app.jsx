import React from 'react';
import { Box, Text } from 'ink';

const App = () => (
  <Box
    borderStyle="round"
    borderColor="green"
    padding={1}
    flexDirection="column"
    alignItems="center"
  >
    <Text color="cyan">🧙 Welcome to Michael Luck's Terminalfolio</Text>
    <Text>Level 34 • Full-Stack Developer</Text>
    <Text color="gray">Projects, Blog, and Spells coming soon...</Text>
  </Box>
);

export default App;
