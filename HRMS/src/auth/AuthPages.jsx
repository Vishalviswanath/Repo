import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

const AuthPages = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          border: '1px solid black',
          borderRadius: '20px',
          overflow: 'hidden',
          width: '850px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthPages;
