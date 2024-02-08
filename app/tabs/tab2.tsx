import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardScene } from "../../components/CardScenes";

export default function Tab2() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab2"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab2">
        <Text textAlign="left" fontSize="36px" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36px" fontWeight="900" color="#ff2900">SCENES</Text>
          <CardScene></CardScene>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}


