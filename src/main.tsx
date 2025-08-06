import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      //TODO: Add more routes that takes you to different template pages
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About Page</div>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
