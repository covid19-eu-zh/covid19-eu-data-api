module.exports = (req, res) => {

  const alpha2 = req.params.alpha2
  const dataPath = `./db/${alpha2}.json`
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    param: req.param
  })
  // fs.readFile(dataPath, 'utf8', (err, data) => {
  //   if (err) {
  //     if (err) {
  //       res.status(503).send('Unable to scan directory: ' + err)
  //     }
  //     throw err
  //   }
  //   res.status(200).send(JSON.parse(data))
  })
}
