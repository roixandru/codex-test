const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Dummy user store
const users = [];

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',
  body('email').isEmail(),
  body('password').notEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash('error', 'Invalid credentials');
      return res.redirect('/login');
    }
    const user = users.find(u => u.email === req.body.email);
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      req.session.user = user;
      return res.redirect('/dashboard');
    }
    req.flash('error', 'Invalid credentials');
    res.redirect('/login');
  });

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash('error', 'Check the form for errors');
      return res.redirect('/register');
    }
    const hashed = bcrypt.hashSync(req.body.password, 10);
    users.push({ email: req.body.email, password: hashed });
    req.flash('success', 'You can now login');
    res.redirect('/login');
  });

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;
