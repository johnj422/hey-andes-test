import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './features/agency/agencySlice';
import { db } from './Firebase/config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import sales from './assets/sales.json'



function App() {
  const test = useSelector(state => state.agencys.allAgencys);
  const dispatch = useDispatch();

  useEffect(() => {
    // create()
  }, [])
  console.log(sales[0])
  // const create = () => {
  //   sales.map(a  => {
  //     try {
  //       const docRef = addDoc(collection(db, "agencys"), a);
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   })
    
  // }
  const getAgencys = async () => {
    const querySnapshot = await getDocs(collection(db, "agencys"));
    
    let agencys = [];
    querySnapshot.forEach((doc) => {
      agencys.push(doc.data().nameAgency);
      
      console.log(agencys)
    });
    let arr = new Set(agencys);
    let result = [...arr]
    console.log(result)
  }
  getAgencys()
  

 
   
  
 

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
    </div>
  );
}

export default App;
