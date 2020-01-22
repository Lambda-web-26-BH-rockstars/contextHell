import React, {useState} from 'react';
import './App.css';
import {APIContext} from './context/APIContext'
import CharacterList from './components/CharacterList';

function App() {
  const [baseAPI, setBaseAPI] = useState('https://rickandmortyapi.com/api/character')
  const [data, setData] = useState({})


  return (
    <APIContext.Provider value={{baseAPI, setBaseAPI, data, setData}}>
      <div className="App">
        <CharacterList />
      </div>
    </APIContext.Provider>
  );
}

export default App;
