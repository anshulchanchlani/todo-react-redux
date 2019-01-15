const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors')
let data = require('./task.json')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

function isAuthenticated(req,res,next)
{
  console.log('query',req.query)


  let username = req.query.username || req.body.username;
  let password = req.query.password || req.body.password;

  if(username && password && username==='test' && password==='test'){
    console.log('authenticated')
   return next();
  }else{
    res.redirect('/')
  }
}

app.get('/getTasks',isAuthenticated,(req,res)=>{
  let username = req.query.username;
  console.log(username)
  fs.readFile(path.resolve(__dirname,'task.json'),(err,data)=>{
    if(data){
        jsonObj = JSON.parse(data);
        res.json(jsonObj[username])
        
    }else{
      res.status(404);
      res.send('No tasks found');
      
    }
  })
})

app.post('/writeTasks',isAuthenticated,(req,res)=>{
  let obj = req.body.tasks;
  let username = req.body.username;
  let newObj = [];
  console.log('obj is',obj,'username is',username)
  fs.exists(path.resolve(__dirname,'task.json'),(exists)=>{
    if(exists){
      console.log('file exists')
      fs.readFile(path.resolve(__dirname,'task.json'),function(err,data){
        newObj = JSON.parse(data)
        if(newObj[username] && newObj[username].tasks){
          console.log('found user and tasks are defined',newObj[username].tasks)
          newObj[username].tasks = obj;
        }
        fs.writeFile(path.resolve(__dirname,'task.json'), JSON.stringify(newObj), 'utf8', function(err){
          if(err){
          
          }else{
            console.log('new object before ',newObj)
            console.log(newObj[username])
            console.log('new object now ',newObj)
          }
      
        });
      })
    }
  })

  
 })

app.listen(3000, function () {
  console.log('App started on port 3000');
});