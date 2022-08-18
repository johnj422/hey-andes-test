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

  console.log(test)

  return (
    <div className="App">

    </div>
  );
}

export default App;
