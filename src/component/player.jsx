import { useState } from "react";

export default function Player({initialName , symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


   function HandleEditClick() {
     setIsEditing((editing)=> !editing);
   }
   function HandleChange(event) {
    // console.log(event)
    setPlayerName(event.target.value)
   }
   let editPlayerName = <span className='player-name'>{playerName}</span>;
//    let btnCaption = "Edit";
 
   if (isEditing) {
    editPlayerName = ( <input type="text" required value={playerName} onChange={HandleChange} />
    // btnCaption = "Save"
     )
   }
    return (
        <li>
        <span className='player'>
          {editPlayerName}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}