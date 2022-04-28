const express = require('express')
const router = require('express').Router()

const users = ["Idriss", "Bill Gates", "Steve Jobs", "Tim Cook", "Elon Musk", "Jeft Bezoss", "Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Tim Cook"]

router.get("/users", async(req, res)=>{

    res.status(200).json(users)

})

router.get("/users/:id", async (req, res) => {

    const id = Math.floor(parseInt(req.params.id))
    const user = id > users.length || id == undefined ? users[0] : users[id]
    res.status(200).send(
        {
            user
        }
    )

})


module.exports = router