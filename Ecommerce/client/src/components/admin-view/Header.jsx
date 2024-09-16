import {
  Box,
  Button,
  Drawer,
  List,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { RiLogoutCircleRLine } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const navigate = useNavigate();

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Toolbar />
      <Sidebar />
      <MenuItem>
        <Button sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
          <RiLogoutCircleRLine />
          Logout
        </Button>
      </MenuItem>
    </Box>
  );

  return (
    <>
      <Typography
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate('/admin/dashboard')}
      >
        CartZone
      </Typography>
      <Box>
        {isMdScreen ? (
          <>
            <Button onClick={toggleDrawer}>
              <HiOutlineMenuAlt2 />
            </Button>
            <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Button sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
            <RiLogoutCircleRLine />
            Logout
          </Button>
        )}
      </Box>
    </>
  );
};

export default Header;
