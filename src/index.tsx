import React, { StrictMode }  from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task from './Task';
import Contacts from './components/Contacts';
import History from './components/History';
import PostsLayout from './components/Posts/PostsLayout';
import TaskList from './components/TaskList';
import User from './components/User';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/posts" element={<PostsLayout />} />
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
