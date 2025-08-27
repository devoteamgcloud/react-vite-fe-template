import { Routes, Route } from 'react-router-dom'
import LibraryPage from './pages/LiberyPage'

function App() {
  return (
    <Routes>
      <Route index element={<LibraryPage />} />
    </Routes>
  )
}

export default App
