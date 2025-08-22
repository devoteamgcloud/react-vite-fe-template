import List from '../../../../components/common/molecules/List/List'
import { TabContainer } from '../../../../components/common/styled'
import SectionCard from '../../../../components/common/templates/SectionCard'
import { Typography as T } from '../../../../core/typography'
import { overviewSections } from './overview.config'

export default function OverviewTab() {
  return (
    <TabContainer>
      {overviewSections.map((section) => (
        <SectionCard key={section.title} title={section.title}>
          {section.content && <T.BodyBase>{section.content}</T.BodyBase>}
          {section.lists?.map((list) => (
            <List key={list.title} title={list.title} items={list.items} />
          ))}
        </SectionCard>
      ))}
    </TabContainer>
  )
}
