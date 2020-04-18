module.exports = (req, res) => {

  const alpha2 = req.params.alpha2
  const dataPath = `./db/${alpha2}.json`
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    res.status(200).send(JSON.parse(data))
  })
}
