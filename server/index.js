// Entry point of express server
const express = require('express');
const cors = require('cors');
const { Pictures, ReviewPhotos } = require('../mongoDB/index');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

// GET request for photos corresponding to a item
app.get('/pictures/itemId/:itemId', (req, res) => {
  const { itemId } = req.params;
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
    .catch((err) => {
      res.status(400).send('Error:', err);
    });
});

// GET request for a list of all items that belong to a store
app.get('/pictures/storeId/:storeId', (req, res) => {
  const { storeId } = req.params;
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
    .catch((err) => {
      res.status(400).send('Error:', err);
    });
});

// Batch Post Request: returns an array of photos corresponding to incoming itemIDs
app.post('/pictures/batch/itemIds', (req, res) => {
  const { itemIds } = req.body;
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
      res.status(400).send('Error:', err);
    });
});

// Batch Post Request: return an array of review photos corresponding to incoming ids
app.post('/reviewPhotos/batch/ids', (req, res) => {
  const ids = req.body.itemIds;
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
    .catch((err) => {
      res.status(400).send('Error:', err);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Pictures server listening on port ${port}`);
});
