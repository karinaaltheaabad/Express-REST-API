var express = require('express');
var router = express.Router();
let { User }= require('../models');

function asyncHandler(cb){
    return async (req,res, next) => {
        try {
            await cb(req, res, next);
        } catch(err) {
            next(err);
        }
    }
}

router.get('/api/users', asyncHandler(async (req, res) => {
    let user = await User.findAll(); 
    res.status(200).json(user);
}));

router.post('/api/users', asyncHandler(async (req, res) => {
    res.status(201).json(user);
}));


module.exports = router;