const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_CONNECT).then(() => {
    console.log(`MongoDB connected ${mongoose.connection.host}`);
  });
};

module.exports = DBconnection;
