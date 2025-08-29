import List from '../../../../components/common/molecules/List/List';
import { FlexContainer } from '../../../../components/common/styled';
import SectionCard from '../../../../components/common/templates/SectionCard';
import tokens from '../../../../core/tokens';
import { Typography as T } from '../../../../core/typography';
import { overviewSections } from './overview.config';

export default function OverviewTab() {
    return (
        <FlexContainer gap={tokens.gap.BASELINE * 2.5}>
            {overviewSections.map((section) => (
                <SectionCard key={section.title} title={section.title}>
                    {section.content && <T.BodyBase>{section.content}</T.BodyBase>}
                    {section.lists?.map((list) => (
                        <List key={list.title} title={list.title} items={list.items} />
                    ))}
                </SectionCard>
            ))}
        </FlexContainer>
    );
}
