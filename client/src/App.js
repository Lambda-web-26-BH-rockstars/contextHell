import React, {useState} from 'react';
import './App.css';
import {APIContext} from './context/APIContext'
import CharacterList from './components/CharacterList';
import UpdateButton from './components/UpdateButton'

function App() {
  const [baseAPI, setBaseAPI] = useState('https://rickandmortyapi.com/api/character')
  const [data, setData] = useState([])
  const [updater, setUpdater] = useState(false)


  return (
    <APIContext.Provider value={{baseAPI, setBaseAPI, data, setData, updater, setUpdater}}>
      <div className="App">
        <CharacterList />
      </div>
      <div>
        <UpdateButton />
      </div>
    </APIContext.Provider>
  );
}

export default App;
