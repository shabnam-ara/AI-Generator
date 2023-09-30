import React from "react";
import AIGenerator from "./AIGenerator";
import SavedStories from "./SavedStories";
import "./App.css"

function App() {
  return (
    <div>
      < AIGenerator/>
      <SavedStories stories={[] /* Pass your saved stories state here */} />
    </div>
  );
}

export default App;
