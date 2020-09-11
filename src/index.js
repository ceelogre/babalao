import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "You seem to understand what's going on..."
    })
})

app.get('/watches', (req, res) => {
    res.json({
        message: "It is here where all watches can be found"
    })
})

app.get('/users', (req, res) => {
    res.json({
        message: "This is where the users should be!"
    })
})


const PORT = 3001
app.listen(PORT, () => {
    console.info(`Live on ${PORT}`)
})