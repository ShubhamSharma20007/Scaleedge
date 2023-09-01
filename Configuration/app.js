const express  = require('express')
const app = express();
const router =  require('./routes/router')
const cors = require('cors')

const port  = 8000;

app.get('/',(req,res)=>{
    res.send("Server Start ")
})
// express.json used for extract the data from frontend to backend
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(port,()=>{
    console.log(`start start on port : ${port}`)
}) 