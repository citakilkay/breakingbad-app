import axios from 'axios';
import './App.css';
import logo from './images/logo-bb.png';
import SearchBar from './components/SearcBar';
import {useState, useEffect} from 'react';
import CharacterList from './components/CharacterList';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
function App() {
  const [characters,setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery,setSearchQuery] = useState("");
  useEffect(async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters`);
    setCharacters(result.data);
    setIsLoading(false);
  },[]);
  const searchCharacter = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  }
  var filteredCharacters = characters.filter(
    character => { return ((character.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) || (character.nickname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) ) }
  )
  return (
    <div className="App">
      {/*() => return( isLoading ? <img src={LoadingGif} alt="loading-gif" /> : 0);*/}
      <div className="container-sm">
        <img src={logo} alt="logo" className="m-4 logo-img"/>
        <SearchBar searchCharacter={searchCharacter}/>
        <CharacterList characters={filteredCharacters} searchCharacter={searchCharacter} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
