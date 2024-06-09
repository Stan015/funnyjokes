import { useReducer, createContext, useContext, useEffect } from 'react';

const loadState = () => {
  const savedState = localStorage.getItem('jokesAppState');
  return savedState ? JSON.parse(savedState) : {
    nextID: 3,
    jokes: [
      {
        id: 1,
        joke: "You actually WOULD get a full time role after learning HTML for 3 weeks. Why? HTML is a programming language that no other language comes close.",
        likes: 0,
      },
      {
        id: 2,
        joke: "Why don't skeletons fight each other? They don't have the guts!",
        likes: 0,
      },
      {
        id: 3,
        joke: "When does a joke become a ‘dad’ joke? When it becomes apparent.",
        likes: 0,
      },
      {
        id: 4,
        joke: "What kind of shorts do clouds wear? Thunderpants!",
        likes: 0,
      },
    ]
  };
};

const JokesContext = createContext();

function jokesReducer(state, action) {
  switch (action.type) {
    case 'add_joke':
      return {
        ...state,
        jokes: [...state.jokes, { id: state.nextID, joke: action.payload, likes: 0}],
        nextID: state.nextID + 1
      };
    case 'increment_likes':
      return {
        ...state,
        jokes: state.jokes.map(joke => 
          joke.id === action.payload ? { ...joke, likes: joke.likes + 1 } : joke
        )
      };
    case 'decrement_likes':
      return {
        ...state,
        jokes: state.jokes.map(joke => 
          joke.id === action.payload && joke.likes > 0 ? { ...joke, likes: joke.likes - 1 } : joke
        )
      };
    case 'delete_joke':
      return {
        ...state,
        jokes: state.jokes.filter(joke => joke.id !== action.payload)
      };
    default:
      return state;
  }
}

export function JokesProvider({ children }) {
  const [state, dispatch] = useReducer(jokesReducer, {}, loadState);
  
  useEffect(() => {
    localStorage.setItem('jokesAppState', JSON.stringify(state));
  }, [state]);

  return (
    <JokesContext.Provider value={{ state, dispatch }}>
      {children}
    </JokesContext.Provider>
  );
}

export function useJokes() {
  const context = useContext(JokesContext);
  if (!context) {
    throw new Error('useJokes must be used within a JokesProvider');
  }
  return context;
}
