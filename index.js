const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const inquirer = require('inquirer')
const { clearCookie } = require('express/lib/response')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get('/:m/:n/:metodo',(req,res)=>{
    res.send({
        result:calc(req.params.m,req.params.n,req.params.metodo)
    })
})

function calc(m,n,metodo){
    
    if(metodo==1){

        let i=1;
        let result=1;
        
        for(i=m;i<=n;i++){
            result *=i+1/i;
        }
        return result;
    }
    else{

        let i=1;
        let result=1.0;
        
        for(i=m;i<=n;i++){
         result *=i+1.0/i;
        }
        return result;
    }      
}

app.listen(3000,()=>{
    console.log('Express started at http://localhost:3000')
})