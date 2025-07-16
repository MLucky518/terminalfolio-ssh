import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';

const frames = [
  '🧙‍♂️    🐛',
  '🧙‍♂️  🔴 🐛',
  '🧙‍♂️   🔴🐛',
  '🧙‍♂️    💥',
  '🧙‍♂️✨    '
];

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

const Animation = ({ onComplete }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        const next = (prev + 1) % frames.length;
        if (next === 0) {
          setCycleCount(c => c + 1);
          setMessageIndex(m => (m + 1) % messages.length);
        }
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!finished && cycleCount >= 3) {
      setFinished(true);
      onComplete?.();
    }
  }, [cycleCount, finished, onComplete]);

  return (
    <Box flexDirection="column" alignItems="center" justifyContent="center" width={40}>
      <Text color="magenta" bold>✨ Loading ✨</Text>
      <Box marginY={2}><Text color="yellow">{frames[frameIndex]}</Text></Box>
      <Box marginY={2}><Text color="green">{messages[messageIndex]}</Text></Box>
    </Box>
  );
};

export default Animation;
