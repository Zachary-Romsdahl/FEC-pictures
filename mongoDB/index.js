const mongoose = require('mongoose');
const { pictures, reviewPhotos } = require('./sampleData');

mongoose.connect('mongodb://localhost/pictures', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
})

const PicturesSchema = mongoose.Schema({
  item_id: Number,
  store_id: Number,
  item_pictures: [{ large: String, normal: String, thumbnail: String }],
  seller_picture: String,
  store_picture: String
});

//Pictures Collection
let Pictures = mongoose.model('Pictures', PicturesSchema)

//Deletes everything in Pictures collection and replaces them to prevent duplication
Pictures.deleteMany({})
  .then(res => {
    Pictures.create(pictures)
  })


//ReviewPhotos collection
const ReviewPhotosSchema = mongoose.Schema(
  {
    id: Number,
    user_picture: String,
    review_picture: String
  });

let ReviewPhotos = mongoose.model('ReviewPhotos', ReviewPhotosSchema);

//Deletes everything in Pictures collection and replaces them to prevent duplication
ReviewPhotos.deleteMany({})
  .then(res => {
    ReviewPhotos.create(reviewPhotos)
  })

module.exports.Pictures = Pictures;
module.exports.ReviewPhotos = ReviewPhotos;