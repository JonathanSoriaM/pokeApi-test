<template>
   
      <h1>
            Pokemon :{{$route.params.name}}
      </h1>
</template>



<script setup>

import { PokemonService} from '../store/pokemonService'
import{ ref} from 'vue'
import {  useRoute} from "vue-router";

const route = useRoute();

const getPokemon = async() =>{

try {
  const pokemon = await PokemonService.getPokenById(route.params.name);



  console.log(pokemon)



} catch (error) {
  console.log(error)
}

}

getPokemon()



</script>