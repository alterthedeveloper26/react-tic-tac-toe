import { useState } from 'react'

export function Player({ initialName, symbol, isActivePlayer, changeName }) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing)
  }

  function handleInputChange(event) {
    setName(event.target.value)
    changeName(event.target.value, symbol)
  }

  let playerName = <span className="player-name">{name}</span>

  if (isEditing) {
    playerName = <input type="text" required placeholder="name here" value={name} onChange={handleInputChange}></input>
  }

  return (
    <li className={isActivePlayer ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
