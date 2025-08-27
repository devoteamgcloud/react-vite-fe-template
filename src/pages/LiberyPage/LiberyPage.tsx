import { Typography as T } from '../../core/typography'
import Tabs from '../../components/common/organisms/Tabs'
import { Main } from '../../components/common/styled'
import { LiberyTabs } from './tabs.config'
import tokens from '../../core/tokens'

export default function LibraryPage() {
  return (
    <>
      <T.Heading3 style={{ margin: tokens.margin.BASELINE * 2.5 }}>
        Welcome to React Vite Template
      </T.Heading3>
      <T.BodyBase style={{ margin: tokens.margin.BASELINE * 2.5 }}>
        This is a simple template to get you started with React and Vite.
      </T.BodyBase>

      <Main>
        <Tabs items={LiberyTabs} defaultKey="overview" />
      </Main>
    </>
  )
}
