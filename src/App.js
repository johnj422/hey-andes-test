import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './features/agency/agencySlice';


function App() {
  const test = useSelector(state => state.agencys.allAgencys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(data())
  }, [])

  // try {
  //   const docRef = addDoc(collection(db, "agencys"), sales);
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
    </div>
  );
}

export default App;
