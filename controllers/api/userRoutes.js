const router = require('express').Router();

const { User } = require('../../models');
const withAuth = require('../../utils/auth');


// Create a new user.
router.post('/', async (req, res) => {
    try {
       
      // Hash the password. 
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    // Create a user.  
      const userData = await User.create({
            name: req.body.name,
            // email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Login using email address and password.
router.post('/login', async (req, res) => {
  console.log("this REQ BODY=: ", req.body)
  // Search for email address in database.
  try {
    console.log('hello')
    const userData = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log("this is user data: ", userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Your email address or password is incorrect. Please try again!' });
      return;
    }

    // Use bcrypt.compare() to validate hashed password.
    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Your email address or password is incorrect. Please try again!' });
      return;
    }
    console.log(validPassword)

    
    req.session.save(() => {

      req.session.user_id = userData.id,
        req.session.logged_in = true;

      res.json({ user: userData, message: 'Welcome to MixMate' });
    });

  } catch (err) {

    console.log(err)
    res.status(400).json(err);
  }
});

// logout
router.post ('/logout', (req, res) => {
  if (req.session.logged.in) {
  req.session.destroy(() => {
    res.status(204).end();
  });
  } else {
  res.status(404).end();
  }
});

// Delete an existing user 
router.delete('/:id', withAuth, (req, res) => {
User.destroy({
  where: {
    id: req.params.id
  }
})
.then(userData => {
if (!userData){
res.status(404).json('This id does not exist');
return;
}
res.json(userData);
})
.catch(err => {
 console.log(err)   
 res.status(500).json(err)  
});
});

module.exports = router;