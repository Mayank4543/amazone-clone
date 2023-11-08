// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NEvj9SHSl6vv1agMmnHjskV1QhFu7jpE7HKxfYgzKzylzNLEKkNInPW7nuhwi9WjrKZNEnag0o4618qnkYLp48700kbtwd8jW"
);
const app = express();
app.use(cors({ orgin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-8c606/us-central1/api).
