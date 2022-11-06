
      <template>


            <div>
                  <h1> Login</h1>
            <form @submit.prevent="handleSubmit">


                  <input type="email"
                  placeholder="Correo"
                  v-model.trim="data.email"
                  >
                
        

                  <input type="password"
                  placeholder="Contraseña"
                  v-model.trim="data.password"
                  >

                 

                  <button> Ingresar</button>
            </form>

            <p>¿Aun no tienes una cuenta?</p>
            <a href="#"> Registro </a>

            </div>




     
    
    </template>





<script setup>

    import { useUserStore} from '../store/user'
    import { useRouter} from 'vue-router'
    import { useVuelidate } from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import { reactive } from 'vue';

   

    const userStore = useUserStore();
   const router = useRouter();
   
  const data = reactive({
      email:'',
      password:''
  });

  const rules = {
      email:{required},
      password :{required}
  }


 const v$ =  useVuelidate(rules,data);

 const handleSubmit = async () => {
      const result = await v$.value.$validate();
      if( result){
           
        const loginUser =    await  userStore.loginUser(data.email, data.password)
          
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
    
    