
const express = require('express')
const app = express()
const port = 3000
var exec = require('child_process').exec;

app.get('/getnearby/:pricelevel/:radius/:keyword', (req, res) => {
  pricelevel = req.params.pricelevel;
  radius = req.params.radius;
  keyword = req.params.keyword;
  res.json({pricelevel: pricelevel, radius: radius, keyword: keyword});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
