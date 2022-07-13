import logo from "./logo.svg";
import "./App.css";
import {
  AppShell,
  Button,
  Header,
  Input,
  InputWrapper,
  Navbar,
  Tabs,
} from "@mantine/core";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";
import { Findings } from "./Findings";
import MyDialog from "./MyDialog";

function App() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Tabs>
        <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>
          <Findings />
        </Tabs.Tab>
        <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
          <InputWrapper
            id="input-demo"
            required
            label="Credit card information"
            description="Please enter your credit card information, we need some money"
            error="Your credit card expired"
          >
            <Input id="input-demo" placeholder="Your email" />
          </InputWrapper>
        </Tabs.Tab>
        <Tabs.Tab label="Settings" icon={<Settings size={14} />}>
          Settings tab content
        </Tabs.Tab>
      </Tabs>
      <Button color="red" />
      <MyDialog />
    </AppShell>
  );
}

export default App;
