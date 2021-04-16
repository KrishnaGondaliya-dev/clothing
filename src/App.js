import React from "react";
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import  {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
