// import { Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

// export default function CustomUnSolidButton() {
//   return (
//     
//   );
// }
import React from "react";
import "../style/unSolidButton.css";
import { Box, Button, Text } from "@chakra-ui/react";
const CustomUnSolidButton = () => {
  return (
    <Box>
      <Box display={{base:"none" , lg:"flex"}}>
      <ul>
      <li>
       View More 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
    </Box>
    <Box display={{base:"felx" , lg:"none"}}>
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
    </Box>
    </Box>
  );
};

export default CustomUnSolidButton;
