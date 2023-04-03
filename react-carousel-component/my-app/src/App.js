import './App.css';
import Carousel from './Carousel';

const pokemonArray = [
  {
    name: 'Bulbasaur',
    imageURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    name: 'Charmander',
    imageURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    name: 'Squirtle',
    imageURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    name: 'Larvitar',
    imageURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png'
  },
  {
    name: 'Lamberto',
    imageURL: 'https://media.licdn.com/dms/image/D5603AQHskoJ15lo5Ww/profile-displayphoto-shrink_400_400/0/1678146443075?e=1685577600&v=beta&t=xAfCn2tlCv7VHsJ-aGWfsa1fjKo511pO-5Wlrc3iXT0'
  }
];

function App() {
  return (
    <div className='App-header'>
      <Carousel images={pokemonArray}/>
    </div>
  );
}

export default App;
