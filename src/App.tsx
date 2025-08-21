import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LibraryPage from './pages/LiberyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LibraryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
