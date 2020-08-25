const express = require("express")
const multer = require('multer')
const app =  express()
const path = require("path")
const port  = 3000
const fs = require("fs")
var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'server/ModelWestKardashian/')
        },
        filename: function (req, file, cb) {
        
          cb(null,file.originalname)
        }
      })
      
      var upload = multer({ storage: storage })

// var upload = multer({ dest: 'server/ModelWestKardashian/' })


app.use(express.static(path.join(__dirname, '/src')))

app.get("/",(req,res)=>{

})

app.post('/upload', upload.single('image'), function (req, res, next) {
        if(!req.file){
                return res.send = {
                        success : "fail"
                }
        }

       else{ 
      
       return res.send = {
               success: "success"
       } 
} 
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))