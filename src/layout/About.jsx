import {
  Box,
  Flex,
  Heading,
  Image,
  List,
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
  useEffect(() => {
    window.scrollTo({ top: "0px" });
  }, []);
  return (
    <Box>
      <Box
        minH={{ lg: "85vh" }}
        display={{ base: "block", lg: "flex" }}
        alignItems={"center"}
        gap={"44"}
        mb={10}
      >
        <Heading
          mt={10}
          size={"lg"}
          fontWeight={"medium"}
          textAlign={{ base: "center", lg: "left" }}
        >
          "As an{" "}
          <Text as={"span"} color={"primary.200"}>
            Android developer
          </Text>
          , you're not just building apps you're building bridges that connect
          people, empower businesses, and revolutionize the digital landscape."
        </Heading>
        <Image mx={{ base: "auto" }} src={AboutImage} boxSize={"xl"} />
      </Box>

      <Box
        my={5}
        display={"flex"}
        gap={5}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Stack textAlign={{ base: "center", lg: "left" }}>
          <Heading
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
            textAlign={"center"}
            mt={5}
            mb={2}
          >
            Career & Story
          </Heading>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            Meet Tahir Zahoor!! A passionate and dedicated Android developer
            with over 6 years of extensive experience. Starting my journey in
            computer science at the young age of 17, I quickly developed a love
            for creating challenging apps.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            My family-oriented nature is reflected in my love for spending
            quality time with my loved ones during free time. I also find
            inspiration by exploring different towns and cities, taking in the
            sights and sounds of new environments.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            I am a specialist in developing robust Android applications that
            deliver seamless user experiences. Tahir has a deep understanding of
            the Android ecosystem and excels in leveraging cutting-edge tools
            and frameworks to build high-quality apps. My expertise extends to
            various domains, including Bluetooth app development and IOT, where
            I have demonstrated exceptional skills in creating efficient and
            reliable solutions.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            My career has been marked by continuous growth, both technically and
            as a leader. I excel in guiding and motivating teams, ensuring they
            work collaboratively towards achieving common goals while meeting
            deadlines and upholding high-quality standards.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            With proficiency in multiple programming languages and technologies,
            I am well-equipped to handle complex projects that require
            problem-solving skills and effective collaboration. My unwavering
            passion for development and my commitment to delivering outstanding
            results make me a valuable asset to any team I join.
          </Text>
          <Text
            fontStyle={"custom"}
            color={colorMode == "light" ? "neutrals.300" : "neutrals.0"}
          >
            My career story is marked by a consistent drive for improvement and
            a genuine passion for my craft. I continue to push boundaries and
            seek out new challenges, fueled by a desire to make a lasting impact
            through my work in the field of Android development.
          </Text>
        </Stack>

        <Stack direction={"row"} position={"relative"} w={"full"} my={5}>
          <Box
            display={{ base: "none", lg: "block" }}
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
                    display: { base: "none", lg: "inline-block" },
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
                    <Text>
                      Master in Computer Science | Bahria University Lahore
                      Campus
                    </Text>
                    <Text>2017-2019</Text>
                    {/* <Text>
                      Focused on advanced image processing algorithms, research,
                      and practical applications, while engaging in diverse
                      extracurricular activities to promote personal growth,
                      teamwork, and leadership.
                    </Text> */}
                  </Stack>
                  <Stack>
                    <Text>
                      Bachelors of Computer Science | University of Lahore
                    </Text>
                    <Text>2012-2016</Text>
                    {/* <Text>
                      Proficient in programming, algorithms, data structures,
                      and software development, with a focus on problem-solving
                    </Text> */}
                  </Stack>
                </Stack>
              </ListItem>

              <ListItem
                sx={{
                  "::before": {
                    content: '""',
                    display: { base: "none", lg: "inline-block" },
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
                     Technical Associate Project Manager | BrainX Technologies
                      </Text>
                      <Text>Jan 2022 - Present</Text>
                      {/* <UnorderedList>
                        <ListItem>Managed and delivered technical projects, ensuring scope, budget, and timeline adherence. </ListItem>
                        <ListItem>Collaborated with cross-functional teams (engineers, designers, QA) to define project objectives and deliverables. </ListItem>
                        <ListItem>Utilized Agile/Scrum methodologies for effective project planning, execution, and monitoring. </ListItem>
                        <ListItem>Led meetings, fostering communication and progress. </ListItem>
                        <ListItem>Implemented improvements for enhanced efficiency and quality.	 </ListItem>
                      </UnorderedList> */}
                    </Box>
                   
                  </Stack>
                  <Stack>
                    <Box>
                      <Text>
                        Senior Software Developer| BrainX Technologies
                      </Text>
                      <Text>Apr 2017 - Dec 2021</Text>
                      {/* <UnorderedList>
                        <ListItem>Managed and delivered technical projects, ensuring scope, budget, and timeline adherence. </ListItem>
                        <ListItem>Collaborated with cross-functional teams (engineers, designers, QA) to define project objectives and deliverables. </ListItem>
                        <ListItem>Utilized Agile/Scrum methodologies for effective project planning, execution, and monitoring. </ListItem>
                        <ListItem>Led meetings, fostering communication and progress. </ListItem>
                        <ListItem>Implemented improvements for enhanced efficiency and quality.	 </ListItem>
                      </UnorderedList> */}
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
