import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import MockProject from "../assets/images/MockProject.svg";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ProjectMainCard({
  title = "Medesto",
  category = "Category",
  mainImage,
  id,
}) {
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/project/${id}`}>
      <Stack m={{ base: 2, lg: 0 }} _hover={{ cursor: "pointer" }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Card
          px={{ base: "5", lg: "20" }}
          py={{ base: "0", lg: "2" }}
          bgColor={"#E7ECF9"}
          border={"1px"}
          borderColor={"neutrals.50"}
          width={{base:"sm",lg:"xl"}} height={{base:"xs",lg:"sm"}}
          _hover={{ boxShadow: "2xl" }}

        >
          <CardBody>
            <Heading color={"black"} textAlign={"center"} size={"md"}>
              {title}
            </Heading>
            <Heading
              my={3}
              fontWeight={"medium"}
              color={"primary.200"}
              textAlign={"center"}
              size={{ base: "sm", lg: "md" }}
            >
              {category ? category :"CATEGORY"}
            </Heading>
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={mainImage} mt={5}  alt="Main Image" />
            </motion.div>
          </CardBody>
        </Card>
        <Box
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          h={"50px"}
        >
          {isHovered && (
            <Link to={`/project/${id}`}>
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <Button
                  variant={"unstyled"}
                  rightIcon={<AiOutlineRight />}
                  display={"flex"}
                  color={"primary.200"}
                >
                  {" "}
                  View More
                </Button>
              </motion.div>
            </Link>
          )}
        </Box>
        <Box
          display={{ base: "flex", lg: "none" }}
          justifyContent={"center"}
          h={"50px"}
        >
          <Link to={`/project/${id}`}>
            <Button
              mt={5}
              variant={"unstyled"}
              rightIcon={<AiOutlineRight />}
              display={"flex"}
              color={"primary.200"}
            >
              {" "}
              View More
            </Button>
          </Link>
        </Box>
      </Stack>
    </Link>

  );
}
