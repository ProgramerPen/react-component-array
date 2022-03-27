import React from "react";
import "../App.css";

function Note(props) {

    return ( 
        <div class="note">
        {/* recive data from props app.js about heading title and content */}
    <h1>{props.hdg}</h1><p>{props.cnt}</p> </div>
    );
}
export default Note;