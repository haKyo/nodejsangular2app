const user = require('./user');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//photo Schema
const photoSchema = new Schema({
  
  user_id : String,
  caption : String,
  image_path: String,
  date: String

});

var photo = module.exports = mongoose.model('photo',photoSchema,'photos');

module.exports.getPhotoByUser_Id = function(user_id, callback){
  const query = {user_id : user_id}
  photo.findOne(query, callback);
}