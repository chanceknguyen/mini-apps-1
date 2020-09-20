const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const fs = require('fs');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploaded/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage})
// const bodyParser = require('body-parser');

var jsonToCSV = function(jsonData) {
  var results = [];
  var overallKeys = Object.keys(jsonData);
  overallKeys.pop();
  var storage = {};
  var recursion = function(data) {
      var first = overallKeys[0];
      var firstPoint = data[first];
      storage[firstPoint] = [];
      for (var i = 0; i < overallKeys.length; i++) {
        var currentKey = overallKeys[i];
        storage[firstPoint].push(data[currentKey]);
      }
      if (data.children.length > 1) {
          for (var j = 0; j < data.children.length; j++) {
              recursion(data.children[j]);
          }
      }
  }

  recursion(jsonData);
for (var prop in storage) {
    var currentString = storage[prop].join(',');
    results.push(currentString);
}
var finalCSV = results.join('\n');
fs.writeFile('finalCSV.csv', finalCSV, (err) => {
  if (err) throw err;
  console.log('file has been saved!')
} )
}

app.use('/', express.static(path.join(__dirname,'client')));
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/csv', upload.single('jsonFile'), (req, res) => {
  // debugger;
  console.log(req.file.originalname);

  // fs.readFile(`./uploaded/${req.file.originalname}`, (err, data) => {
  //   if (err) throw err;
  //   console.log(data);

  // })
})

app.listen(port, () => {
  console.log(`CSV app listening at http://localhost:${port}`);
})