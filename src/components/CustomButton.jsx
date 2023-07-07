import { Button } from "@chakra-ui/react";
export default function CustomButton({ title, onClickHandle }) {
  return (
    <Button
      onClick={onClickHandle}
      px={{base:"10", lg:"16"}}
      py={"6"}
      fontWeight={"medium"}
      fontSize={{base:"md", lg:"lg"}}
      bgColor={"primary.200"}
      color={"neutrals.0"}
      _hover={{ bgColor: "primary.100" }}
    >
      {title}
    </Button>
  );
}
