const express = require('express')
const app = express()
const path = require('path')
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use('/static', express.static('static'))


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
  //__dirname : It will resolve to your project folder.
});
// app.get('/',(req, res) =>{res.sendFile('/index.html')} )
app.listen(3000,()=>{console.log('Listening on port 3000')})