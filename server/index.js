const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

const pokemonRoutes = require('./routes/pokemonRoutes')

const port = process.env.PORT || 5000

// Middleware to enable cross-origin resource sharing
app.use(cors())

// Defines a root route `/` that sends a welcome message as an HTML response
app.get('/', (req, res) => {
    res.status(200).send(
        `<h2>Welcome</h2> 
      <p>This is yet another Pokemon database utilizing the PokeAPI</p>`
    )
})

app.use('/api', pokemonRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}`))

// Export the Express API
module.exports = app
