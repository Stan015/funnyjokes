import { useJokes } from "../contexts/jokesContext";

// export default function Jokes({jokes, setJokes}) {
export default function Jokes() {
  const { state, dispatch } = useJokes();
  
  // const incrementLikes = (id) => {
  //   setJokes(jokes.map(joke => 
  //     joke.id === id ? { ...joke, likes: joke.likes + 1 } : joke
  //   ));
  // };

  // const decrementLikes = (id) => {
  //   setJokes(jokes.map(joke => 
  //     joke.id === id && joke.likes > 0 ? { ...joke, likes: joke.likes - 1 } : joke
  //   ));
  // };

  // const deleteJoke = (id) => {
  //   setJokes(jokes.filter(joke => joke.id !== id));
  // };

  const incrementLikes = (id) => {
    dispatch({ type: 'increment_likes', payload: id });
  };

  const decrementLikes = (id) => {
    dispatch({ type: 'decrement_likes', payload: id });
  };

  const deleteJoke = (id) => {
    dispatch({ type: 'delete_joke', payload: id });
  };
  
return (
    <div className="jokes-container">
      {state.jokes.map(joke => (
        <div key={joke.id} className="joke">
          <p>{joke.joke}</p>
          <p>Likes: {joke.likes}</p>
          <div className="btns-container">
            <button onClick={() => incrementLikes(joke.id)}>👍</button>
            <button onClick={() => decrementLikes(joke.id)}>👎</button>
            <button onClick={() => deleteJoke(joke.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}