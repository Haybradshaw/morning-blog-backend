const Post = require('../models/post')

module.exports = {
    index,
    create,
    deletePost,
}

function deletePost(req, res) {
    Post.deletePost(req.params.id)
    res.redirect('/')
}

function create(req, res) {
    res.redirect('/')
    Post.create(req.body)
}

function index(req, res) {
    res.render('posts/index', {
        posts: Post.getAll(),
    })
}