import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid
      container
      sx={{ flexDirection: 'row', transition: 'all 2s ease-in-out' }}
    >
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 'auto',
          color: 'var(--orange)',
        }}
      >
        <Typography variant='h6'>Welcome to Login</Typography>
        <Typography variant='caption'>Don't have Account?</Typography>
        <Link to='register'>
          <Button>SignUp</Button>
        </Link>{' '}
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          background: 'rgba(251, 119, 60, 0.9) ',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '10px',
        }}
      >
        <Box sx={{ padding: '10px' }}>
          <Typography variant='h4' sx={{ textAlign: 'left', width: '100%' }}>
            Login
          </Typography>
          <FormControl sx={{ height: '100%' }}>
            <TextField label='Email' variant='outlined' sx={{ m: '15px 0' }} />
            <TextField label='Password' variant='outlined' />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                m: '15px 0',
              }}
            >
              <Checkbox defaultChecked />
              <Typography>Remember me</Typography>
              <span style={{ flexGrow: 1, marginLeft: 0 }}>
                <Button>Forgot Password</Button>
              </span>
            </Box>
            <Button
              variant='contained'
              sx={{ background: 'var(--pink)', color: 'var(--navey)' }}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
