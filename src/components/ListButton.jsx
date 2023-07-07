import { Button, useColorMode } from "@chakra-ui/react";

export default function ListButton({ option, onlClickHandler , active }) {
  const { colorMode } = useColorMode();
  return (
    <Button
      mx={2}
      color={active?"primary.200" : colorMode === "light" ? "neutrals.100" : "neutrals.0"}
      onClick={()=>{onlClickHandler(option)}}
      variant={"unstyled"}
      bgColor={"transparent"}
    >
      {option}
    </Button>
  );
}
