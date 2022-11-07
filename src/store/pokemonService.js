import axios from 'axios'

export const PokemonService = {

async getAllPokemon(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
      return res.data
},

async getPokenById (pokemon){
      const res = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      return res.data;
}




};
export default { PokemonService };