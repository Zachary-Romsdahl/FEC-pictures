/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pictures', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database successfully connected');
});

const PicturesSchema = mongoose.Schema({
  item_id: Number,
  store_id: Number,
  item_pictures: [{ large: String, normal: String, thumbnail: String }],
  seller_picture: String,
  store_picture: String,
});

// Pictures Collection
const Pictures = mongoose.model('Pictures', PicturesSchema);

// ReviewPhotos collection
const ReviewPhotosSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  user_picture: String,
  review_picture: String,
});

const ReviewPhotos = mongoose.model('ReviewPhotos', ReviewPhotosSchema);

module.exports.Pictures = Pictures;
module.exports.ReviewPhotos = ReviewPhotos;
