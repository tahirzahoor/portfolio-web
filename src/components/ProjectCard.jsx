import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CustomUnSolidButton from "./CustomUnSolidButton";
import MockProject from "../assets/images/MockProject.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ProjectCard({
  id,
  odd = false,
  image = MockProject,
  title = "Medesto - Perigon Health 360",
  description = "The Medesto App works with the Medesto Dispenser to track doses taken or missed and provides important information about medications, including side effects and potentially harmful drug interactions.",
  category = "Healthcare",
}) {
  const { colorMode } = useColorMode();
  return (
    <Link to={`/project/${id}`}>
      <Stack
        direction={{ base: "column", lg: odd ? "row-reverse" : "row" }}
        gap={{ base: 5, lg: 16 }}
        my={10}
        _hover={{ cursor: "pointer" }}
        alignItems={"center"}
      >
        <Card
          bgColor={colorMode == "light" ? "primary.50" : "primary.50"}
          borderRadius={"3xl"}
          p={{ base: 0, lg: 5 }}
          width={{ base: "xs", lg: "xl" }}
          height={{ base: "200px", lg: "xs" }}
        >
          <CardBody display={"flex"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                width={{ base: "xs", lg: "md" }}
                src={image}
                alt="Card Main Image"
              />
            </motion.div>
          </CardBody>
        </Card>
        <Stack
          gap={2}
          textAlign={{ base: "center", lg: "left" }}
          w={{ base: "full", lg: "60%" }}
        >
          <Heading
            as={"h6"}
            fontWeight={"medium"}
            color={"primary.200"}
            size={"md"}
          >
            {title}
          </Heading>
          <Text
            fontSize={"xl"}
            fontFamily={"custom"}
            noOfLines={3}
            color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
          >
            {description}
          </Text>
          <Text color={"primary.200"} fontWeight={"semibold"} fontSize={"sm"}>
            {category}
          </Text>
          <Box
            display={{ base: "none", lg: "block" }}
            justifyContent={"center"}
          >
            <CustomUnSolidButton />
          </Box>
        </Stack>
      </Stack>
    </Link>
  );
}
