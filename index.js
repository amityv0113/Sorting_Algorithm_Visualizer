const express = require('express')
const path =require('path')
const hbs = require('hbs')

const app = express();

const port = process.env.PORT || 3000
const public_Dir=path.join(__dirname,'/template')
const view_dir =path.join(__dirname,'/frontend')

app.use(express.static(public_Dir))

app.set('view engine','hbs')
app.set('views',view_dir)

app.get('/algo' , (request ,response) =>{
    response.render('index',{})
})

app.get('*', (request ,response) =>{
    response.send('404 Page')
})


app.listen(port, () => {
    console.log('server is up running on port ' + port)
})
