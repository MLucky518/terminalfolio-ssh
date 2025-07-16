import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

import Animation from './components/Animation.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (value) => {
    const cmd = value.toLowerCase().trim();
    if (!cmd) return;
    setInput('');

    if (cmd === 'exit') {
      process.exit(0);
    }
  };

  return (
    <Box flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      <Box justifyContent="center" marginBottom={1}>
        <Text bold color="cyan">ML-Terminalfolio</Text>
      </Box>

      <Box flexDirection="column" alignItems="center" justifyContent="center" width={50} marginY={2}>
        {isLoading ? (
          <Animation onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Home />
            <Box marginY={1}><Text color="gray">Type 'exit' to quit</Text></Box>
            <Box marginTop={1}>
              <Text color="green">❯ </Text>
              <TextInput value={input} onChange={setInput} onSubmit={handleSubmit} />
            </Box>
          </>
        )}
      </Box>

      <Box marginTop={1}><Text color="gray">© 2025 ML-Terminalfolio</Text></Box>
    </Box>
  );
};

export default App;
