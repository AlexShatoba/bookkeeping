import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';

const app = express();

app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log('email', email, 'password', password, 'body', req.body);
  const isExist = await admin.firestore().collection('users').get()
    .then(doc => doc.docs.find(user => user.data()['email'] === email && user.data()['password'] === password));

  if (!!isExist) {
    res.status(200).json({
      'token': 
    });
  } else {

  }

});

app.get('/', async (req, res) => {
  const users = await admin.firestore().collection('users').get().then(users => { console.log(users); return users });
  res.status(200).json(users);
});

export const login = app;
