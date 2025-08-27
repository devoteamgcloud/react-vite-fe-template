import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LibraryPage from './pages/LiberyPage'
import { ThemeProvider } from './providers/ThemeContext'

function App() {
  return (
    <StrictMode>
      <ThemeProvider >
        <BrowserRouter>
          <Routes>
            <Route index element={<LibraryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
