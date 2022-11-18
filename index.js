const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

mongoose
 .connect(process.env.MONGO_URL)
 .then(()=>console.log("DBConnection Successfull!"))
 .catch((err) => {
    console.log(err);
 });
app.use(express.json());
app.use("/api/order", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});