import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Breed.css'

const BreedList = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all') 
      .then(response => {
        const breedsData = Object.keys(response.data.message) 
        setBreeds(breedsData) 
      })
      .catch(error => {
        console.error('Błąd pobierania listy ras psów:', error) 
      })
  }, [])

  
  
  return (
    <div className='breed-container'>
      <h1 className='breed-list-title'>Lista ras psów</h1>
      <ul className='breed-list'>
        {breeds.map(breed => (
          <li key={breed}>
            <Link to={`/search?breed=${breed}`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BreedList