const app = require('./app');

const port = process.env.PORT || 9000;

app.mongoose.Promise = global.Promise;
app.mongoose.connect('mongodb://localhost/stw2');

// eslint-disable-next-line no-console
app.express.listen(port, () => console.log('We be listening on port', port));
