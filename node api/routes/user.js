const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const deleteUser = require('../controllers/deleteuser')
const loginUser = require('../controllers/loginuser');
// const signUser = require('../controllers/signuser');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

//sign Up routes
router.post("/signup", (req, res, next) =>{
    User.find({email: req.body.email})  //this we are using to check not creaating same user
    .then(user =>{
        if(user.length >= 1){
            return res.status(409).json({
                message: "Mail exists"
            })
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                 } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    user
                    .save()
                    .then(result =>{
                        console.log(result);
                        res.status(201).json({
                            
                            message: 'User Created'
                        });
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
        
                    }
            });
        }
    });
    
    
});

//login
router.post('/login',loginUser.loginPost );

//delete router
router.delete('/:userId',deleteUser.deletePost );




module.exports = router;