import React from 'react';
import { Text, Box } from 'ink';

// Simplified Blog component to reduce rendering complexity
const Blog = () => {
  return (
    <Box flexDirection="column">
      <Text bold color="yellow">Blog</Text>
      <Text>Recent posts from my tech journey:</Text>
      <Box marginY={1}>
        <Text bold color="magenta">Getting Started with React Ink</Text>
        <Text>Published: June 15, 2025</Text>
        <Text>Learn how to build terminal-based UIs with React Ink.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="magenta">The Magic of Terminal UIs</Text>
        <Text>Published: May 20, 2025</Text>
        <Text>Why terminal interfaces are making a comeback in modern development.</Text>
      </Box>
      <Box marginY={1}>
        <Text bold color="magenta">Building a Portfolio in the Terminal</Text>
        <Text>Published: April 5, 2025</Text>
        <Text>How I created this terminal-based portfolio website.</Text>
      </Box>
    </Box>
  );
};

export default Blog;
