// import { useState, useEffect } from "react";
import "./App.css";
import AddJoke from "./components/AddJoke";
import Jokes from "./components/Jokes";
import { JokesProvider } from "./contexts/jokesContext";

function App() {
  // const [nextID, setNextID] = useState(1);

  // const initialJokes = [
  //   {
  //     id: nextID,
  //     joke: "You actually WOULD get a full time role after learning HTML for 3 weeks. You know why? HTML is a programming language that no language comes close.",
  //     likes: 0,
  //     deleted: false
  //   },
  //   {
  //     id: nextID + 1,
  //     joke: "Why don't skeletons fight each other? They don't have the guts!",
  //     likes: 0,
  //     deleted: false
  //   },
  // ];

  // const [jokes, setJokes] = useState(initialJokes);

  // useEffect(() => {
  //   setNextID(jokes.length + 1);
  // }, [jokes]);


  return (
    <>
      {/* <section>
        <h1>My Funny Jokes</h1>
        
        <AddJoke nextID={nextID} setNextID={setNextID} jokes={jokes} setJokes={setJokes} />
        
        <Jokes jokes={jokes} setJokes={setJokes} />
      </section> */}
      
      <JokesProvider>
        <section>
          <h1>My Funny Jokes</h1>
          <AddJoke />
          <Jokes />
        </section>
      </JokesProvider>
    </>
  );
}

export default App;
