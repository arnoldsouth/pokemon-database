const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

const pokemonRoutes = require('./routes/pokemonRoutes')

const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(
    `<h2>Welcome</h2> 
      <p>This is yet another Pokemon database utilizing the PokeAPI</p>`
  )
})

app.use('/api', pokemonRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}`))
