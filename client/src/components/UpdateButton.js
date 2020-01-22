import React, { useContext } from 'react'
import {APIContext} from '../context/APIContext'

const UpdateButton = () => {

  const {updater, setUpdater} = useContext(APIContext)

  return(
    <button
      onClick={()=>setUpdater(!updater)}
    >
      refresh list
    </button>
  )
}

export default UpdateButton