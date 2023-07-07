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
import projectImage from "../assets/images/projectImage.svg";
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
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/project/${id}`}>
      <Stack _hover={{ cursor: "pointer"}} my={5}
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
        
        _hover={{ boxShadow:"2xl"}}
        m={5}
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
            {category}
          </Heading>
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image boxSize={"xs"} src={mainImage} mt={5} />
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
                mt={5}
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
