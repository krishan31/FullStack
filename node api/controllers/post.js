const Post = require('../models/post');
const { get } = require('mongoose');




exports.getPosts =  (req, res) => {
    const skipping = parseInt(req.query.skip) || 0;
    const limiting = parseInt(req.query.limit) || 4;
    const posts = Post.find().skip(skipping).limit(limiting)
    .select("_id title body")   //select used for amount of fileds we select
    .then((posts) => { //for neglect v from postman
        console.log(posts);
        res.json({posts: posts });
    })
    .catch(err => console.log(err));
};



exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log("CREATING POST: ", req.body);
    // post.save( (err, result) => {
    //     if(err){
    //         return res.status(400).json({
    //             error:err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     });
    // });

    post.save()
    .then(result =>{
        res.status(200).json({
            post:result
        });
    });
};

exports.deletePostt = (req, res, next) =>{
    Post.remove({_id: req.params.PostId})
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