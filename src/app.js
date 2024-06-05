import express from 'express';
import mongoose from 'mongoose';
import config from './config/index.js';

import { errorHandler } from './lib/errorhandler.js';



import routes from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(errorHandler);


mongoose.connect(config.mongoUrl, {
    family: 4,
    authSource: 'admin',
}).then(() => {
    console.log('Conneced to MongoDb', config.mongoUrl);

    app.listen(config.port, () => {
        console.log(`App listening on port ${config.port}`);
    });
}).catch((err) => {
    console.log('Something went wrong!');
    console.log(err);
});
