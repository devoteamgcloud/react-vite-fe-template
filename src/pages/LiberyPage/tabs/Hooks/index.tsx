import Switch from '../../../../components/common/atoms/Switch/Switch';
import { FlexContainer } from '../../../../components/common/styled';
import SectionCard from '../../../../components/common/templates/SectionCard';
import tokens from '../../../../core/tokens';
import { useTheme } from '../../../../providers/ThemeContext'
import { componentSections } from './components';
import { Typography as T } from '../../../../core/typography'
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';


export default function HooksTab() {
  const { toggleTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    if (toggleTheme) {
      toggleTheme()
      setChecked(!checked)
    }
  }
  return (
    <>
      <FlexContainer gap={tokens.gap.BASELINE * 2.5}>
        {componentSections.map((section) => (
          <SectionCard key={section.title} title={section.title}>
            <FlexContainer
              align="start"
              direction="column"
            >
              <T.BodyBase>
                <strong>Description</strong>: {section.description}
              </T.BodyBase>
              <CodeMirror
                value={section.usage}
                editable={false}
                lang="typescript"
                extensions={[StreamLanguage.define(javascript)]}
                theme={checked ? "dark" : "light"}
                />
              <T.Paragraph2>
                <strong>Example</strong>
              </T.Paragraph2>
              {section.components == "custom"
                ? <Switch onChange={toggle} variant={"round"} text="Dark mode" />
                : section.components}
            </FlexContainer>
          </SectionCard>
        ))}
      </FlexContainer>
    </>
  )
}