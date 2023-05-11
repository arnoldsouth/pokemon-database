// `api/getPokemonData.js`

const axios = require('axios')

// Exported as the default export of a module named getPokemonData.js in the `api` directory
// This `getPokemonData` module defines a serverless function that is deployed on Vercel

module.exports = async (req, res) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${req.query.name}`
        )
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// In the original `getPokemonData` controller function, the Pokémon name is passed as a route parameter in the URL path. For example, to fetch data about Pikachu, the URL would be /api/pokemon/pikachu, where `pikachu` is the value of the `name` route parameter

// In the refactored `getPokemonData` serverless function, the Pokémon name is passed as a query parameter in the URL. For example, to fetch data about Pikachu, the URL would be `/api/getPokemonData?name=pikachu`, where `pikachu` is the value of the `name` query parameter
