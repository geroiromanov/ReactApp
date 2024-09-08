import React, { StrictMode }  from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task from './Task';
import Contacts from './components/Contacts';
import Meals from './components/Meals';
import History from './components/History';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/contacts" element={<Contacts />} >
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
