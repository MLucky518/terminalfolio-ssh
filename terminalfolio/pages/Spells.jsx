import React from 'react';
import { Text, Box } from 'ink';

// Simplified Spells component to reduce rendering complexity
const Spells = () => {
  return (
    <Box flexDirection="column">
      <Text bold color="yellow">Spells (Special Skills)</Text>
      <Text>As a wizard developer, I've mastered these spells:</Text>
      <Box marginY={1}>
        <Text bold color="magenta">✨ Responsive Design</Text>
        <Text>Creating interfaces that work beautifully across all devices.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="magenta">🔮 Performance Optimization</Text>
        <Text>Enhancing application speed and efficiency.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="magenta">⚡ API Integration</Text>
        <Text>Connecting applications to various services and data sources.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="magenta">🧙‍♂️ Problem Solving</Text>
        <Text>Finding elegant solutions to complex technical challenges.</Text>
      </Box>
    </Box>
  );
};

export default Spells;
