const axios = require('axios')

// Controller function to fetch a list of Pokémon
const getPokemonList = async (req, res) => {
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

// Controller function to fetch data about a specific Pokémon by its name
const getPokemonData = async (req, res) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
        )
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getPokemonList, getPokemonData }
