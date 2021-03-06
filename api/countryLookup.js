const path = require('path')
const fs = require('fs')
const getCountryName = require('./_utils/countriesMapping')

module.exports = (req, res) => {
  const directoryPath = path.join(__dirname, './db/')
  fs.readdir(directoryPath, function (err, files) {
    // handling error
    if (err) {
      res.status(503).send('Unable to scan directory: ' + err)
    }
    var countries = []
    files.forEach(function (file) {
      const initial = file.split('.')[0]
      countries.push({ [initial]: getCountryName(initial) })
    })

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send({ countries: countries })
  })
}
