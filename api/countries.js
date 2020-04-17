const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const directoryPath = path.join(__dirname, '../db/');

  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          res.status(503).send('Unable to scan directory: ' + err);
      }
      var countries = []
      files.forEach(function (file) {
          console.log(file);
          countries.push(file.split('.')[0])
      });

      res.status(200).send({countries:countries});
    })
}