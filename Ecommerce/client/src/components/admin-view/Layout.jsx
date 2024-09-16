import { Outlet } from 'react-router-dom';
import AdminSidebar from './Sidebar';
import AdminHeader from './Header';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Breadcrumbs, useMediaQuery, useTheme } from '@mui/material';

const drawerWidth = 150;

const AdminLayout = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          variant='outlined'
          elevation={0}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <AdminHeader />
          </Toolbar>
        </AppBar>

        {!isMdScreen ? (
          <Drawer
            variant='permanent'
            component={'aside'}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
                alignItems: 'center',
              },
            }}
          >
            <Toolbar />
            <AdminSidebar />
          </Drawer>
        ) : null}

        <Box component='main' sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Breadcrumbs aria-label='breadcrumb' />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
