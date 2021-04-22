const catSchema = require('../models/catModel');

exports.getAllCat = (req, res) => {
  catSchema.find({}, (err, posts) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(posts);
  });
};

exports.createCat = (req, res) => {
  const newCat = new catSchema(req.body);
  newCat.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  });
};

exports.getCatById = (req, res) => {
  catSchema.findById(req.params.catId, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  });
};

exports.updateCatById = (req, res) => {
  catSchema.findOneAndUpdate({ _id: req.params.catId}, req.body, {}, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(post);
  })
}

exports.deleteCatById = (req, res) => {
  catSchema.deleteOne({
    _id: req.params.catId
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