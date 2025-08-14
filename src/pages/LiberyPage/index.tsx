// src/pages/LibraryPage/index.tsx
import { Typography as T } from '../../core/typography'
import Tabs from '../../components/common/organisms/Tabs'
import { Main } from '../../components/common/styled'
import { LIBRARY_TABS } from './tabs.config'

export default function LibraryPage() {
  return (
    <>
      <T.Heading3 style={{ margin: 20 }}>
        Welcome to React Vite Template
      </T.Heading3>
      <T.BodyBase style={{ margin: 20 }}>
        This is a simple template to get you started with React and Vite.
      </T.BodyBase>

      <Main>
        <Tabs items={LIBRARY_TABS} defaultKey="overview" />
      </Main>
    </>
  )
}
