const express = require('express');
const bodyParser = require('body-parser');
//const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  if (
    !password ||
    password.trim().length === 0 ||
    !email ||
    email.trim().length === 0
  ) {
    return res
      .status(422)
      .json({ message: 'An email and password needs to be specified!' });
  }

  try {
    //uncomment this line later (value for AUTH_ADDRESS has to be supplied)
    // const hashedPW = await axios.get(`http://${process.env.AUTH_ADDRESS}/hashed-password/${password}`);
    const hashedPW = "dummy text"
    console.log(hashedPW, email);
    res.status(201).json({ message: 'User created!' });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'Creating the user failed - please try again later.', actualError: err.message });
  }
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (
    !password ||
    password.trim().length === 0 ||
    !email ||
    email.trim().length === 0
  ) {
    return res
      .status(422)
      .json({ message: 'An email and password needs to be specified!' });
  }

  //uncomment this later
  //const hashedPassword = password + '_hash';
  // const response = await axios.get(
  //   `http://${process.env.AUTH_ADDRESS}/token/${hashedPassword}/${password}`);

  const response = { status: 200, data: { token: 'abc' } }
  if (response.status === 200) {
    return res.status(200).json({ token: response.data.token });
  }
  return res.status(response.status).json({ message: 'Logging in failed!' });
});

app.listen(3001);
