import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';

import * as functions from 'firebase-functions';

admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
  const user = req.body;
  await admin.firestore().collection('users').add(user);
  res.status(201).send();
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
