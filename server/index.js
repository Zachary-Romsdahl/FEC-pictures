// Entry point of express server
const express = require('express');
const cors = require('cors');
const { Pictures, ReviewPhotos } = require('../mongoDB/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

// endpoint form: '/pictures/batch?itemIds[]=1&itemIds[]=2'
// or '/pictures/batch?storeIds[]=1&storeIds[]=2'
// responds with an array of pictures corresponding to the requested itemIds or storeIds
app.get('/pictures/batch', (req, res) => {
  const { itemIds, storeIds } = req.query;
  if (itemIds !== undefined && Array.isArray(itemIds) && storeIds === undefined) {
    Pictures
      .find()
      .where('item_id')
      .in(itemIds)
      .then((items) => {
        const response = items.map((item) => {
          const {
            // eslint-disable-next-line camelcase
            item_id, store_id, item_pictures, seller_picture, store_picture,
          } = item;
          return ({
            item_id, store_id, item_pictures, seller_picture, store_picture,
          });
        });
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(400).send({ error: err });
      });
  } else if (storeIds !== undefined && Array.isArray(storeIds) && itemIds === undefined) {
    Pictures
      .find()
      .where('store_id')
      .in(storeIds)
      .then((items) => {
        const response = items.map((item) => {
          const {
            // eslint-disable-next-line camelcase
            item_id, store_id, item_pictures, seller_picture, store_picture,
          } = item;
          return ({
            item_id, store_id, item_pictures, seller_picture, store_picture,
          });
        });
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(400).send({ error: err });
      });
  } else {
    res.status(400)
      .send({
        error: 'Please use query parameters itemIds or storeIds '
          + 'as an array to specify the itemIds you would like. '
          + 'Example endpoint: /pictures/batch?itemIds[]=1&itemIds[]=2 '
          + 'to retrieve photos corresponding to itemIds: [1,2]',
      });
  }
});

// endpoint form: '/pictures?itemId=1 or '/pictures?storeId=1'
app.get('/pictures', (req, res) => {
  const { itemId, storeId } = req.query;
  if (itemId !== undefined && storeId === undefined) {
    Pictures.find({ item_id: itemId })
      .then((item) => {
        const {
          // eslint-disable-next-line camelcase
          item_id, store_id, item_pictures, seller_picture, store_picture,
        } = item[0];
        const response = {
          item_id,
          store_id,
          item_pictures,
          seller_picture,
          store_picture,
        };
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(400).send({ error: `itemId: ${itemId} does not exist in database.` });
      });
  } else if (storeId !== undefined && itemId === undefined) {
    Pictures.find({ store_id: storeId })
      .then((items) => {
        const response = items.map((item) => {
          const {
            // eslint-disable-next-line camelcase
            item_id, store_id, item_pictures, seller_picture, store_picture,
          } = item;
          return ({
            item_id, store_id, item_pictures, seller_picture, store_picture,
          });
        });
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(400)
          .send({
            error: `storeId: ${storeId} does not exist in database.`,
          });
      });
  } else if (itemId !== undefined && storeId !== undefined) {
    Pictures.find({ item_id: itemId, store_id: storeId })
      .then((items) => {
        const response = items.map((item) => {
          const {
            // eslint-disable-next-line camelcase
            item_id, store_id, item_pictures, seller_picture, store_picture,
          } = item;
          return ({
            item_id, store_id, item_pictures, seller_picture, store_picture,
          });
        });
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(400)
          .send({
            error: `The combination storeId: ${storeId} `
              + `and itemId: ${itemId} does not exist`,
          });
      });
  } else {
    res.status(400)
      .send({
        error: 'Please use query parameters itemId or storeId'
          + ' or both to specify the pictures you would like. '
          + 'Example endpoint: /pictures?itemId=1 to retrieve photos '
          + 'corresponding to itemId: 1',
      });
  }
});

// endpoint example: '/reviewPhotos/batch?ids=[1,2,3,4,..]'
app.get('/reviewPhotos/batch', (req, res) => {
  const { ids } = req.query;
  ReviewPhotos
    .find()
    .where('id')
    .in(ids)
    .then((items) => {
      const response = items.map((item) => {
        // eslint-disable-next-line camelcase
        const { id, user_picture, review_picture } = item;
        return ({ id, user_picture, review_picture });
      });
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(400)
        .send({
          error: 'Please use the query parameter, ids. '
          + 'Example endpoint: /reviewPhotos/batch?ids[]=1&ids[]=2 '
          + 'to retrieve review photos corresponding to ids: [1,2]',
        });
    });
});

module.exports.app = app;
