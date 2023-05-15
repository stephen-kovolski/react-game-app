import React from "react";

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

function Welcome() {
    return (
      <div>
        <h1>Welcome to the Hotel!!</h1>
        <button onClick={roomLogic}>Click to See Available Rooms</button>
      </div>
    )
  }

export default Welcome;