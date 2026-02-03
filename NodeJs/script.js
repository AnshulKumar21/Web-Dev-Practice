const http = require('http')
const nodemailer = require('nodemailer')

const server = http.createServer((req,res)=>{
  res.end("Students hello")
})
server.listen(3000,()=>{
  console.log("Hello world");
})