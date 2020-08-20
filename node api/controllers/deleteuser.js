const User = require('../models/user');
const { get } = require('mongoose');



exports.deletePost = (req, res, next) =>{
    User.remove({_id: req.params.userId})
    .exec()
    .then(result =>{
        res.status(200).json({
            message: "User deleted"
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}