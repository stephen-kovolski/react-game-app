import React, {useState} from "react";
import App from "../App";



let rooms = [
    { "roomNumber": 101, "available": true },
    { "roomNumber": 102, "available": true },
    { "roomNumber": 103, "available": true }
  ];



  
function roomLogic() {
let index = Math.floor((Math.random() * 3));
let selectedRoom = rooms[index];
selectedRoom.available = false;
console.log(rooms);
}




function PickRoom(props) {
    const [available, setAvailable] = useState([rooms])
    const newState = setAvailable([rooms.available])
    
    props.func(rooms.roomNumber)

    // let loop = available.map((availRooms) => (
    //     <li>{availRooms.available}</li>))


    return (
        <div>
        <button>{rooms}</button> 
        </div>
    )
}


export default PickRoom;

