import "./App.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=space&apiKey=857c2f8193ac4125aa7ae4f9129e1ccc")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
  })
  

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer"></div>
    </div>
  );
}

export default App;
