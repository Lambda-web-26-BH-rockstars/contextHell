import React from 'react'

const CharacterCard = ({item}) => {
  console.log(item)
  return(<div>{item.name}</div>)
}

export default CharacterCard