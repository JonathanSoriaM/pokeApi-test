<template>

<v-toolbar
    color="#324d9a"
    dark
  >
    <v-toolbar-title
   
    >Bienvenido/Home</v-toolbar-title>

 

    <span class="subheading">
      <img class="img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="">
    </span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
     

      <v-divider vertical></v-divider>

      <v-btn
      @click="home"
       variant="text">
     Habilidades
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn 
      @click="userStore.logOutUser" v-if="userStore.userData"
      variant="text">
        Salir
      </v-btn>
     
      <v-divider vertical></v-divider>
    </v-toolbar-items>

   
  </v-toolbar>


  <v-container class="bg-surface-variant">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col :cols="cols[0]">
        <v-sheet class="pa-2 ma-2">
          <div class="banner">
			<h3>Favoritos</h3>
			<ul v-for="fav in favoritos">
				<li>
          {{fav}}
        </li>
			</ul>

		</div>
        </v-sheet>
      </v-col>

      <v-col :cols="cols[1]">
        <v-sheet class="pa-2 ma-2">
         

          <div class="contenedor-conciertos">

<div 

v-for="pokemon in pokemonsArray"
:key="pokemon.name"
class="card"
>
  <div class="textos">
    <h3>{{pokemon.name}}</h3>


    <p>
      <RouterLink
  :to="`/${pokemon.name}`"
  >   Info</RouterLink>

    </p>
    <button 
    class="btnFav"
    @click="addFavoritos(pokemon.name)" >+ </button>
  </div>
</div>
</div>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

 
  




    </template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/user' 
import { PokemonService} from '../store/pokemonService'
import { useRouter} from 'vue-router'
import{ ref} from 'vue'
import { RouterLink } from 'vue-router'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const userStore = useUserStore()
const pokemonsArray = ref([]);
const favoritos = ref([])
const router = useRouter();
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

function addFavoritos(pokemon){
 
  favoritos.value.push(pokemon)

  console.log(favoritos.value)
}


function home (){
  router.push('/')
}

</script>

<style>
.img {
  width: 200px;
  height: 50px;
}

.btnFav{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: blue;
  color: white;
}
.contenedor-conciertos {

	/* Grid */
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
}

.card {
  background: peachpuff;
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


}
.banner{
 
  border-radius: 5%;
  background-color: blue ;
  opacity: 80%;
  padding: 20px 20px;

}

.banner ul {
	list-style: none;

}

.banner ul li {
	margin: 15px;
	font-weight: bold;
}
</style>