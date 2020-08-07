import React, {useState,useEffect} from 'react';
import Header from './components/ui/Header.js'
import CharacterGrid from './components/characters/CharacterGrid.js'
import Search from './components/ui/Search.js'
import './App.css';
import axios from 'axios';

function App() {
  //Here we use React hooks
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
  //items, isLoading are members of the state object, if we used class based approach

  useEffect(() => {
    //Fetching the data from the API
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {setQuery(q)}}/>
      <CharacterGrid isLoading = {isLoading} items={items}/>
    </div>
  );
}

export default App;
