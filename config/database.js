const mongoose = require("mongoose");


exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected successfully");
  } 
  catch (err) {
    console.error("DB connection issue:", err);
    process.exit(1);
  }
};
