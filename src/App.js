import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import Players from "./components/card/football-cards";



const App = () => {

  const [searchField, setSearchField] = useState('');// [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
 

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);  
  };

 

  return (
    <div className='App'>
      <h1 className='app-title'>Football Finders</h1>
      <SearchBox
      className='search-box'
      onChanheHandler={onSearchChange}
      placeholder='Search Player'
      />
       
      <Players/>
      <CardList monsters={filteredMonsters} />
            
    </div>
  )

}

export default App;
