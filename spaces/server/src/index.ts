import express from 'express'

const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(PORT, () => console.log(`server ready on: http://localhost:${PORT}`))
