import { defineStore } from 'pinia'
import  {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'


export const useUserStore = defineStore('userStore',{
      state : () => ({
            userData :null
      }),
      actions :{
            async registrarUsuario(email,password){
                  
                  try {
                        const {user} = await createUserWithEmailAndPassword(auth,email,password)
                        
                        //TODO: VALIDAR QUE EL USUARIO NO EXISTA


                        this.userData = {
                              email : user.name,
                              uid: user.uid

                        }
                        

                  } catch (error) {
                        console.log(error)
                        const errorMessage = error.message;

                  }
            },

            async loginUser(email,password){
                  try {
                        const { user} =  await signInWithEmailAndPassword(auth, email, password)
                        this.userData = { email:user.email, uid: user.uid}

                  } catch (error) {
                        console.log(error)
                        const errorMessage = error.message;

                  }
            }
      }
})