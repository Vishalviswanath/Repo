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

const Signup = () => {
  return (
    <Grid
      container
      sx={{ flexDirection: 'row-reverse', transition: 'all 2s ease-in-out' }}
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
        <Typography variant='h6'>Welcome to Signup</Typography>
        <Typography variant='caption'>Already SiginedUp?</Typography>
        <Link to='login'>
          <Button>Login</Button>
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
            Signup
          </Typography>
          <FormControl sx={{ height: '100%' }}>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
            />
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              type='password'
              margin='normal'
            />
            <TextField
              label='Confirm Password'
              variant='outlined'
              fullWidth
              type='password'
              margin='normal'
            />
            <Button variant='contained' color='primary' fullWidth>
              Sign Up
            </Button>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
