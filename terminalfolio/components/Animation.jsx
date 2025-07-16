import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';

// Animation frames with fixed wizard and moving bug/fireball
// Each frame is exactly the same width to prevent layout shifts
const frames = [
  '🧙‍♂️    🐛',  // Bug far right
  '🧙‍♂️  🔴 🐛',  // Fireball launched
  '🧙‍♂️   🔴🐛',  // Fireball closer
  '🧙‍♂️    💥',  // Bug hit
  '🧙‍♂️✨    '   // Wizard celebrates
];

// Loading messages - more quotes for longer animation
const messages = [
  'Loading...',
  'Casting spells...',
  'Debugging bugs...',
  'Optimizing code...',
  'Brewing potions...',
  'Summoning components...',
  'Enchanting UI...',
  'Banishing errors...'
];

// Animation component with controlled updates
const Animation = ({ onComplete }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [cycles, setCycles] = useState(0);
  
  useEffect(() => {
    // Animation loop with controlled timing
    const interval = setInterval(() => {
      // Update frame
      setFrameIndex(prev => {
        const nextFrame = (prev + 1) % frames.length;
        // Count completed cycles
        if (nextFrame === 0) {
          setCycles(c => c + 1);
          setMessageIndex(m => (m + 1) % messages.length);
        }
        return nextFrame;
      });
      
      // Complete after 10 cycles (much longer animation)
      if (cycles >= 10 && onComplete) {
        clearInterval(interval);
        onComplete();
      }
    }, 800); // Even slower animation for stability
    
    return () => clearInterval(interval);
  }, [frameIndex, cycles, onComplete]);
  
  return (
    <Box 
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={40}
    >
      <Text color="magenta" bold>✨ Loading ✨</Text>
      
      <Box marginY={2} alignItems="center" justifyContent="center">
        <Text color="yellow">{frames[frameIndex]}</Text>
      </Box>
      
      <Box marginY={2} alignItems="center" justifyContent="center">
        <Text color="green">{messages[messageIndex]}</Text>
      </Box>
    </Box>
  );
};

export default Animation;
