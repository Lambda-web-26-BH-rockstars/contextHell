import React, { useContext, useEffect } from 'react'
import {APIContext} from '../context/APIContext'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const CharacterList = () => {

  const {baseAPI, setBaseAPI, data, setData} = useContext(APIContext)

  useEffect(()=>{
    axios.get(baseAPI)
    .then(res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <>
      {
        data.map(
          (item, index) => (
            <CharacterCard 
              key={index}
              item={item} 
            />
          )
        )
      }
    </>
  )
}

export default CharacterList