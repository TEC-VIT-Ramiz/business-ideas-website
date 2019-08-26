const express = require('express')
const bodyParser = require('body-parser')
const { admin, db } = require('./firebase')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/', (req, res) => {
    const ref = db.ref("question/question" + req.body.qno)
    ref.once("value", question => {
        
        if(!question.val()) {
            return res.status(404).send()
        }

        res.send(question.val())
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})