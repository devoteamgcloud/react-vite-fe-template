import Tabs from '../../components/common/organisms/Tabs'
import { PaddedContainer } from '../../components/common/styled'
import { LIBRARY_TABS } from './tabs.config'
import Header from '../../components/common/Layout/Header'
import { useElementHeight } from '../../hooks/useElementHeight'

export default function LibraryPage() {
  const { ref, height } = useElementHeight<HTMLDivElement>()

  return (
    <>
      <Header
        title="React-Vite Template"
        subtitle="Explore reusable components, hooks, and patterns"
        forwardedRef={ref}
      />

      <PaddedContainer>
        <Tabs offset={height} items={LIBRARY_TABS} defaultKey="overview" />
      </PaddedContainer>
    </>
  )
}
