import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs';
import Image from '../components/image';

function HomePage() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
            <Image />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default HomePage;
