<template>

<v-toolbar
    color="purple"
    dark
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-divider
      class="mx-1"
      vertical
    ></v-divider>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn variant="text">
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn variant="text">
        Blog
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn variant="text">
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>


  <v-container class="bg-surface-variant">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col :cols="cols[0]">
        <v-sheet class="pa-2 ma-2">
         
        </v-sheet>
      </v-col>

      <v-col :cols="cols[1]">
        <v-sheet class="pa-2 ma-2">
         

          <div class="contenedor-conciertos">

<div 

v-for="pokemon in pokemonsArray"
class="card" style="background-image: url('./img/1.jpg')">
  <div class="textos">
    <h3>{{pokemon.name}}</h3>
    <p>
      <RouterLink
  :to="`/${pokemon.name}`"
  >   Info</RouterLink>

    </p>
    
  </div>
</div>
</div>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

 
  <ul>

<li v-for="pokemon in pokemonsArray">
  <RouterLink
  :to="`/${pokemon.name}`"
  >   {{pokemon.name}}</RouterLink>

</li>
</ul>




    </template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/user' 
import { PokemonService} from '../store/pokemonService'
import{ ref} from 'vue'
import { RouterLink } from 'vue-router'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pokemonsArray = ref([]);

  
  const getPokemons = async() =>{

    try {
      const pokemons = await PokemonService.getAllPokemon();

     // console.log(pokemons.results)
    pokemonsArray.value = pokemons.results 


    } catch (error) {
      console.log(error)
    }

}

getPokemons()

const vuetify = createVuetify({
  ssr: true,
})



    const cols = computed(() => {
      const { lg, sm } = vuetify.display
      return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
})

</script>


<style>




.contenedor-conciertos {


	/* Grid */
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
}

.card {
  border-color:  black;
	border-radius: 10px;
	min-height: 200px;
	font-weight: bold;
	padding: 20px;
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center center;


}

.card .textos {
	height: 100%;
	
	/* Flebox */
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	/* Grid */
	/* display: grid;
	grid-template-rows: 1fr auto; */
}
</style>