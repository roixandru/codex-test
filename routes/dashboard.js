const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.user) return res.redirect('/login');
  next();
});

router.get('/', (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

module.exports = router;
