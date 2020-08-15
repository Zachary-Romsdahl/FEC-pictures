/* eslint-disable no-console */
const mongoose = require('mongoose');
const { pictures, reviewPhotos } = require('./sampleData');

mongoose.connect('mongodb://localhost/pictures', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
});

const PicturesSchema = mongoose.Schema({
  item_id: { type: Number, unique: true },
  store_id: Number,
  item_pictures: [{ large: String, normal: String, thumbnail: String }],
  seller_picture: String,
  store_picture: String,
});

// Pictures Collection
const Pictures = mongoose.model('Pictures', PicturesSchema);

Pictures.create(pictures)
  .then(() => {
    console.log('Filled photos');
  })
  .catch((err) => {
    console.log('Error:', err);
  });

// ReviewPhotos collection
const ReviewPhotosSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  user_picture: String,
  review_picture: String,
});

const ReviewPhotos = mongoose.model('ReviewPhotos', ReviewPhotosSchema);

ReviewPhotos.create(reviewPhotos)
  .then(() => {
    console.log('Filled ReviewPhotos');
  })
  .catch((err) => {
    console.log('Error:', err);
  });

module.exports.Pictures = Pictures;
module.exports.ReviewPhotos = ReviewPhotos;
