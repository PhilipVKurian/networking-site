const sequelize = require('../config/connection');
const { User, UserPost, Category, Comment, Likes } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const userPostData = require('./userPostData.json');
const commentData = require('./commentData.json');
const likesData = require('./likesData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const userPost = await UserPost.bulkCreate(userPostData, {
    individualHooks: true,
    returning: true,
  });

  const comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const likes = await Likes.bulkCreate(likesData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();