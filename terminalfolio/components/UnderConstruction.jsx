import React from 'react';
import { Box, Text } from 'ink';

const UnderConstruction = ({ pageName }) => (
  <Box flexDirection="column" alignItems="center" marginY={1}>
    <Text color="yellow" bold>🚧 {pageName || 'This page'} is under construction 🚧</Text>
    <Box marginTop={1}>
      <Text color="gray" italic>
        This section is currently being forged with magical incantations.
      </Text>
    </Box>
    <Box marginTop={1}>
      <Text color="magenta">
        ✨ The mages are hard at work! ✨
      </Text>
    </Box>
  </Box>
);

export default UnderConstruction;
