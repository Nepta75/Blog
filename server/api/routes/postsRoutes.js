module.exports = app => {
  const authService = require("../services/authService");
  const postController = require("../controllers/postController");

  app.use('/post', function (req, res, next) {
    m = req.method;
    if (m === 'POST' || m === 'PUT' || m === 'DELETE') {
      authService.checkIfIsAdmin(req, res, next);
    } else {
      next();
    }
  });

  app.route("/post")
    .get(postController.getAllPost)
    .post(postController.createPost);

  app.route("/post/:postId")
    .get(postController.getPostById)
    .delete(postController.deletePostById)
    .put(postController.updatePostById);
}