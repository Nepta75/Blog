const postSchema = require('../models/postModel');

exports.getAllPost = (req, res) => {
  postSchema.find().
  populate('category').
  exec((err, posts) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(posts);
  });
};

exports.createPost = (req, res) => {
  const newPost = new postSchema(req.body);
  newPost.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  });
};

exports.getPostById = (req, res) => {
  postSchema.findById(req.params.postId)
  .populate('category')
  .exec((err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  });
};

exports.updatePostById = (req, res) => {
  console.log('req.body :>> ', req.body);
  postSchema.findOneAndUpdate({ _id: req.params.postId}, req.body, {}, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  })
}

exports.deletePostById = (req, res) => {
  postSchema.deleteOne({
    _id: req.params.postId
  }, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json({ 
      success: true,
      message: 'Post successfully deleted'
    });
  });
};