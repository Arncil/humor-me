import './App.css';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Jokes from '../Jokes/Jokes';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('Programming')
  const [humorMe, setHumorMe] = useState(false)
  const [nextJoke, setNextJoke] = useState(0)

  return (
    <div className="App">
      <Header
        humorMe={humorMe}
      />
      <Jokes
        category={category}
        setCategory={setCategory}
        humorMe={humorMe}
        setHumorMe={setHumorMe}
        nextJoke={nextJoke}
        setNextJoke={setNextJoke}
      />
      <Categories
        setCategory={setCategory}
        setHumorMe={setHumorMe}
      />
    </div>
  );
}

export default App;
