import React, { useContext } from 'react'
import { TacheContext } from '../../contexts/TacheContext';

export default function Form() {

  const { addTache } = useContext(TacheContext);


  return (
    <form onSubmit={addTache}>
        <input name="title" />
        <input name="date" type="date" />
        <input type="submit" value="Add" />
      </form>
  )
}
