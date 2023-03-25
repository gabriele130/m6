// mongodb+srv://gabriele20:wikiwiki98@gabriele.wdkboxz.mongodb.net/?retryWrites=true&w=majority

const express = require("express")
const mongoose = require("mongoose")

const port = 4040
const app = express()


mongoose.connect("mongodb+srv://gabriele20:wikiwiki98@gabriele.wdkboxz.mongodb.net/?retryWrites=true&w=majority")
const db= mongoose.connection
db.on("error", console.error.bind(console,"errore di connesione"))
db.once("open", ()=>{
    console.log("connesso al database")
})







app.listen(port, ()=>console.log(`server avviato sulla porta ${port}`))

