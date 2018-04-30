const app = require('./app');
const config = require('./config');

const port = config.SERVER_PORT || 9000;

app.mongoose.Promise = global.Promise;
app.mongoose.connect(config.DATABASE);

// eslint-disable-next-line no-console
app.express.listen(port, () => console.log('We be listening on port', port));
