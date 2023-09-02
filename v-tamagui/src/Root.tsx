import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import {
  Tabs,
  H5,
  TamaguiProvider,
  YStack,
  Separator,
  SizableText,
  TabsContentProps,
  ScrollView,
  ListItem,
  Button,
} from "tamagui";
import { Armchair } from "@tamagui/lucide-icons";

import config from "./tamagui.config";

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <YStack fullscreen flex={1}>
        <Tabs
          defaultValue="tab1"
          orientation="horizontal"
          flexDirection="column"
          overflow="hidden"
          flex={1}
          borderColor="$borderColor"
        >
          <TabsContent value="tab1">
            <ScrollView>
              <YStack>
                <ListItem>1</ListItem>
                <ListItem>2</ListItem>
                <ListItem>3</ListItem>
                <ListItem>4</ListItem>
              </YStack>
            </ScrollView>
          </TabsContent>

          <TabsContent value="tab2">
            <Button icon={Armchair}>Hello world</Button>
          </TabsContent>

          <TabsContent value="tab3">
            <H5>Notifications</H5>
          </TabsContent>
          <Separator />
          <Tabs.List
            separator={<Separator vertical />}
            aria-label="Manage your account"
          >
            <Tabs.Tab flex={1} value="tab1">
              <SizableText fontFamily="$body">Profile</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab2">
              <SizableText fontFamily="$body">Connections</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab3">
              <SizableText fontFamily="$body">Notifications</SizableText>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </YStack>
    </TamaguiProvider>
  );
};

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
