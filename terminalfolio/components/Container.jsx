import React, { memo } from 'react';
import { Box } from 'ink';

const Container = memo(({ 
  children,
  borderColor = 'blue',
  borderStyle = 'round',
  minHeight = 24,
  width = '100%',
  maxWidth = 100,
  padding = 1,
  ...props
}) => {
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      paddingX={2}
      paddingY={1}
      width={width}
      borderColor={borderColor}
      borderStyle={borderStyle}
      minHeight={minHeight}
      flexShrink={0}
      flexGrow={0}
      overflow="hidden"
      {...props}
      style={{
        maxWidth: maxWidth,
        minWidth: 60,
        ...(props.style || {})
      }}
    >
      {children}
    </Box>
  );
});

Container.displayName = 'Container';

export default Container;
