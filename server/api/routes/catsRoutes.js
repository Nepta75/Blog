module.exports = app => {
  const authService = require("../services/authService");
  const catController = require("../controllers/catController");

  app.use('/cat', (req, res, next) => {
    m = req.method;
    if (m === 'POST' || m === 'PUT' || m === 'DELETE') {
      authService.checkIfIsAdmin(req, res, next);
    } else {
      next();
    }
  });

  app.route("/cat")
    .get(catController.getAllCat)
    .post(catController.createCat);

  app.route("/cat/:catId")
    .get(catController.getCatById)
    .delete(catController.deleteCatById)
    .put(catController.updateCatById);
}