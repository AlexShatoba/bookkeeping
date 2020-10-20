import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';

import {login} from './login';

import * as functions from 'firebase-functions';

admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
  const user = req.body;
  await admin.firestore().collection('users').add(user);
  res.status(201).send();
});

app.get('/', async (req, res) => {
  const users = await admin.firestore().collection('users').get().then(users => {console.log(users); return users});
  res.status(200).send(JSON.stringify({users}));
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.user = functions.https.onRequest(app);
exports.login = functions.https.onRequest(login);
