import axios from 'axios';

const options = {
  url: 'http://localhost:3000/pictures/batch/itemIds',
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  data: {
    itemIds: [1, 2, 4, 7, 15, 20, 111],
  },
};

axios(options)
  .then((response) => {
    // eslint-disable-next-line no-console
    console.log(response.data);
  });
