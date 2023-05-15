import React from "react";
import { useState } from "react";

let rooms = [
    { "room number": 101, "available": true },
    { "room number": 102, "available": true },
    { "room number": 103, "available": true }
  ];
  
function roomLogic() {
let index = Math.floor((Math.random() * 3));
let selectedRoom = rooms[index];
selectedRoom.available = false;
console.log(rooms);
}

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

function Welcome() {
    return (
      <div>
        <h1>Welcome to the Hotel!!</h1>
        <button onClick={roomLogic}>Click to See Available Rooms</button>
        <PickRoom room="101"/>
        <PickRoom room="102"/>
        <PickRoom room="103" />
      </div>
    )
  }

export default Welcome;