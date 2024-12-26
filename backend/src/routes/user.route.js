import express from 'express'

const route = express.Router()

route.get('/',(req,res) => {
    req.auth.userId
    res.send('Hello user')
})


export default route