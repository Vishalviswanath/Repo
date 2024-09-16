import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonForm from '../../components/common/Form';
import { registerFormControls } from '../../config/Index';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth-slice';

const initialState = {
  userName: '',
  email: '',
  password: '',
};

const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        // toast({
        //   title: data?.payload?.message,
        // })
        navigate('/auth/login');
      } else {
        // toast({
        //   title: data?.payload?.message,
        // })
      }
    });
  };

  console.log(formData);
  return (
    <div>
      <h1>Create A New Account</h1>
      <CommonForm
        formControls={registerFormControls}
        buttonText={'SignUp'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p>
        Already have account
        <Link to='/auth/login'>Login</Link>
      </p>
    </div>
  );
};

export default Signup;
