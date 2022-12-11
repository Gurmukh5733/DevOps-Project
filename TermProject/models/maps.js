const mongoose = require("mongoose");

const imageData = new mongoose.Schema({
  name: {
    type: String,
  },
  flag: {
    type: String,
  },
  population: {
    type: Number,
  },
  capital: {
    type: [String],
  },
  region: {
    type: String,
  },
  maps: {
    type: String,
  },
})

const map = new mongoose.Schema({
  image: {
    type: [imageData],
  }
});



const schema = mongoose.model("Maps", map);
exports.Maps = schema;
