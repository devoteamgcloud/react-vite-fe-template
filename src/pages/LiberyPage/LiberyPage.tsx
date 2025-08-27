import Tabs from '../../components/common/organisms/Tabs'
import { Main } from '../../components/common/styled'
import { LiberyTabs } from './tabs.config'
import Header from '../../components/common/Layout/Header'

export default function LibraryPage() {
  return (
    <>
      <Header
        title="React-Vite Template"
        subtitle="Explore reusable components, hooks, and patterns"
      />

      <Main>
        <Tabs items={LiberyTabs} defaultKey="overview" />
      </Main>
    </>
  )
}
