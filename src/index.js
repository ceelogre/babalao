import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "You seem to understand what's going on..."
    })
})

const PORT = 3001
app.listen(PORT, () => {
    console.info(`Live on ${PORT}`)
})