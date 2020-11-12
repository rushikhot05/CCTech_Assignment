const express = require('express');
const router = express.Router();
const Post = require("../models/post");

router.get('/allpost', (req, res) => {
    Post.find()
    .sort('-createdAt')
    .then((posts) => {
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
});

router.post('/createpost', (req, res) => {
    const{ photo, title } = req.body
    const post = new Post({
        photo: req.body.photo,
        title: req.body.title
    })
    post.save().then(result => {
        res.json({post:result})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;