const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.get('/tasks',(req,res)=>{
  console.log(req.body.username);
})
app.listen(3000, function () {
  console.log('App started on port 3000');
});