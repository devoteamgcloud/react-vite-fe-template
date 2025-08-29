import { useEffect, useState } from 'react';
import * as S from './styled';

export type TabItem = {
  key: string
  label: string
  content: React.ReactNode
}

type Props = { items: TabItem[]; defaultKey?: string }

export default function Tabs({ items, defaultKey }: Props) {
  const keys = items.map((i) => i.key);
  const [active, setActive] = useState(defaultKey ?? keys[0]);

  useEffect(() => {
    if (!keys.includes(active)) setActive(keys[0]);
  }, [keys, active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = keys.indexOf(active);
    if (e.key === 'ArrowRight') setActive(keys[(i + 1) % keys.length]);
    if (e.key === 'ArrowLeft')
      setActive(keys[(i - 1 + keys.length) % keys.length]);
    if (e.key === 'Home') setActive(keys[0]);
    if (e.key === 'End') setActive(keys[keys.length - 1]);
  };

  return (
    <>
      <S.Bar role="tablist" aria-label="Sections" onKeyDown={onKeyDown}>
        {items.map((t) => {
          const isActive = t.key === active;
          return (
            <S.TabButton
              key={t.key}
              role="tab"
              id={`${t.key}-tab`}
              aria-controls={`${t.key}-panel`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              active={isActive}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </S.TabButton>
          );
        })}
      </S.Bar>

      {items.map((t) => {
        const isActive = t.key === active;
        return (
          <S.Panel
            key={t.key}
            role="tabpanel"
            id={`${t.key}-panel`}
            aria-labelledby={`${t.key}-tab`}
            hidden={!isActive}
            aria-hidden={!isActive}
          >
            {isActive && t.content}
          </S.Panel>
        );
      })}
    </>
  );
}
