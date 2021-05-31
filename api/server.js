const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('server is running at port:', port)
})