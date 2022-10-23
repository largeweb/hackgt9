
const express = require('express')
const app = express()
const port = 3000
var exec = require('child_process').exec;

app.get('/getnearby/:pricelevel/:radius/:keyword', (req, res) => {
  pricelevel = req.params.pricelevel;
  radius = req.params.radius;
  keyword = req.params.keyword;
  const commandToRun = "curl -L -X GET 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAV5PUv0wTnh1gla6gpr_9KmqR2ug_B2Ag'"
  let retString;
  exec(commandToRun,
  function (error, stdout, stderr) {
 console.log('stdout: ' + stdout);
 console.log('stderr: ' + stderr);
 retString = stdout;
 if (error !== null) {
      console.log('exec error: ' + error);
 }
});
  res.send(retString);
  // res.json({pricelevel: pricelevel, radius: radius, keyword: keyword});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
