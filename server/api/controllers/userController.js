
const authService = require('../services/authService');
const userSchema = require('../models/userModel');
const crypto = require("crypto");


exports.getDefaultPassword= (mdp)=>{
  return crypto.createHash("sha512").update(mdp).digest("base64");
}

exports.login = (req, res) => {
  const {
    pseudo,
    mdp
  } = req.body;

  if (!pseudo || !mdp) {
    res.status(422).send({ "erreur": "missing parameters" });
  }

  userSchema.findOne({
    pseudo,
    mdp,
  }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      const accessToken =  authService.generateToken({
        "pseudo": user.pseudo,
        "admin": user.admin,
      });
  
      res.status(200).json({
        success: true,
        userId: user._id,
        admin: user.admin,
        token: accessToken,
      });
    } else {
      res.status(200).send({
        success: false,
        message: "utilisateur introuvable"
      });
    }
  });
};

exports.getUserById = (req, res) => {
  const userId = req.params.userId;
  userSchema.findById(userId, (err, user) => {
    if (err) return res.send(err);
    if (user) {
       res.status(200).json({
         ...user._doc,
         succes: true
       });
    } else {
      res.status(404).send({
        success: false,
        message: "aucun utilisateur  trouvé"
      });
    }
  })
}

exports.updateUserById = (req, res) => {
  const userId = req.params.userId;
  userSchema.findOneAndUpdate({ _id: userId }, req.body, {}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(user);
  })
}

exports.deleteUserById = (req, res) => {
  userId = req.params.userId;
  userSchema.deleteOne({ _id: userId }, {}, (err, user) => {
    if (err) res.send(err);
    return res.status(200).json({ 
      success: true,
      message: 'User successfully deleted'
    });
  })
}

exports.createUser = (req, res) => {
  const newUser = new userSchema(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(user);
  })
}

exports.getAllUser = (req, res) => {
  userSchema.find({}, (err, users) => {
    if (err) return res.send(err);
    res.status(200).json({
      users,
      success: true
    })
  })
}