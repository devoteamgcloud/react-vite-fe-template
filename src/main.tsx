import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@emotion/react'
import theme from './core/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {/* 
            <Route index element={<OverviewPage />} />
            <Route path="components" element={<ComponentsPage />} />
            <Route path="hooks" element={<HooksPage />} />
            */}
            <Route index element={<div />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
