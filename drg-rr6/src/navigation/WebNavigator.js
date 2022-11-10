import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Home from '../pages/Home';
import About from '../pages/About';

export const WebNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/back' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
