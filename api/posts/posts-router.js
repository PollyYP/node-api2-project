// implement your posts router here
const express = "express";
const Posts = require("./posts-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.find();
    res.json(allPosts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

// Get the post with the specified id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Posts.findById(id);
    if (!post) {
      res
        .status(404)
        .json({ message: `The post with id ${id} does not exist` });
    } else {
      res.json(post);
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "The post information could not be retrieved" });
  }
});

//Create new post
router.post("/api/posts", async (req, res) => {
  const post = req.body;

  try {
    if (!post.title || !post.contents) {
      res
        .status(404)
        .json({ message: "Please provide title and contents for the post" });
    } else {
      const getId = await Posts.insert(post);
      //const newPost = { ...getId, title: post.title, contents: post.contents };
      const newPost = await Posts.findById(getId);
      res.status(201).json(newPost);
    }
  } catch (err) {
    res.status(500).json({
      message: "There was an error while saving the post to the database",
    });
  }
});

module.exports = router;
