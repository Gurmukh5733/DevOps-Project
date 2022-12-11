const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Maps } = require("./models/maps");
const server = app.listen(process.env.PORT || 8080, () =>
  console.log("Listening")
);

const mongoURL =
"mongodb+srv://Gurmukh:root@cluster0.76lvfj4.mongodb.net/?retryWrites=true&w=majority";
  

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(mongoURL, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("database Connected");
  }
});


// app.get("/api/", async (req, res) => {
//     const data = await Maps.find();
//     res.send(data);
// })


app.post("/", (req, res) => {
  
  const data = req.body.data;
  console.log(data, "from server");

  Maps.create({
    image: data,
  })
    .then((response) => {
      res.status(201).json({
        message: "Succesfully created the data",
        data: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "This is the error from database",
        error: error,
      });
    });
});
