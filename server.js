// server.js
// where your node app starts

// init project
const express = require('express');
//const date = require('date');
const app = express();
const date = new Date();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

function monthNumberToString (month){
  switch (month){
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      return "{Not a month!}";
  }
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:a", (request, response) => {
  var data = request.params.a;
  
  if(new Date(data*1000).toDateString() != 'Invalid Date'){
    response.send({unix: Date.parse(new Date(data*1000))/1000, natural: monthNumberToString(new Date(data*1000).getMonth()+1) + " " + new Date(data*1000).getDate() + ", " + new Date(data*1000).getFullYear()});
  }else if (Date.parse(data)){
    response.send({unix: Date.parse(data)/1000, natural: monthNumberToString(new Date(Date.parse(data)).getMonth()+1) + " " + new Date(Date.parse(data)).getDate() + ", " + new Date(Date.parse(data)).getFullYear()});
  }else{
    response.send({unix: null, natural: null});
  }
});

const listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
