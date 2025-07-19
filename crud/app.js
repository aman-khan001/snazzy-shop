import express from "express"
import connectDB from "./db/connectdb.js"
import {getDoc, updateDoc}  from "./models/studentModel.js"


// updateDoc()

getDoc()
// updateDoc('683ee3e5f1f8632576a1c248')

const app = express()

const port = process.env.PORT || 3000

connectDB()


app.get('/', (req, res) =>{
    res.send("Home page")
})

app.listen(port, () =>{
    console.log("your server is listening at http://localhost:3000")
})

