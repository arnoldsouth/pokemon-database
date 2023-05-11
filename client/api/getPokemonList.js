// `api/getPokemonList.js`

const axios = require('axios')

// Exported as the default export of a module named getPokemonList.js in the `api` directory
// This `getPokemonList` module defines a serverless function that is deployed on Vercel and accessed via HTTP request

module.exports = async (req, res) => {
    try {
        const offset = req.query.offset || 0
        const limit = req.query.limit || 20
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            // `https://pokeapi.co/api/v2/pokemon?limit=1118`
        )
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
