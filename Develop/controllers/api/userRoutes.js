const router = require('express').Router();
const session = require('express-session');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');


// Create a new user.
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
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
    // Search for email address in database.
    try {
        const userData = await User.findOne({
            where: {
              email: req.body.email,
            },
        });

    if (!userData) {
     res
       .status(400)
       .json ({message: 'Your email address or password is incorrect. Please try again!'});
    return;
    }
     
    // Validate the password with password stored in the database against email address.
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
    res
        .status(400)
        .json({ message:  'Your email address or password is incorrect. Please try again!'});
    return;
    }

req.session.save(() => {
    req.session.user_id = userData.id,
    req.session.logged_in = true;

    res.json({user: userData, message: 'Welcome to MixMate'});
});

} catch (err) {
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





