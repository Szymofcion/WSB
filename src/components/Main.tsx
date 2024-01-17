/* eslint-disable @typescript-eslint/no-unused-vars */
// import Background from "../ui/Background";
import BottomArrow from "../ui/BottomArrow";
import Form from "../components/Form";
import DataContainer from "../components/ImagesContainer";
import { useColorMode, HStack, Button, Text } from "@chakra-ui/react";
import "../style/Main.scss";
const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="main-container ">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to awesome app
      </Text>
      <HStack>
        <Button
          className="change-theme bn5 label"
          size="sm"
          onClick={toggleColorMode}
        >
          Toggle Mode
        </Button>
      </HStack>
      {/* <Background /> */}
      <Form />
      <DataContainer />
      <BottomArrow />
    </div>
  );
};

export default Main;
