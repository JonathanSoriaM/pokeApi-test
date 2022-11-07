import { defineStore } from 'pinia'
import  {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , onAuthStateChanged,} from 'firebase/auth'
import { auth } from '../firebaseConfig'
import router from '../Routes/route'

export const useUserStore = defineStore('userStore',{
      state : () => ({
            userData :null,
            loadingUser:false,
            loadingSession: false,
      }),
      actions :{
            async registrarUsuario(email,password){
                  this.loadingUser = true
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
                        return errorMessage;
                  }finally{
                        this.loadingUser = false
                  }
            },

            async loginUser(email,password){
                  this.loadingUser = true
                  try {
                        const { user} =  await signInWithEmailAndPassword(auth, email, password)
                        this.userData = { email:user.email, uid: user.uid}

                  } catch (error) {
                        console.log(error)
                        const errorMessage = error.message;
                        return errorMessage;
                  }finally{
                        this.loadingUser = false
                  }
            },

            async logOutUser(){
               
                  try {
                        await signOut(auth)
                        this.userData = null
                        router.push('/login')
                  } catch (error) {
                        console.log(error)
                  }
            },

            currentUser() {
                  return new Promise((resolve, reject) => {
                      const unsuscribe = onAuthStateChanged(
                          auth,
                          (user) => {
                              if (user) {
                                  this.userData = {
                                      email: user.email,
                                      uid: user.uid,
                                  };
                              } else {
                                  this.userData = null;
                              }
                              resolve(user);
                          },
                          (e) => reject(e)
                      );
                      unsuscribe();
                  });
              },
          },
      
})