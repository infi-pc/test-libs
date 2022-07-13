import { PhoneIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import MyDialog from "./MyDialog";

function App() {
  return (
    <ChakraProvider>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Badge>Default</Badge>

            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
            <MyDialog />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  );
}

export default App;
