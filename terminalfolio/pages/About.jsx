import React from 'react';
import { Text, Box } from 'ink';

// Simplified About component to reduce rendering complexity
const About = () => {
  return (
    <Box flexDirection="column">
      <Text bold color="yellow">About Me</Text>
      <Text>Full-Stack Developer with expertise in modern web technologies.</Text>
      <Box marginY={1}>
        <Text bold color="cyan">Skills:</Text>
      </Box>
      <Text>- Languages: JavaScript, TypeScript, Python, Go</Text>
      <Text>- Frontend: React, Next.js, HTML5, CSS3</Text>
      <Text>- Backend: Node.js, Express, GraphQL, REST</Text>
      <Box marginY={1}>
        <Text bold color="cyan">Interests:</Text>
      </Box>
      <Text>Building web applications, optimizing performance, and exploring new technologies.</Text>
      <Box marginY={1}>
        <Text italic>"Any sufficiently advanced technology is indistinguishable from magic."</Text>
        <Text color="gray">— Arthur C. Clarke</Text>
      </Box>
    </Box>
  );
};

export default About;
