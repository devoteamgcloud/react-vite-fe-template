import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './core/theme'
import './index.css'
import LibraryPage from './pages/LiberyPage/LiberyPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LibraryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
