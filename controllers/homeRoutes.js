const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Comment, User, UserPost } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try{
    // const categoriesData = await Category.findAll({attributes: 'name'});
    // //gets the plain object
    // const categories = categoriesData.map((cat) => cat.get({ plain: true }));
    res.render('carousel', {loggedIn: req.session.loggedIn});
  }catch(err){
    res.status(500).json(err);
  }
});
  // Use withAuth middleware to protect access to route
router.get('/create-post', withAuth, async (req, res) => {
  try{
    res.render('create-post', {loggedIn: req.session.loggedIn});
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
});
  
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }  
    res.render('login');
});
  
module.exports = router;