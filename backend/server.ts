import express from 'express';

import router from './router';

import cors from 'cors';

import nodemailer from 'nodemailer';

const app: express.Express = express();
const SERVER_PORT  = process.env.SERVER_PORT || 5050;
const URL_CORS = process.env.URL_CORS;


app.use(cors({
    "origin": [URL_CORS], 
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "allowedHeaders": ["Origin", " X-Requested-With", "Content-Type", "Accept"],
    "credentials": true,
    "maxAge": 3600 //cache this information for 3600 seconds ,  need to make a new OPTIONS request every single time.
}));




app.use(router);


// lancer l'appli
app.listen(SERVER_PORT, () => {
  console.log(`App running on port ${SERVER_PORT}`);
});

