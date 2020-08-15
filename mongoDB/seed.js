/* eslint-disable no-console */
const { Pictures, ReviewPhotos } = require('./index.js');
const { pictures, reviewPhotos } = require('./sampleData.js');

Pictures.create(pictures)
  .then(() => {
    console.log('Filled photos');
  })
  .catch((err) => {
    console.log('Error', err);
  });

ReviewPhotos.create(reviewPhotos)
  .then(() => {
    console.log('Filled ReviewPhotos');
  })
  .catch((err) => {
    console.log('Error:', err);
  });
