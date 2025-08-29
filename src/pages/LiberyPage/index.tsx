import Tabs from '../../components/common/organisms/Tabs';
import { PaddedContainer } from '../../components/common/styled';
import { LIBRARY_TABS } from './tabs.config';
import Header from '../../components/common/Layout/Header';

export default function LibraryPage() {
  return (
    <>
      <Header
        title="React-Vite Template"
        subtitle="Explore reusable components, hooks, and patterns"
      />

      <PaddedContainer>
        <Tabs items={LIBRARY_TABS} defaultKey="overview" />
      </PaddedContainer>
    </>
  );
}
