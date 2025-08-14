import Tabs from './components/common/organisms/Tabs'
import { Main } from './components/common/styled'
import { Typography as T } from './core/typography'

function App() {
  return (
    <>
      <div
        style={{
          background: 'white',
          padding: 30,
          gap: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <T.Heading3 style={{ margin: 0 }}>
          Welcome to React Vite Template
        </T.Heading3>
        <T.BodyBase style={{ margin: 0 }}>
          This is a simple template to get you started with React and Vite.
        </T.BodyBase>
      </div>

      <Main>
        <Tabs
          items={[
            {
              key: 'overview',
              label: 'Overview',
              content: (
                <T.BodyBase>
                  Overview content goes here. Describe the template, goals, etc.
                </T.BodyBase>
              ),
            },
            {
              key: 'components',
              label: 'Components',
              content: (
                <T.BodyBase>
                  Components content goes here. Buttons, badges, modals…
                </T.BodyBase>
              ),
            },
            {
              key: 'hooks',
              label: 'Hooks',
              content: (
                <T.BodyBase>
                  Hooks content goes here. useToggle, useLocalStorage,
                  useCounter…
                </T.BodyBase>
              ),
            },
          ]}
        />
      </Main>
    </>
  )
}

export default App
