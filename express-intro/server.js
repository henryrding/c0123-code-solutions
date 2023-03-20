import express from './node_modules/express/lib/express.js';

const expressAppObject = express();
expressAppObject.listen(8080, () => {
  console.log('Express server is listening on port 8080');
});
