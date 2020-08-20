const User = require('../models/user');
const { get } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

exports.loginPost = (checkAuth, (req, res, next) =>{
    User.find( { email: req.body.email})
    .exec()
    .then(user =>{  //user is an empty array for check login
            if(user.length < 1) {
                return res.status(401).json({
                    message: "AUTH failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                if(err){
                    return res.status(401).json({
                        message: "AUTH failed"
                    });

                }
                if(result){
                  const token =   jwt.sign({ 
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    "secret",
                    {
                        expiresIn: "1hr"
                    }

                    );
                    console.log(result);
                    return res.status(200).json({
                        message: "Auth Succes",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });
            })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})