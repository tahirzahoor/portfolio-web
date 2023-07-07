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
import {Link} from "react-router-dom"
export default function ProjectMainCard({title = "Medesto" , category = "Category", mainImage , id}) {
  const { colorMode } = useColorMode();
  return (
    <Stack _hover={{ cursor: "pointer" }} mt={5} mx={["0", 5]}>
      <Card
        px={{base:"5", lg:"16"}}
        py={{base:"0", lg:"2"}}
        bgColor={"#E7ECF9"}
        border={"1px"}
        borderColor={"neutrals.50"}
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
            size={{base:"sm", lg:"md"}}
          >
            {category}
          </Heading>
          <Image width={"350px"} src={mainImage} mt={5} />
        </CardBody>
      </Card>
      <Box display={"flex"} justifyContent={"center"}>
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
  );
}
