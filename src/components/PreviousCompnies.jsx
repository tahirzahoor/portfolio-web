import { Box, Stack } from "@chakra-ui/react";
import AirBnbColorless from "../assets/images/collreles_1.svg";
import MicroSoftColorless from "../assets/images/colorless_3.svg";
import googleColorless from "../assets/images/colorless_2.svg";
import feedExColorless from "../assets/images/colorless_4.svg";
import colored_1 from "../assets/images/color_1.svg";
import colored_2 from "../assets/images/colored_2.svg";
import colored_3 from "../assets/images/colored_3.svg";
import colored_4 from "../assets/images/color_4.svg";
import { useState } from "react";
export default function PreviousCompnies() {
  const [airbnb, setAirbnb] = useState(true);
  const [google, setGoogle] = useState(true);
  const [micro, setMicro] = useState(true);
  const [fedex, setfedex] = useState(true);
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "0", lg: "80" }}
      my={5}
    >
      <Box display={"flex"} justifyContent={"space-between"} w={"full"}>
        <Box
          onMouseEnter={() => {
            setAirbnb(!airbnb);
          }}
          onMouseLeave={() => {
            setAirbnb(!airbnb);
          }}
          w={{ base: "150px", lg: "300" }}
          h="100px"
          bgSize={"contain"}
          bgImage={!airbnb ? AirBnbColorless : colored_1}
          bgRepeat={"no-repeat"}
          bgPosition="center"
          transition="background-image 0.3s ease-in-out"
        ></Box>
        <Box
          onMouseEnter={() => {
            setMicro(!micro);
          }}
          onMouseLeave={() => {
            setMicro(!micro);
          }}
          bgSize={"contain"}
          w={{ base: "150px", lg: "300" }}
          h="100px"
          bgImage={micro ? MicroSoftColorless : colored_3}
          bgRepeat={"no-repeat"}
          bgPosition="center"
          transition="background-image 0.3s ease-in-out"
        ></Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} w={"full"}>
        <Box
          onMouseEnter={() => {
            setGoogle(!google);
          }}
          onMouseLeave={() => {
            setGoogle(!google);
          }}
          w={{ base: "150px", lg: "300" }}
          h="100px"
          bgSize={"contain"}
          bgImage={google ? googleColorless : colored_2}
          bgRepeat={"no-repeat"}
          bgPosition="center"
          transition="background-image 0.3s ease-in-out"
        ></Box>
        <Box
          onMouseEnter={() => {
            setfedex(!fedex);
          }}  
          onMouseLeave={() => {
            setfedex(!fedex);
          }}
          w={{ base: "150px", lg: "300" }}
          h="100px"
          bgSize={"contain"}
          bgImage={!fedex ? feedExColorless : colored_4}
          bgRepeat={"no-repeat"}
          bgPosition="center"
          transition="background-image 0.3s ease-in-out"
        ></Box>
      </Box>
    </Stack>
  );
}
