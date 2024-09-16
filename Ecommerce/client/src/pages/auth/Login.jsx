import { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonForm from '../../components/common/Form';
import { loginFormControls } from '../../config/Index';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth-slice';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setForData] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload.success) {
        // toast({
        //   title: data?.payload?.message,
        // });
      } else {
        // toast({
        //   title: data?.payload?.message,
        // });
      }
    });
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <CommonForm
        formControls={loginFormControls}
        buttonText={'SignUp'}
        formData={formData}
        setFormData={setForData}
        onSubmit={onSubmit}
      />
      <p>
        Already have account
        <Link to='/auth/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;
