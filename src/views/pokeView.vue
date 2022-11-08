<template>
 
  <v-card
    class="mx-auto"
    max-width="344"
    
  >
    <v-img
    :src="pokemonName.sprites.front_default"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{$route.params.name}}
    </v-card-title>
    <v-card-subtitle
    
    >
    Tipo:
    </v-card-subtitle>

    <v-card-subtitle
    v-for="infoPok in typePopkemon "
    >
    
     {{infoPok}}
    </v-card-subtitle>

    <v-card-actions>
     

      <v-spacer></v-spacer>

    
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

    
</template>



<script setup>

import { PokemonService} from '../store/pokemonService'
import{ ref} from 'vue'
import {  useRoute} from "vue-router";

const route = useRoute();

const getPokemon = async() =>{

try {
  const pokemon = await PokemonService.getPokenById(route.params.name);

  const types = pokemon.types;
      types.map(function(value,key) {

      typePopkemon.value.push(value.type.name)
      console.log(value.type.name)
      })






pokemonName.value = pokemon



} catch (error) {
  console.log(error)
}

}

getPokemon()

const pokemonName = ref({})
const typePopkemon = ref([])
</script>