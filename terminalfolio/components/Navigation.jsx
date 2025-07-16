import React, { memo, useCallback } from 'react';
import { Box, Text } from 'ink';

const pages = [
  { id: 'home', label: '🏠 Home' },
  { id: 'about', label: '📜 About' },
  { id: 'projects', label: '✨ Projects' },
  { id: 'blog', label: '📝 Blog' },
  { id: 'spells', label: '🔮 Spells' },
];

const NavItem = memo(({ id, label, isActive, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <Box 
      key={id}
      marginX={1} 
      onClick={handleClick}
      paddingX={1}
      paddingY={1}
    >
      <Text 
        bold={isActive}
        color={isActive ? 'magenta' : 'blue'}
        backgroundColor={isActive ? 'black' : undefined}
        underline={isActive}
      >
        {label}
      </Text>
    </Box>
  );
});

NavItem.displayName = 'NavItem';

const Navigation = ({ currentPage, onNavigate }) => {
  const handleNavigate = useCallback((pageId) => {
    onNavigate(pageId.charAt(0).toUpperCase() + pageId.slice(1));
  }, [onNavigate]);

  return (
    <Box flexDirection="column" width="100%">
      <Box 
        flexDirection="row" 
        justifyContent="center"
        paddingY={1}
        borderStyle="single"
        borderTop={false}
        borderLeft={false}
        borderRight={false}
      >
        {pages.map((page) => (
          <NavItem
            key={page.id}
            id={page.id}
            label={page.label}
            isActive={currentPage.toLowerCase() === page.id}
            onClick={handleNavigate}
          />
        ))}
      </Box>
    </Box>
  );
};

export default memo(Navigation);
