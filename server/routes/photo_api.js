const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../models/photo');
const db = "mongodb://viet:viet@ds147551.mlab.com:47551/imaggie";
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("error!" + error);
    }
});
// get users
router.get('/photos', function (req, res) {
    console.log('get request photos');
    Photo.find({})
        .exec(function (err, photos) {
            if (err) {
                console.log("error retrieving photos");
            } else {
                res.json(photos);
            }
        });
});
// get single photo 
router.get('/photos/:id', function (req, res) {
    console.log('get request single photo');
    Photo.findById(req.params.id)
        .exec(function (err, photo) {
            if (err) {
                console.log("error retrieving photos");
            } else {
                res.json(photo);
            }
        });
});
// get photos by user_id
router.get('/photosofuser/:user_id', function(res, req){
    user_id = req.params.user_id;
    console.log('get photos by user_id');
    Photo.findOne({user_id : 'user_id'}, function (err, photo){
            if(err){
                throw err;
                console.log("error get photos by user id");
            }else {
                console.log(photo);
               
            }
        });
});
// post new photo
router.post('/photo', function (req, res) {
    console.log('post a photo');
    let newPhoto = new Photo({
        caption : req.body.caption,
        user_id : req.body.user_id,
        image_path : req.body.image_path,
        date : req.body.date
    });

    newPhoto.save(function (err, insertedPhoto) {
        if (err) {
            console.log('error');
        } else {
            res.json(insertedPhoto);
        }
    });
});
// update photo into database
router.put('/photo/:id', function (req, res) {
    console.log('update a photo');
    Photo.findByIdAndUpdate(req.params.id,
        {
            $set: {
                caption: req.body.caption,
                image_path: req.body.image_path,
                date_create: req.body.date_create
            }
        },
        {
            new: true
        },
        function (err, updatedPhoto) {
            if (err) {
                res.send("error");
            } else {
                res.json(updatedPhoto);
            }
        }
    );
});
// delete photo
router.delete('/photo/:id', function (req, res) {
    console.log('delete photo');
    Photo.findByIdAndRemove(req.params.id, function (err, deletedPhoto) {
        if (err) {
            res.send('err');
        } else {
            res.json(deletedPhoto);
        }
    });
});
module.exports = router;