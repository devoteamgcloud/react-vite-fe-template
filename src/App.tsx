import './App.css'
import Fab from './components/common/atoms/Fab'
import { Typography } from './core/typography'

function App() {
  return (
    <>
      <Fab
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Typography.Heading3 style={{ margin: '20px' }}>
        Welcome to React Vite Template
      </Typography.Heading3>
      <Typography.BodyBase style={{ margin: '20px' }}>
        This is a simple template to get you started with React and Vite.
      </Typography.BodyBase>
    </>
  )
}

export default App
