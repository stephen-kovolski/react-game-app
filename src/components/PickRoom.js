import React from "react";
import { useState } from "react";



function PickRoom(props) {
    const [roomAvailable, setRoomAvailable] = useState(true); // Added state to track room availability
  
    if (!roomAvailable) {
      return null; // Return null to remove the button from the DOM if the room is not available
    }
  
    return (
      <div>
        <button onClick={() => setRoomAvailable(false)}>{props.room}</button> {/* Updated to set roomAvailable to false on button click */}
      </div>
    )
  }
export default PickRoom;