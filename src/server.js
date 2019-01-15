const express = require('express');
const fs = require('fs')
const app = express();
const compression = require('compression')
const path = require('path')
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

function isAuthenticated(req, res, next) {



  let username = req.query.username || req.body.username;
  let password = req.query.password || req.body.password;

  if (username && password && username === 'test' && password === 'test') {

    return next();
  } else {
    res.redirect('/')
  }
}

app.get('/getTasks', isAuthenticated, (req, res) => {
  let username = req.query.username;
  fs.readFile(path.resolve(__dirname, 'task.json'), (err, data) => {
    if (data) {
      jsonObj = JSON.parse(data);
      res.json(jsonObj[username])

    } else {
      res.status(404);
      res.send('No tasks found');

    }
  })
})

app.post('/writeTasks', isAuthenticated, (req, res) => {
  let obj = req.body.tasks;
  let username = req.body.username;
  let newObj = [];

  fs.exists(path.resolve(__dirname, 'task.json'), (exists) => {
    if (exists) {

      fs.readFile(path.resolve(__dirname, 'task.json'), function (err, data) {
        newObj = JSON.parse(data)
        if (newObj[username] && newObj[username].tasks) {

          newObj[username].tasks = obj;
        }
       return writeToFile(newObj)
      })
    }else{
      let userObj = {
        [username]:{
          tasks:[]
        }
      }
      userObj[username].tasks = obj;
      return writeToFile(userObj);
    }
  })


})
function writeToFile(obj){
  fs.writeFile(path.resolve(__dirname, 'task.json'), JSON.stringify(obj), 'utf8', function (err) {
    if (err) {
      return 500;
    } else {
      return 200;
    }

  });
}
app.listen(3000, function () {
  console.log('App started on port 3000');
});