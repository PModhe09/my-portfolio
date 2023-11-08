import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Experience, Hero, Tech } from './components';
import App from './App';
import Projects from './components/Projects';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App/>}>
          <Route path="hero" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tech" element={<Tech />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes
