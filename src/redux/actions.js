
import { db } from '../Firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util';

export const GET_ALL_AGENCYS = 'GET_ALL_AGENCYS';



// export async function getAgencys (){
//     // const querySnapshot = await getDocs(collection(db, "agencys"));
    
//     // return async function (dispatch) {
//     //     let agencys = [];
//     //     return await querySnapshot.forEach((doc) => {
//     //         agencys.push(doc.data());
//     //         dispatch({type: GET_ALL_AGENCYS, payload :agencys})
//     //     });
//     //     console.log(agencys)
//     //     // let arr = new Set(agencys);
//     //     // let result = [...arr]
//     //     // console.log(result)
//     // }

// }
export const getAgencys = () => {
    let agencys = [];
    return async function (dispatch){
    const querySnapshot = await getDocs(collection(db, "agencys"));
    querySnapshot.forEach((doc) => {
      agencys.push(doc.data());
    });
        return dispatch({
            type: GET_ALL_AGENCYS,
            payload: agencys
        })
    }
    
    
  }
