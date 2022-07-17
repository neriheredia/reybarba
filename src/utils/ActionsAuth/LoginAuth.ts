import {app} from '../../setting/firebase/firebase'
import { getAuth} from "firebase/auth";
export const auth = getAuth(app)