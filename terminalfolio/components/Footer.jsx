import React from 'react';
import { Box, Text } from 'ink';

const Footer = ({ message }) => (
  <Box 
    marginTop={2}
    paddingTop={1}
    borderStyle="single"
    borderBottom={false}
    borderLeft={false}
    borderRight={false}
    width="100%"
    justifyContent="center"
  >
    <Text color="blue" dimColor italic>
      {message || '✨ Projects, Blog, and Spells coming soon... ✨'}
    </Text>
  </Box>
);

export default Footer;
