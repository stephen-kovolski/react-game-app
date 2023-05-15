import React from "react";
import rooms from "../roomLogic";

function PickRoom(props){
    return(
        <div>           
            <button>{props.room}</button>
        </div>
    )
}

export default PickRoom;