import logo from './logo.svg';
import './App.css';
import Agencys from './Pages/AgencysPage'
import Detail from './Pages/DetailsPage'
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <Routes>
        <Route path='/empresas' element={ <Agencys />}/>
        <Route path='/empresas/:nombre_empresa' element={ <Detail />}/>
      </Routes>
    </>
  );
}

export default App;
