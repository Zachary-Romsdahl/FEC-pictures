// Entry point of express server
const express = require('express');
const { Pictures, ReviewPhotos } = require('../mongoDB/index');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../public'))

app.get('/pictures/itemID/:itemID', (req, res) => {
  console.log('itemID hello', req.params)
  let itemID = req.params.itemID;
  Pictures.find({ item_id: itemID })
    .then(item => {
      // console.log(item)
      let { item_id, store_id, item_pictures, seller_picture, store_picture } = item[0];
      let response = {
        item_id,
        store_id,
        item_pictures,
        seller_picture,
        store_picture
      };
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      console.log(err)
    })
})

// app.get('/pictures/storeID/:storeID', (req, res) => {
//   res.send('storeID')
//   let storeID = req.params.storeID;
// })



app.listen(port, () => {
  console.log(`Pictures server listening on port ${port}`)
})