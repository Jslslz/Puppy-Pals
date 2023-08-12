import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)

  return (
    <div>
      {featPupId && <p>{featPupId}</p>}
      {puppies.map((puppy) => {
        const featuredPup = puppies.find((pup) => pup.id === featPupId)
        console.log(featuredPup)
        return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        
      })}
    </div>
  )
}

export default App
