// App.tsx
import { Outlet } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'

export default function App() {
  return (
    <BaseLayout /*actions={<button type="button">Dark</button>}*/>
      {/* child pages will render here later */}
      <Outlet />
    </BaseLayout>
  )
}
