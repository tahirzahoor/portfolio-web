import { Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function CustomUnSolidButton() {
  return (
    <Button
      fontSize={"xl"}
      fontWeight={"normal"}
      color={"primary.200"}
      border={"1px"}
      p={4}
      display={"flex"}
      variant={"unstyled"}
      rightIcon={<IoIosArrowForward />}
    >
      View More
    </Button>
  );
}
