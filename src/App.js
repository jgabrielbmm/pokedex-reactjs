import './App.css';

// hook
import { useState } from 'react';

// components
import Card from './components/Card';
import Footer from './components/Footer';

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({id: "",
    name:"",
    photo:"",
    experience: "",
    type:"",
    height:"",
    weight:""
    });

  const [error, setError] = useState(false);
  const [initialStat, setInitialState] = useState(true);

  async function fetchData(e){
    e.preventDefault();
    setError(false)
    try {
      const response = await fetch(`${url}/${pokemonName.toLocaleLowerCase()}`);
      const data = await response.json();
      setPokemonInfo({
        id:data.id,
        name: data.name,
        photo: data.sprites.other.dream_world.front_default,
        experience: data.base_experience,
        type: data.types[0].type.name,
        height: data.height,
        weight: data.weight
      });
      setInitialState(false)
    } catch (error) {
        setError(true);
        setInitialState(true)
    }
    
    
    console.log(pokemonInfo);
  }

  
  return (
    <div className='app'>
      <h1 className='title'>Pokédex</h1>
      <h3>Procure por um Pokemon e obtenha mais informações sobre ele</h3>
      <div>
        <form className="form" onSubmit={fetchData}>
            <label>
                <span>Insira o Nome ou ID: </span>
                <input
                  className='input' 
                  type="text"
                  placeholder='Informe o nome ou id do pokemon' 
                  required 
                  onChange={e => setPokemonName(e.target.value)}
                  value={pokemonName}/>
            </label>
            {error && 
              <p className="error-message">
                Pokemon não encontrado, busque por outro nome ou outro ID
              </p>}
            <button type="submit">Buscar</button>
        </form>
     </div>

      {initialStat && (
        <img className='img-initial' src="https://maayotcdn.b-cdn.net/blog/wp-content/uploads/2021/11/poke.jpeg" 
          alt="Foto de vários pokemons juntos" />
      )}       

     {!initialStat && (
       <Card 
          id= {pokemonInfo.id}
          name={pokemonInfo.name}
          xp = {pokemonInfo.experience}
          img = {pokemonInfo.photo}
          type = {pokemonInfo.type}
          height = {pokemonInfo.height}
          weight = {pokemonInfo.weight}
        />
      )} 
      <Footer />
    </div>
  );
}
export default App;
