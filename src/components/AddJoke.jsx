import { useRef } from "react";
import { useJokes } from "../contexts/jokesContext";

// export default function AddJoke({nextID, setNextID, jokes, setJokes}) {
export default function AddJoke() {
  const inputRef = useRef(); 
  const { dispatch } = useJokes();

  const addJoke = (e) => {
      e.preventDefault();
      const newJoke = inputRef.current.value;
      if (newJoke.trim() !== "") {
        // setJokes([...jokes, { id: nextID, joke: newJoke, likes: 0, deleted: false }]);
        // setNextID(nextID + 1);
        dispatch({ type: 'add_joke', payload: newJoke });
        inputRef.current.value = "";
      }
    };
  
  return (
    <form onSubmit={addJoke} className="add-joke-form">
      <input ref={inputRef} type="text" placeholder="Add jokes" />
      <button type="submit">Add</button>
    </form>
  )
}