const mongoose = require('mongoose');
require("dotenv").config();

const URI =process.env.URI1;

const mongoDB = async () => {
  console.log(URI);
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
   


    const fetchedData = await mongoose.connection.db.collection('fooditems').find({}).toArray();
    const fetchedData1 = await mongoose.connection.db.collection('foodcategory').find({}).toArray();

    global.food_items = fetchedData;
    global.food_category = fetchedData1;
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = mongoDB;
