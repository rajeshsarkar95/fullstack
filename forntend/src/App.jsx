import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((Response) => {
        setNews(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1 className="">Headline news from chatgpt</h1>
      <button> headline news {news.length}</button>
      {news.map((now, index) =>(
        <div key={now.id}>
          <h2 >{now.headline}</h2>
          <br />
          <p>{now.content}</p>
          
          <img src={now.image} />
        </div>
      ))}
    </>
  );
}
export default App;
