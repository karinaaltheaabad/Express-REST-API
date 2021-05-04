var express = require('express');
var router = express.Router();
let { Course }= require('../models');

function asyncHandler(cb){
    return async (req,res, next) => {
        try {
            await cb(req, res, next);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = router; 