import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ProjectHero from "../assets/images/ProjectHero.svg";
import project_1 from "../assets/images/Project_1.svg";
import projectLogo from "../assets/images/projectLogo.svg";
import PlayStore from "../assets/icons/PlayStore.svg";
import ios from "../assets/icons/ios.svg";
import Springs from "../assets/images/springs.svg";
import client from "../assets/images/client.svg";
import Qutation from "../assets/images/quotation-mark.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProjectById from "../services/getProjectById";
import { setProjects } from "../redux/projectSlice";
import getProjects from "../services/getProjects";
import OtherProjects from "../components/OtherProjects";

const LinkButton = ({ title = "title", url }) => (
  <Link href={url} isExternal target="_blank">
    <Button
      m={1}
      fontWeight={"normal"}
      variant={"outline"}
      color={"white"}
      borderColor={"white"}
      _hover={{}}
      borderRadius={"full"}
      px={{ base: 6, lg: 10 }}
    >
      {title}
    </Button>
  </Link>
);

const LinkIconButton = ({ link, platform }) => (
  <Link
    href={link}
    isExternal
    target="_blank"
    display={platform == "web" && "none"}
  >
    <Button
      variant={"outline"}
      color={"black"}
      border={"1px"}
      gap={2}
      fontWeight={"normal"}
      p={{ base: 4, lg: 7 }}
      m={{ base: 2, lg: 5 }}
      fontSize={{ base: "xl", lg: "2xl" }}
    >
      {platform == "android" ? "Play Store" : "App Store"}
      <Image src={platform == "android" ? PlayStore : ios} />
    </Button>
  </Link>
);

const ProjectDesCard = ({ direction, description, image, title }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      mx={{ base: 0, lg: "36" }}
      my={{ base: 5, lg: 10 }}
      gap={20}
      direction={{ base: "column", lg: direction ? "row-reverse" : "row" }}
      alignItems={"center"}

    >
      <Card p={5} bgColor={"#E7ECF9"} borderRadius={"3xl"} alignItems={"center"}>
        <Image width={"lg"} src={image} />
      </Card>
      <Stack
        w={{ base: "full", lg: "40%" }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Heading size={"md"} fontWeight={"medium"} color={"primary.200"}>
          <Text
            as={"span"}
            color={colorMode === "light" ? "neutrals.90" : "white"}
          >
            My{" "}
          </Text>
          {title}
        </Heading>
        <Heading
          size={"sm"}
          fontWeight={"medium"}
          color={colorMode === "light" && "neutrals.90"}
        >
          {description}
        </Heading>
      </Stack>
    </Stack>
  );
};

