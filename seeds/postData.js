const { Post } = require("../models");

const postdata = [
  {
    postTitle: "Testpost1",
    postContent: "testcontent1",
    userId: 1,
  },
  {
    postTitle: "Testpost2",
    postContent: "testcontent2",
    userId: 2,
  },
  {
    postTitle: "Testpost3",
    postContent: "testcontent3",
    userId: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
