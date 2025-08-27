import type { TabItem } from '../../components/common/organisms/Tabs'
import OverviewTab from './tabs/Overview'
import ComponentsTab from './tabs/Components'
import HooksTab from './tabs/Hooks'

export const LiberyTabs: TabItem[] = [
  { key: 'overview', label: 'Overview', content: <OverviewTab /> },
  { key: 'components', label: 'Components', content: <ComponentsTab /> },
  { key: 'hooks', label: 'Hooks', content: <HooksTab /> },
]
