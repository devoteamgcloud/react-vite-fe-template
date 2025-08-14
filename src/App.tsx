// src/App.tsx (optional)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LibraryPage from './pages/LiberyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LibraryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
