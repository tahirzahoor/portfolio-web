import {
  Box,
  Button,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import heroImage from "../assets/images/heroSection.svg";
import ListButton from "../components/ListButton";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ProjectMainCard from "../components/ProjectMainCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../redux/projectSlice";
import getProjects from "../services/getProjects";
import { setCategory } from "../redux/categorySlice";
import getCategories from "../services/getCategories";
export default function Projects() {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLargerThanLg] = useMediaQuery("(min-width: 64em)");
  const [noOfProject, setNoOfProject] = useState(6);
  useEffect(() => {
    // window.scrollTo({ top: "0px"});
    const fetchProjects = async () => {
      dispatch(
        setProjects(
          await getProjects(activeCategory == "All" ? "" : activeCategory)
        )
      );
    };
    const fetchCategory = async () => {
      dispatch(setCategory(await getCategories()));
    };

    fetchProjects();
    fetchCategory();
  }, [dispatch, activeCategory]);

  const projects = useSelector((state) => state.projects);
  const category = useSelector((state) => state.category);

  const handelListButton = (item) => {
    setActiveCategory(item);
    setNoOfProject(6);
  };
  return (
    <Box >
      <Box
        minH={{ base: "44", lg: "80vh" }}
        mx={{ base: -5,  lg: -16 }}
        bgImage={heroImage}
        bgSize={"cover"}
        textAlign={"center"}
        display={"flex"}
        flexDir={"column"}
        gap={4}
        justifyContent={"center"}
        mb={{base:0 , lg:20}}
      >
        <Heading mt={{ base: 5, lg: 16 }}>Projects</Heading>
        <Text fontFamily={"custom"}>
          Ut enim ad minima veniam, quis nostrum exercitationem
        </Text>
      </Box>

      <Box my={10}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "lg", lg: "3xl" }}
          fontWeight={"medium"}
          my={5}
        >
          All Creative{" "}
          <Text as={"span"} color={"primary.200"}>
            Work
          </Text>
        </Heading>
        <Stack direction={"row"} justifyContent={"center"} my={5}>
          <ListButton
            onlClickHandler={handelListButton}
            option={"All"}
            active={activeCategory == "All"}
          />
          {category.slice(0, isLargerThanLg ? 4 : 2).map((item, index) => (
            <ListButton
              onlClickHandler={handelListButton}
              key={index}
              option={item}
              active={activeCategory == item}
            />
          ))}

          {category.length > (isLargerThanLg ? 4 : 2) && (
            <Menu>
              <MenuButton
                color={colorMode === "light" ? "neutrals.300" : "neutrals.0"}
                border={{ base: "1px", lg: "none" }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                variant={""}
                as={Button}
                rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
              >
                {category.length - (isLargerThanLg ? 4 : 2)} More
              </MenuButton>
              <MenuList
                p={1}
                h={"200px"}
                overflowY={"scroll"}
                display={"flex"}
                flexDir={"column"}
                gap={3}
              >
                {category
                  .slice(isLargerThanLg ? 4 : 2, category.length)
                  .map((item, index) => (
                    <ListButton
                      onlClickHandler={handelListButton}
                      key={index}
                      option={item}
                      active={activeCategory == item}
                    />
                  ))}
              </MenuList>
            </Menu>
          )}
        </Stack>
      </Box>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        my={5}
        mx={{base:-5 , lg:-16}}
      >
        {projects.slice(0, noOfProject).map((item) => (
          <ProjectMainCard
            key={item.id}
            title={item.title}
            category={item.category}
            mainImage={item.mainImage}
            id={item.id}
          />
        ))}
      </Stack>
      {projects.length > noOfProject && (
        <Box display={"flex"} justifyContent={"center"} my={10}>
          <IconButton
            onClick={() => {
              setNoOfProject(noOfProject + 6);
            }}
            variant={"unstyled"}
            border={"1px"}
            borderRadius={"full"}
            color={"primary.200"}
            fontSize={"4xl"}
            display={"flex"}
            icon={<BsArrowDownShort />}
          />
        </Box>
      )}
    </Box>
  );
}
