//imports
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./router/route')


//middlewares
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))


app.use(routes)


//set Views
app.set('views', './public/views')
app.set('view engine','ejs')



//connection
app.listen(process.env.PORT,()=>{
    console.log("Server started on port ", process.env.PORT);
})
