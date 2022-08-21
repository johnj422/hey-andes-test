
import { db } from '../Firebase/config'
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import { async } from '@firebase/util';

export const GET_ALL_AGENCYS = 'GET_ALL_AGENCYS';
export const GET_AGENCYS_NAMES = 'GET_AGENCYS_NAMES';

export const getAgencys = () => {
    let agencys = [];
    return async function (dispatch){
    const querySnapshot = await getDocs(collection(db, "sales"));
    querySnapshot.forEach((doc) => {
      agencys.push(doc.data());
    });
        return dispatch({
            type: GET_ALL_AGENCYS,
            payload: agencys
        })
    }
    
    
  }
export const agencyNames = () => {
  let agencys = []
  return async function (dispatch){

    const q = query(collection(db, 'sales') );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      agencys.push(doc.data().nameAgency);
    });
    let arr = new Set(agencys);
    let result = [...arr]
    return dispatch({
      type: GET_AGENCYS_NAMES,
      payload: result
  })
  }
  
}
