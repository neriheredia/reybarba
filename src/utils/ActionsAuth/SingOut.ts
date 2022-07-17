import {app} from '../../setting/firebase/firebase'
import { getAuth, signOut } from "firebase/auth";

export const auth = getAuth(app)

export const singOutUser = async () =>  await signOut(auth)
