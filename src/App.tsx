import Tabs from './components/common/organisms/Tabs'
import { Main } from './components/common/styled'
import { Typography as T } from './core/typography'

function App() {
  return (
    <>
      <T.Heading3 style={{ margin: '20px' }}>
        Welcome to React Vite Template
      </T.Heading3>
      <T.BodyBase style={{ margin: '20px' }}>
        This is a simple template to get you started with React and Vite.
      </T.BodyBase>

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
