import React from "react";
import Heading from "./components/heading.jsx";
import Footer from "./components/footer.jsx";
import Note from "./components/note.jsx";
import notes from "./components/notes";


function App() {
  return (
    <div> <Heading />
    {/*  mapping into notes array  */}
      {notes.map((note =>
    //render each note in the array with below data and pass it to Note component
    <Note 
      key = {note.key}   
      hdg = {note.title}
      cnt = {note.content}
    />
  
       ))};
        
    <Footer /></div>
    
  );
}

export default App;
