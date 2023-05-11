const express = require('express')
const router = express.Router()

const {
    getPokemonList,
    getPokemonData,
} = require('../controllers/pokemonControllers')

router.route('/pokemon').get(getPokemonList)
router.route('/pokemon/:name').get(getPokemonData)

module.exports = router
