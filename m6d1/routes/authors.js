const express = require("express")
const router = express.Router()
const Authors = require("../models/authors")

router.get("/authors", async(req, res)=>{
    try {
        const authors = await Authors.find()
        res.status(200).send(authors)
    } catch (error) {
        res.status(500).send({
        message: "Internal server error",
        error: error    
        })
    }

})

router.post("/authors", async(req, res)=>{
    const authors = new Authors({
    nome: req.body.nome,
    cognome: req.body.cognome,
    email: req.body.email,
    birthdate: req.body.birthdate,
    avatar: req.body.avatar,
    })
try {
    const newauthor = await authors.save()
    res.status(200).send({
        message: "Author added",
        payload: newauthor,
    })
} catch (error) {
    res.status(500).send({
        message: "Internal Server Error",
        error: error,
    })
}
})


router.get("/authors/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const author = await Authors.findById(id)
        if(!author){
        return res.status(404).send({
            message: "User not found!"
        })
        }
    res.status(200).send(author)
    } catch (error) {
        res.status(500).send({
            message: "Internal server error",
            error: error
        })
    }
})


router.patch("/authors/:id", async(req, res)=>{
    const {id} = req.params
    const authorExist = await Authors.findById(id)
    if(!authorExist){
        res.status(404).send({
            message: "Author not found!"
        })
    }
    try {
        const authorToUpdate = req.body
        const options = {
        new: true
        }
    const result = await Authors.findByIdAndUpdate(id, authorToUpdate, options)
    res.status(200).send({
    message: "Author updated!",
    payload: result
    })
        
    } catch (error) {  
        res.status(500).send({
        message: "Internal server error",
        error: error
        })
        
    }

})

router.delete("/authors/:id", async(req, res)=>{
    const {id} = req.params
try{
    const author = await Authors.findById(id).deleteOne()
    if(!author){
    return res.status(404).send({
        message: "Book not found",
    })
    }
res.status(200).send({
    message: "Author deleted!",
})
}
catch (error){
    res.status(500).send({
        message: "Internal server error",
        error: error
    })

}
})


module.exports = router