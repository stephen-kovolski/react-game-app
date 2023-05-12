let rooms = [
    {"room number": 101, "available" : true}, 
    {"room number": 102, "available" : true}, 
    {"room number": 103, "available" : true}
  ];
  
  let index = Math.floor((Math.random() * 3));
  let selectedRoom = rooms[index];
  selectedRoom.available = false;
  


export default rooms;