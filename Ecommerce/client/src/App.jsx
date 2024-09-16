import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/auth/Layout';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import AdminLayout from './components/admin-view/Layout';
import AdminDashboard from './pages/admin-view/Dashboard';
import AdminOrders from './pages/admin-view/Orders';
import AdminProducts from './pages/admin-view/Products';
import ShoppingLayout from './components/shopping-view/Layout';
import NotFound from './pages/notfound/index';
import ShoppingHome from './pages/shopping-view/Home';
import ShoppingAccount from './pages/shopping-view/Account';
import ShoppingListing from './pages/shopping-view/Listing';
import ShoppingCheckout from './pages/shopping-view/Checkout';
import CheckAuth from './components/common/Check-auth';
import UnAuthPage from './pages/unauth-page/UnAuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { createRef, useEffect } from 'react';
import { checkAuth } from './store/auth-slice';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
// import locomotiveScroll from 'locomotive-scroll';

function App() {


  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='scroll' >
        <Stack spacing={1}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          <Skeleton variant='rectangular' width={'600px'} height={'300px'} />
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          <Skeleton variant='rectangular' width={'600px'} height={'300px'} />
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          <Skeleton variant='rectangular' width={'600px'} height={'300px'} />
        </Stack>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path='/auth'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
        </Route>
        <Route
          path='/admin'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
        </Route>
        <Route
          path='/shop'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path='home' element={<ShoppingHome />} />
          <Route path='account' element={<ShoppingAccount />} />
          <Route path='listing' element={<ShoppingListing />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
        </Route>
        <Route path='/unauth-page' element={<UnAuthPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
