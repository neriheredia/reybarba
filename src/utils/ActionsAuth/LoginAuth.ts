import {app} from '../../setting/firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth(app)

export const loginUser = async (email:string, password:string) => {
  const userCredential = await signInWithEmailAndPassword(auth,email, password)
  console.log(userCredential)
}