<template>
      <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
        <v-layout>
          <v-app-bar
            color="teal-darken-4"
            
          >
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>
    
            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
    
            <v-app-bar-title>Bienvenido</v-app-bar-title>
            <v-app-bar-title>Home</v-app-bar-title>

    
            <v-spacer></v-spacer>
           



            <v-spacer></v-spacer>
            
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
    
            <v-app-bar-title> 
              <a href="">Habilidades</a>

              </v-app-bar-title>
    
            <v-app-bar-title>
              <button
              @click="userStore.logOutUser">
                Salir
              </button>
            </v-app-bar-title>
          </v-app-bar>
        
        </v-layout>

        
      </v-card>
      <v-btn 
              @click="pokemonAll"
              variant="flat">
      Normal
    </v-btn>
    </template>

<script setup>

import { useUserStore } from '../store/user' 
import { PokemonService} from '../store/pokemonService'
import {  computed } from "vue";

const userStore = useUserStore();


function pokemonAll (){
  
  const getPokemons = async() =>{
  const pokemons = await PokemonService.getAllPokemon();

  console.log(pokemons)
}

getPokemons()
}



</script>


<style>

</style>