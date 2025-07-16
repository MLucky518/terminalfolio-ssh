import React from 'react';
import { Box, Text } from 'ink';

const Header = ({ title, subtitle }) => (
  <Box 
    flexDirection="column" 
    alignItems="center" 
    marginBottom={1}
    paddingY={1}
    borderStyle="single"
    borderTop={false}
    borderLeft={false}
    borderRight={false}
    width="100%"
  >
    <Text color="magenta" bold>
      {title || '🧙 Michael Luck\'s Terminalfolio'}
    </Text>
    <Text color="cyan" dimColor>
      {subtitle || 'Level 34 • Full-Stack Developer'}
    </Text>
  </Box>
);

export default Header;
