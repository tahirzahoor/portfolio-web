// import { Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

// export default function CustomUnSolidButton() {
//   return (
//     <Button
//       fontSize={"xl"}
//       fontWeight={"normal"}
//       color={"primary.200"}
//       border={"1px"}
//       p={4}
//       display={"flex"}
//       variant={"unstyled"}
//       rightIcon={<IoIosArrowForward />}
//     >
//       View More
//     </Button>
//   );
// }
import React from "react";
import "../style/unSolidButton.css";
import { Button, Text } from "@chakra-ui/react";
const CustomUnSolidButton = () => {
  return (
    <ul>
      <li>
       View More 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  );
};

export default CustomUnSolidButton;
