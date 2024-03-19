import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
import Login from './features/webs/Login';
import{ Prod } from './features/webs/Prod';
import Register from './features/webs/Register';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<h1>ddddddddddd</h1>} />
          <Route path="/Prod" element={<Prod/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
      </Route>
       {/* <Route path="/About" element={<About />}/> */}
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
