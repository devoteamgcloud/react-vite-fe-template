import { FlexContainer } from '../../../../components/common/styled';
import SectionCard from '../../../../components/common/templates/SectionCard';
import tokens from '../../../../core/tokens';
import { componentSections } from './components.config';

export default function ComponentsTab() {
  return (
    <FlexContainer gap={tokens.gap.BASELINE * 2.5}>
      {componentSections.map((section) => (
        <SectionCard key={section.title} title={section.title}>
          <FlexContainer
            align="center"
            direction="row"
            gap={tokens.gap.BASELINE * 2}
          >
            {section.component}
          </FlexContainer>
        </SectionCard>
      ))}
    </FlexContainer>
  );
}
