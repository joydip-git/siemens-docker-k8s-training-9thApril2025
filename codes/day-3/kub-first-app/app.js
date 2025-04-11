const express = require('express')

const app = express()
app.get(
    '/',
    (req, res) => {
        res.end('welcome to message app')
    }
)
app.get('/welcome/:name', (req, res) => {
    const name = req.params.name
    res.send(
        `<html>
            <head>
                <meta charset='utf-8'>
                <meta name='viewport' content='width=device-width,initial-scale=1.0'>
                <title>Index</title>
            </head>
            <body>
                <h2>Welcome to Node JS with Docker & Kubernetes ${name}</h2>
            </body>
        </html>`
    ).status(200)
})
app.get('/error', (req, res) => {
    process.exit(1)
})
const PORT = 3000
app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))