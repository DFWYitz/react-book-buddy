const express = require ("express")
const server = express ();

server.use (express.json())
const bookobj = {id:"Book One", 2:"Book Two"}
server.get ("/", async (req, res, next)=>{
  res.status(201).send("Hello Employees")
})
server.get ("/employees", async (req, res, next)=>{
  res.status(200).send(bookobj)
})
server.get ("/employees/:id", async (req, res, next)=>{
  const {id} =req.params
  const book = bookobj.id
  res.status(200).send(bookobj.id)
})
server.listen(3000,()=>{
  console.log("listening on port 3k")
}) 