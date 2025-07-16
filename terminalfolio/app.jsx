import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

// Import components
import Animation from './components/Animation.jsx';
import Home from './pages/Home.jsx';

// Main App component
const App = () => {
  // State management
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show animation for 3 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle command submission
  const handleSubmit = (value) => {
    const cmd = value.toLowerCase().trim();
    
    if (!cmd) return;
    
    setInput('');
    
    // Only handle exit command for now
    if (cmd === 'exit') {
      process.exit(0);
    }
  };

  // Render header
  const renderHeader = () => (
    <Box justifyContent="center" alignItems="center" marginBottom={1}>
      <Text bold color="cyan">ML-Terminalfolio</Text>
    </Box>
  );

  // Render footer
  const renderFooter = () => (
    <Box justifyContent="center" alignItems="center" marginTop={1}>
      <Text color="gray">© 2025 ML-Terminalfolio</Text>
    </Box>
  );

  // Render command input
  const renderCommandInput = () => (
    <Box marginTop={1} justifyContent="center" alignItems="center">
      <Text color="green">❯ </Text>
      <TextInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
      />
    </Box>
  );

  // Main render
  return (
    <Box flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      {renderHeader()}
      
      <Box 
        flexDirection="column" 
        alignItems="center"
        justifyContent="center"
        width={50}
        marginY={2}
      >
        {isLoading ? (
          <Animation onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Home />
            <Box marginY={1} alignItems="center">
              <Text color="gray">Type 'exit' to quit</Text>
            </Box>
            {renderCommandInput()}
          </>
        )}
      </Box>
      
      {renderFooter()}
    </Box>
  );
};

export default App;
