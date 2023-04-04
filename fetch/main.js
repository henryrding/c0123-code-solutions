async function fetchInfo(request) {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Bad server response: ${response.status}`);
    }
    const info = await response.json();
    console.log(info);
    return;
  } catch (err) {
    console.error('Error:', err.message);
  }
}

const usersRequest = new Request('https://jsonplaceholder.typicode.com/users');

const pokemonRequest = new Request('https://pokeapi.co/api/v2/pokemon/246', {
  method: 'GET'
});

fetchInfo(usersRequest);
fetchInfo(pokemonRequest);
