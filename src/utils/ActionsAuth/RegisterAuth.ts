import {app} from '../../setting/firebase/firebase'
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'

export const auth = getAuth(app)

export const registerNewUser = async (email:string, password:string) =>  await createUserWithEmailAndPassword(auth,email, password)
