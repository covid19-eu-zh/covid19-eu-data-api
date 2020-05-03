const path = require('path')
const fs = require('fs')

const userRoutes = (app, fs) => {
  // list all countries
  app.get('/country', (req, res) => {
    console.log('__dirname',__dirname)
    const directoryPath = path.join(__dirname, '../../api/db/')

    fs.readdir(directoryPath, function (err, files) {
      // handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err)
      }
      var countries = []
      files.forEach(function (file) {
        console.log(file)
        countries.push(file.split('.')[0])
      })

      res.send({ countries: countries })
    })
  })

  // get specific country
  app.get('/country/:alpha2', (req, res) => {
    const alpha2 = req.params.alpha2
    const dataPath = path.join(__dirname, `../../api/db/${alpha2}.json`)
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      res.send(JSON.parse(data))
    })
  })
}

module.exports = userRoutes
