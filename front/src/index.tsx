import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importen aqui sus componentes
import Header from './common/Header';
import LibraryCatalog from './Vista 1/LibraryCatalog';
import Login from './vista3/login';
import Register from './vista 4/registro';
import Solicitudes from './Vista 5/Solicitudes';
//import FakeNighMode from './common/FakeNightMode'; //only if needed dev
import GridSystem_ProfileWorkspace from './View 7 - User Summary/GridSystem_ProfileWorkingSpace';
import Devolucion from './vista9/Devolucion';
import AdministracionColeccion from './vista10/AdministracionColeccion';

export default function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="catalogo" element={<LibraryCatalog />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="register" element={<Register></Register>}> </Route>
          <Route path="devolucion" element={<Devolucion/>}> </Route>
          <Route path="agregar" element={<AdministracionColeccion/>}> </Route>
          <Route path="perfil" element={<GridSystem_ProfileWorkspace></GridSystem_ProfileWorkspace>}> </Route>
        
      </Routes>
      </Router>

  
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='root-container'>
  <React.StrictMode>

     <Router>
      {/*<FakeNighMode></FakeNighMode>*/}
      <Header></Header>

     </Router>
    
    <App></App>
    

  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();