const ImageCard = ({ image, bColor }) => (
  <Card
    w={{ base: "full", lg: "fit-content" }}
    bgColor={bColor}
    px={{ base: 0, lg: 28 }}
    rounded={"2xl"}
    my={5}
    mx={{ base: 0, lg: 5 }}
    alignItems={"center"}
  >
    <Image boxSize={{ base: "200px", lg: "sm" }} src={image} />
  </Card>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const dispatch = useDispatch();
  const [startColor, setStartColor] = useState();
  const [endColor, setEndColor] = useState();

  useEffect(() => {
    window.scrollTo({ top: "0px" });
    const fetchProject = async () => {
      setProject(await getProjectById(id));
    };
    const fetchProjects = async () => {
      dispatch(setProjects(await getProjects()));
    };

    fetchProjects();
    fetchProject();
    setStartColor(project.colorScheme?.startColor);
    setEndColor(project.colorScheme?.endColor);
  }, [id]);
  const projects = useSelector((state) => state.projects);
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        color={"white"}
        mx={{ base: "-5", lg: "-16" }}
        bgGradient={`linear(to bottom, ${project.colorScheme?.startColor}, ${project.colorScheme?.endColor})`}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={5}
        py={16}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={5}
          textAlign={"center"}
        >
          <Heading fontWeight={"medium"}>{project.title}</Heading>
          <Text mx={{ base: 0, lg: 52 }}>{project.tagline}</Text>
          <Heading size={"md"} fontWeight={"medium"}>
            {project.category}
          </Heading>
          <Box>
            {project.links &&
              project.links.map((item, index) => (
                <LinkButton key={index} title={item.platform} url={item.link} />
              ))}
          </Box>
        </Box>
        <Image width={"xl"} src={project.heroImage} />
      </Box>

      <Box>
        <ProjectDesCard
          description={project.problemStatement}
          title={"Challenge"}
          image={project.images ? project.images[0] : project.mainImage}
        />
        <ProjectDesCard
          description={project.solutionStatement}
          title={"Solution"}
          image={project.images ? project.images[0] : project.mainImage}
          direction={true}
        />
      </Box>

      <Box my={5}>
        {project.images?.slice(2, project.images.length).length > 0 && (
          <Heading
            my={5}
            size={"lg"}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            More high level images about the{" "}
            <Text as={"span"} color={"primary.200"}>
              {project.title}
            </Text>{" "}
          </Heading>
        )}

        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {project.images
            ?.slice(2, project.images.length)
            .map((item, index) => (
              <ImageCard
                key={index}
                image={item}
                bColor={project.colorScheme?.primaryColor}
              />
            ))}
        </Box>
      </Box>

      {(project.links?.platform == "android" ||
        project.links?.platform == "android") && (
          <Box
            color={"black"}
            bgColor={"#DCE5EF"}
            mx={{ base: -5, lg: -16 }}
            display={"flex"}
            justifyContent={{ base: "center", lg: "space-around" }}
            py={5}
            px={2}
          >
            <Stack
              gap={{ base: "2", lg: "5" }}
              w={{ base: "full", lg: "fit-content" }}
              justifyContent={"center"}
            >
              <Heading size={{ base: "md", lg: "xl" }}>Heading</Heading>
              <Heading
                size={{ base: "xs", lg: "md" }}
                fontWeight={"medium"}
                color={"neutrals.300"}
              >
                Have a look on my Work
              </Heading>
            </Stack>
            <Box>
              <Heading size={{ base: "md", lg: "xl" }}>{project.title}</Heading>
              {project.links?.map((item, index) => (
                <LinkIconButton
                  key={index}
                  platform={item.platform}
                  link={item.link}
                />
              ))}
            </Box>
          </Box>
        )}
      <Box
        bgColor={colorMode === "light" ? "neutrals.30" : "neutrals.600"}
        my={10}
        mx={{ base: -5, lg: -16 }}
        color={"black"}
        position={{ base: "inherit", lg: "relative" }}
        py={{ base: 10, lg: 28 }}
        display={{ base: "block", lg: "flex" }}
        alignItems={"center"}
        gap={5}
        px={{ base: 10, lg: 28 }}
        overflow={"hidden"}
      >
        <Image src={project.comment?.image} boxSize={"sm"} zIndex={1} />
        <Box
          bgColor={"primary.200"}
          position={{ base: "inherit", lg: "absolute" }}
          zIndex={2}
          mx={{ base: 5, lg: 0 }}
          my={{ base: 2, lg: 5 }}
          color={"white"}
          py={3}
          px={5}
          rounded={"full"}
          left={{ base: 0, lg: "350px" }}
          bottom={28}
        >
          <Heading size={"md"} textAlign={"center"}>
            {project.comment?.commenter}
          </Heading>
          <Text noOfLines={1} textAlign={"center"}>
            {project.comment?.designation}
          </Text>
        </Box>

        <Card
          w={{ base: "full", lg: "96" }}
          h={"fit-content"}
          px={5}
          py={5}
          rounded={"lg"}
          border={"1px"}
          borderColor={"neutrals.50"}
          m={{ base: 0, lg: 20 }}
          my={{ base: 5, lg: 0 }}
        >
          <Text color={"neutrals.90"}>{project.comment?.text}</Text>
        </Card>

        <Image
          display={{ base: "none", lg: "flex" }}
          src={Qutation}
          position={"absolute"}
          left={"500px"}
          top={"44"}
        />
        <Image
          display={{ base: "none", lg: "flex" }}
          src={Qutation}
          position={"absolute"}
          left={"1000px"}
          top={"420px"}
        />

        <Image
          display={{ base: "none", lg: "flex" }}
          src={Springs}
          position={"absolute"}
          boxSize={"1300px"}
          left={"-650px"}
          transform="rotate(160deg)"
        />
      </Box>

      {projects.length > 4 && (
        <Box py={10} position={"relative"}>
          <Heading
            mx={5}
            top={{ base: "-5", lg: 10 }}
            size={"xl"}
            fontWeight={"medium"}
            position={"absolute"}
          >
            See more{" "}
            <Text as={"span"} color={"primary.200"}>
              Projects
            </Text>
          </Heading>
          <Carousel
            renderArrowPrev={(onClickHandler) => (
              <IconButton
                _hover={{ color: "primary.200" }}
                position={"absolute"}
                zIndex={1}
                right={20}
                top={0}
                display={"flex"}
                border={"1px"}
                rounded={"full"}
                variant={"unstyled"}
                onClick={onClickHandler}
              >
                <FaChevronLeft />
              </IconButton>
            )}
            renderArrowNext={(onClickHandler) => (
              <IconButton
                _hover={{ color: "primary.200" }}
                position={"absolute"}
                zIndex={1}
                right={0}
                top={0}
                display={"flex"}
                border={"1px"}
                rounded={"full"}
                variant={"unstyled"}
                onClick={onClickHandler}
              >
                <FaChevronRight />
              </IconButton>
            )}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            emulateTouch={true}
            infiniteLoop={true}
            swipeable={true}
            renderIndicator={() => {
              false;
            }}
            centerMode={true}
            centerSlidePercentage={33.33}
          >
            {projects.map((item) => (
              <OtherProjects key={item.id} logo={item.logo} id={item.id} />
            ))}
          </Carousel>
        </Box>
      )}
    </Box>
  );
}
