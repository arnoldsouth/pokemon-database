const axios = require('axios')

const getPokemonList = async (req, res) => {
  try {
    const offset = req.query.offset || 0
    const limit = req.query.limit || 20
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      // `https://pokeapi.co/api/v2/pokemon?limit=1118`
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPokemonData = async (req, res) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getPokemonList, getPokemonData }
