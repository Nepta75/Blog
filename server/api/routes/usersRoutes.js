module.exports = app => {
  const authService = require("../services/authService");
  const userController = require("../controllers/userController");

  app.use('/user', function (req, res, next) {
    if (req.url !== '/login' && !req.url.match(new RegExp('/[^\/]+$'))) {
      return authService.checkIfIsAdmin(req, res, next);
    } else {
      next();
    }
  });

  app.route("/user/login")
    .post(userController.login);

  app.route("/user/:userId")
    .get(userController.getUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById);

  app.route("/user")
    .get(userController.getAllUser)
    .post(userController.createUser);
}