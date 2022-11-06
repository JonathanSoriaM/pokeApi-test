
<template>
      <div>
            <h1> Login</h1>
            <form @submit.prevent="handleSubmit">
                  <input type="email"
                  placeholder="Correo"
                  v-model.trim="email"
                  >

                  <input type="password"
                  placeholder="Contraseña"
                  v-model.trim="password"
                  >

                 

                  <button> Ingresar</button>
            </form>

            <p>¿Aun no tienes una cuenta?</p>
            <a href="#"> Registro </a>
      </div>
</template>

<script setup>
import { async } from '@firebase/util';
import { ref } from 'vue';
import { useUserStore} from '../store/user'
import { useRouter} from 'vue-router'

const userStore = useUserStore();
const router = useRouter();

const email = ref('');
const password = ref('');



 // TODO: FALTA VALIDAR LOS CAMPOS
 // REDIRECCIONAR AL CLIENTE SI QUIERE REGISTRASE 


const handleSubmit = async () => {
  await  userStore.loginUser(email.value, password.value)
  router.push('/')
}


</script>