const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LJILySBqNKloSLD0Q7cEWbo2ExB6yhy5lx7wayF4P5bRYPw836hMRRP8rRJ3lmX7ci1GJbL5YI8S2RIniFT6pAp00BkiXEq2D"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(total, "RECEIVED!!!");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-ba8a3/us-central1/api
