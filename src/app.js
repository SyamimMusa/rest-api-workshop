import express from 'express';
import mongoose from 'mongoose';
import config from './config/index.js';

import routes from './routes/index.js';

const app = express();


app.use(express.json());

app.use('/', routes);



// mongoose.connect(config.mongoUrl, {
//     family: 4,
//     authSource: 'admin'
// })
// .then(() => {
//     console.log(`Connected to mongodb instance ${config.mongoUrl}`);
//     app.listen(config.port, () => {
//                 console.log(`App listening on port ${config.port}`);
//     })
// })
// .catch((err) => {
//     console.log(err);
// })
