const { app } = require('./index.js');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Pictures server listening on port ${port}`);
});
