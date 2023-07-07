import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import PreviousCompnies from "../components/PreviousCompnies";
import AboutImage from "../assets/images/AboutImage.svg";
import { useEffect } from "react";
export default function About() {
  const { colorMode } = useColorMode();
  useEffect(()=>{
    window.scrollTo({ top: "0px"});
  },[])
  return (
    <Box >
      <Box minH={{lg:"85vh"}} display={{base:"block", lg:"flex"}} alignItems={"center"} gap={"44"} mb={10} >
        <Heading
        mt={10}
          size={"lg"}
          fontWeight={"medium"}
          textAlign={{base:"center", lg:"left"}}
        >
          "As an{" "}
          <Text as={"span"} color={"primary.200"}>
            Android developer
          </Text>
          , you're not just building apps you're building bridges that connect
          people, empower businesses, and revolutionize the digital landscape."
        </Heading>
        <Image mx={{base:"auto"}} src={AboutImage} boxSize={"md"} />
      </Box>

      <Box my={5} display={"flex"} gap={5} flexDirection={{base:"column", lg:"row"}}>
        <Stack textAlign={{base:"center", lg:"left"}}>
          <Heading
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            Career & Story
          </Heading>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam
            unde exercitationem eligendi, consequuntur ex officiis architecto
            incidunt voluptatum debitis. Sint voluptatum maxime explicabo nihil
            hic, minus maiores reiciendis corrupti.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam
            unde exercitationem eligendi, consequuntur ex officiis architecto
            incidunt voluptatum debitis. Sint voluptatum maxime explicabo nihil
            hic, minus maiores reiciendis corrupti.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam
            unde exercitationem eligendi, consequuntur ex officiis architecto
            incidunt voluptatum debitis. Sint voluptatum maxime explicabo nihil
            hic, minus maiores reiciendis corrupti.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam
            unde exercitationem eligendi, consequuntur ex officiis architecto
            incidunt voluptatum debitis. Sint voluptatum maxime explicabo nihil
            hic, minus maiores reiciendis corrupti.
          </Text>
        </Stack>

        <Stack direction={"row"} position={"relative"} w={"full"} my={5}>
          <Box
            display={{base:"none", lg:"block"}}
            w={1}
            border={"2px"}
            borderColor={"primary.200"}
            bgColor={"primary.200"}
            my={3}
            position={"absolute"}
            h="sm"
            mt={6}
            left={"5.5px"}
            zIndex={-1}
          ></Box>
          <Box>
            <UnorderedList spacing={5} listStyleType="none" ml={"1.5px"}>
              <ListItem
                sx={{
                  "::before": {
                    content: '""',
                    display: {base:"none", lg:"inline-block"},
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "primary.200",
                    marginRight: "8px",
                    bgColor: "white",
                  },
                  "::marker": {
                    content: "none",
                  },
                  fontSize: "2xl",
                }}
              >
                Education
                <Stack
                  fontSize={"sm"}
                  m={[0, 5]}
                  direction={"row"}
                  fontFamily={"custom"}
                  gap={5}
                >
                  <Stack>
                    <Text>Master of Science - Human Computer Interaction</Text>
                    <Text>2010-2014</Text>
                    <Text>Master of Science - Human Computer Interaction</Text>
                    <Text>2010-2014</Text>
                  </Stack>
                  <Stack>
                    <Text>Master of Science - Human Computer Interaction</Text>
                    <Text>2010-2014</Text>
                    <Text>Master of Science - Human Computer Interaction</Text>
                    <Text>2010-2014</Text>
                  </Stack>
                </Stack>
              </ListItem>

              <ListItem
                sx={{
                  "::before": {
                    content: '""',
                    display: {base:"none", lg:"inline-block"},
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "primary.200",
                    marginRight: "8px",
                    bgColor: "white",
                  },
                  "::marker": {
                    content: "none",
                  },
                  fontSize: "2xl",
                }}
              >
                Experience
                <Stack
                  fontSize={"sm"}
                  m={[0, 5]}
                  direction={"row"}
                  fontFamily={"custom"}
                  gap={5}
                >
                  <Stack>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                  </Stack>
                  <Stack>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                    <Box>
                      <Text>
                        Master of Science - Human Computer Interaction
                      </Text>
                      <Text>2010-2014</Text>
                    </Box>
                  </Stack>
                </Stack>
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>

      <Box my={5}>
        <Heading as={"h6"} size={"md"} fontWeight={"medium"}>
          Clients
        </Heading>
        <PreviousCompnies />
      </Box>
    </Box>
  );
}
