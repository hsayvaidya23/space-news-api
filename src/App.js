import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data);
      });
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return (
            <div key={key}>
              {val.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
