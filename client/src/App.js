import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

/* Helper Functions */
function padWithZeros(number, width) {
  const numberString = String(number)
  return numberString.length >= width
    ? numberString
    : new Array(width - numberString.length + 1).join('0') + numberString
}

function App() {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [offset, setOffset] = useState(0)
  const limit = 9

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
    <div className="container">
      <div className="logo">
        <div className="logo-small">pokemon</div>DATABASE
      </div>

      <ul>
        {pokemon.map((p) => (
          <li key={p.name} onClick={() => handlePokemonClick(p.name)}>
            {p.name}
          </li>
        ))}
      </ul>

      <div className="prev-next-button">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>

      <div className="card-container">
        {selectedPokemon && (
          <div className="pokemon-card">
            <div>
              <div className="pokemon-card-id">
                # {padWithZeros(selectedPokemon.id, 4)}
              </div>
              <div className="pokemon-card-name">{selectedPokemon.name}</div>
            </div>

            <div className="pokemon-card-stats-detail-title">
              {selectedPokemon.types.length > 1
                ? `${selectedPokemon.types[0].type.name} and ${selectedPokemon.types[1].type.name}`
                : `${selectedPokemon.types[0].type.name}`}
            </div>

            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
            {/* <div className="pokemon-card-type">
              {selectedPokemon.types.length > 1
                ? `${selectedPokemon.types[0].type.name} and ${selectedPokemon.types[1].type.name}`
                : `${selectedPokemon.types[0].type.name}`}
            </div> */}
            <div>
              <div className="pokemon-card-stats-detail-title">Abilities </div>
              {/* {selectedPokemon.abilities.map((ability) => (
              <span key={ability.ability.name}>
                {ability.ability.name.split('-').join(' ')}
              </span>
            ))} */}
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.abilities.length > 1
                  ? `${selectedPokemon.abilities[0].ability.name} and ${selectedPokemon.abilities[1].ability.name}`
                  : `${selectedPokemon.abilities[0].ability.name}`}
              </div>
            </div>

            <div className="border-div"></div>

            <div className="pokemon-card-stats-detail-title pokemon-card-stats-header">
              Base Stats
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[0].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[0].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[1].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[1].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[2].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[2].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[3].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[3].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[4].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[4].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                {selectedPokemon.stats[5].stat.name}{' '}
              </div>
              <div className="pokemon-card-stats-detail">
                {selectedPokemon.stats[5].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                Height (ft){' '}
              </div>

              <div className="pokemon-card-stats-detail">
                {(selectedPokemon.height * 0.328084).toFixed(1)}
              </div>
            </div>
            <div>
              <div className="pokemon-card-stats-detail-title">
                Weight (lbs){' '}
              </div>

              <div className="pokemon-card-stats-detail">
                {(selectedPokemon.weight * 0.220462).toFixed(1)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
