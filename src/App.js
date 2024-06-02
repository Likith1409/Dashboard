import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification'

import './components/bar.css'
import Suppliers from './pages/Suppliers';
import Members from './pages/Members';
import './pages/Dashboard.css'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Notification' element={<Notification/>}></Route>
      <Route path='/Suppliers' element={<Suppliers/>}></Route>
      <Route path='/Members' element={<Members/>}></Route>
    </Routes> 
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;