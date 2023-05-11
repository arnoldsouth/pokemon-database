const axios = require('axios')

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
