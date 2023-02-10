const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const e = require('express');
mongoose.set("strictQuery", true);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded())   //warning
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const dataSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: Number,
  added: Date,
  published: Date,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const Data = new mongoose.model("data", dataSchema);
app.get("/get", (req, res) => {
  Data.find((err, val) => {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    // console.log(val)
    res.json(val);
  });
});

//get data by filter

app.post("/filter", (req, res) => {
  let value = req.body.value;

  const key = req.body.type;
  if (value.charCodeAt(0) >= 65) {
    value = new RegExp(value, "i");
  }
  Data.find({ [key]: value }, (err, val) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!value) {
      res.send({ message: "Data not found" });
      return;
    }
    res.json(val);
    return;
  });
});

app.get("/area", async (req, res) => {

  let sectors = {};


  let area = [];
  
  const val = await Data.find();

  let index = 0;
  val.forEach((element) => {
    // console.log("element",element);
    if (element.sector.length > 0 && sectors[element.sector]==undefined) {
     
     
      area.push({
        sector: element.sector,
        index: index,
        intensity: element.intensity,
        relevance: element.relevance,
        liklehood: element.likelihood,
        count: 1,
      });
      sectors[element.sector]=index++
    }


    else{
       if(area[sectors[element.sector]]?.intensity!=undefined){
          area[sectors[element.sector]].intensity+=element.intensity
          
        
          area[sectors[element.sector]].count++;
        }
          if(area[sectors[element.sector]]?.relevance!=undefined){
            area[sectors[element.sector]].relevance+=element.relevance
          }
        if(area[sectors[element.sector]]?.likelihood!=undefined){
          area[sectors[element.sector]].likelihood+=element.likelihood
        }
      
    }

   

  });
   console.log(sectors)

 area.forEach(element => {
  element.intensity=element.intensity/element.count
  element.relevance=element.relevance/element.count
});

  res.send(area);
  
});

app.listen(8000, (req, res) => {
  console.log(`server at 8000`);
});
