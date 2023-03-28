import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [offset, setOffset] = useState(0)
  const limit = 20

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        `/api/pokemon?offset=${offset}&limit=${limit}`
      )
      setPokemon(response.data.results)
    }
    fetchPokemon()
  }, [offset])

  const handlePokemonClick = async (name) => {
    const response = await axios.get(`/api/pokemon/${name}`)
    setSelectedPokemon(response.data)
  }

  const handleNextClick = () => setOffset(offset + limit)
  const handlePrevClick = () => setOffset(Math.max(0, offset - limit))

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name} onClick={() => handlePokemonClick(p.name)}>
            {p.name}
          </li>
        ))}
      </ul>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      {selectedPokemon && (
        <div>
          <div># {selectedPokemon.id}</div>
          <div>{selectedPokemon.name}</div>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />

          <div>
            Type:{' '}
            {selectedPokemon.types.length > 1
              ? `${selectedPokemon.types[0].type.name} and ${selectedPokemon.types[1].type.name}`
              : `${selectedPokemon.types[0].type.name}`}
          </div>

          <div>
            Abilities:{' '}
            {/* {selectedPokemon.abilities.map((ability) => (
              <span key={ability.ability.name}>
                {ability.ability.name.split('-').join(' ')}
              </span>
            ))} */}
            {selectedPokemon.abilities.length > 1
              ? `${selectedPokemon.abilities[0].ability.name} and ${selectedPokemon.abilities[1].ability.name}`
              : `${selectedPokemon.abilities[0].ability.name}`}
          </div>

          <div>
            {selectedPokemon.stats[0].stat.name}:{' '}
            {selectedPokemon.stats[0].base_stat}
          </div>
          <div>
            {selectedPokemon.stats[1].stat.name}:{' '}
            {selectedPokemon.stats[1].base_stat}
          </div>
          <div>
            {selectedPokemon.stats[2].stat.name}:{' '}
            {selectedPokemon.stats[2].base_stat}
          </div>
          <div>
            {selectedPokemon.stats[3].stat.name}:{' '}
            {selectedPokemon.stats[3].base_stat}
          </div>
          <div>
            {selectedPokemon.stats[4].stat.name}:{' '}
            {selectedPokemon.stats[4].base_stat}
          </div>
          <div>
            {selectedPokemon.stats[5].stat.name}:{' '}
            {selectedPokemon.stats[5].base_stat}
          </div>

          <div>Height: {(selectedPokemon.height * 0.328084).toFixed(1)} ft</div>
          <div>
            Weight: {(selectedPokemon.weight * 0.220462).toFixed(1)} lbs
          </div>
        </div>
      )}
    </div>
  )
}

export default App
