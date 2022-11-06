
<template>
      <div>
            <h1> Registro View</h1>
            <form @submit.prevent="handleSubmit">
                  <input type="email"
                  placeholder="Correo"
                  v-model.trim="email"
                  >

                  <input type="password"
                  placeholder="Contraseña"
                  v-model.trim="password"
                  >

                  <input type="password" 
                  placeholder="Confirmar Contraseña"
                  v-model.trim="passwordConfirm"
                  >


                  <button> Registrar</button>
            </form>

            
            <a href="#"> Login </a>
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
const passwordConfirm = ref('');


 // TODO: FALTA VALIDAR LOS CAMPOS
 // REDIRECCIONAR AL CLIENTE SI YA ESTA REGISTRADO

const handleSubmit = async () => {
  await  userStore.registrarUsuario(email.value, password.value)
  router.push('/')
}


</script>