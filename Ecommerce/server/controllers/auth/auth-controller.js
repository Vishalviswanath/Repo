const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// Register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({ success: false, message: 'Email already exists' });
    }
    const hasPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName: userName,
      email: email,
      password: hasPassword,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error registering user',
    });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: 'Email not found',
      });

    const isMatch = await bcrypt.compare(password, checkUser.password);

    if (!isMatch)
      return res.json({
        success: false,
        message: 'Password is incorrect',
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        email: checkUser.email,
        role: checkUser.role,
      },
      'CLIENT_SECRET_KEY',
      { expiresIn: '60m' }
    );

    res.cookie('token', token, { httpOnly: true, secure: false }).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error registering user',
    });
  }
};

//Logout

const logoutUser = (req, res) => {
  res.clearCookie('token').json({
    success: true,
    message: 'Logged out Succesfully',
  });
};

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  try {
    const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
