
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





import { useUserStore} from '../store/user'
import { useRouter} from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required , sameAs } from '@vuelidate/validators'
import { reactive } from 'vue';

const userStore = useUserStore();
const router = useRouter();

const data = reactive({
      email:'',
      password:'',
      passwordConfirm:''
  });


  const rules = {
      email:{required},
      password :{required},
      passwordConfirm: { 
                required, 
                sameAs: sameAs(data.password)
            }
  }

  const v$ =  useVuelidate(rules,data);



  const handleSubmit = async () => {
      const result = await v$.value.$validate();
      if( result){
           
        const createUser =    await  userStore.registrarUsuario(email.value, password.value)
          
        //TODO:   VALIDAR SI EL USUARIO YA EXISTE O SE REGISTRO CORRECTAMENTE
        // mostrar error si el la constraseñas no coninciden
       if(loginUser === 'Firebase: Error (auth/user-not-found).'){
            alert('UPS!! REVISA TUS CREDENCIALES')
           
       }else{
        
            router.push('/')
       }
 
             
      }else{
            alert('DEBES LLENAR TODOS LOS CAMPOS')
      }
 }








</script>