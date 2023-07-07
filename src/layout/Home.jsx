import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  VStack,
  FormControl,
  Input,
  Textarea,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import HomeBG from "../assets/images/HomeBG.svg";
import CustomButton from "./../components/CustomButton";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Main from "../assets/images/main.svg";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import CustomIconButton from "../components/CustomIconButton";
import ListButton from "../components/ListButton";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PreviousCompnies from "../components/PreviousCompnies";
import SectionBg from "../assets/images/sectionBg.svg";
import Springs from "../assets/images/springs.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProjects } from "../redux/projectSlice";
import getProjects from "../services/getProjects";
import { setCategory } from "../redux/categorySlice";
import getCategories from "./../services/getCategories";
import { useForm } from "react-hook-form";
import sendEmail from "../utils/sendEmail";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const [isLargerThanLg] = useMediaQuery("(min-width: 64em)");
  const [activeCategory, setActiveCategory] = useState("All");

  const [mailResponse, setMailResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    sendEmail(data);
    setMailResponse("Email Sent Successfully");
  };

  useEffect(() => {
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
  }, [dispatch, activeCategory, mailResponse]);

  const projects = useSelector((state) => state.projects);
  const category = useSelector((state) => state.category);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handelListButton = (item) => {
    setActiveCategory(item);
  };

  const handleCloseModal = () => {
    setMailResponse(false);
    reset();
  };

  return (
    <Box>
      <Box>
        <Box
          bgImage={`url(${HomeBG})`}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPos={"right"}
          mx={{ base: -5, lg: -16 }}
          px={{ base: 5, lg: 16 }}
          display={{ base: "block", lg: "flex" }}
          justifyContent={"space-between"}
          mb={"5"}
          maxH={{ lg: "70vh" }}
        >
          <Stack
            mt={{ base: "5", lg: 0 }}
            gap={5}
            justifyContent={"center"}
            pl={{ base: "0", lg: "16" }}
          >
            <Stack gap={5}>
              <Heading
                as={"h2"}
                size={{ base: "sm", lg: "md" }}
                color={colorMode === "light" ? "neutrals.400" : "neutrals.50"}
                fontWeight={"500"}
              >
                Associate Project Manager, Senior Software Engineer
              </Heading>
              <Heading as={"h6"} size={{ base: "2xl", lg: "4xl" }}>
                Hi, I’m{" "}
                <Text color={"primary.200"} as={"span"}>
                  Tahir Zahoor
                </Text>
              </Heading>
              <Heading
                as={"h2"}
                size={{ base: "xs", lg: "sm" }}
                color={colorMode === "light" ? "neutrals.200" : "neutrals.50"}
                fontWeight={"500"}
              >
                Bringing Vision to Life with Precision
              </Heading>
            </Stack>
            <Box>
              <Link to={"/contact"}>
                {" "}
                <CustomButton title="Hire Me" />
              </Link>
            </Box>
            <Box display={"flex"} gap={{ base: "3", lg: "5" }}>
              <CustomIconButton
                IconOption={<IoIosMail />}
                type={"email"}
                link={"tahirzahoor456@gmail.com"}
              />
              <CustomIconButton
                IconOption={<FaLinkedinIn />}
                type={"linkedin"}
                link={"https://www.linkedin.com/in/tahir-zahoor-228499124/"}
              />
              <CustomIconButton
                IconOption={<BsWhatsapp />}
                type={"whatsapp"}
                link={"+923044040187"}
              />
            </Box>
          </Stack>
          <Box mt={{ base: "5", lg: "0" }}>
            <Box
              bgColor={colorMode == "light" ? "neutrals.40" : "#0F131A"}
              borderBottomRadius={{ base: "100px", lg: "full" }}
              pt={{ base: "0", lg: "28" }}
              display={{ base: "flex", md: "none", lg: "flex" }}
            >
              <Image
                boxSize={"full"}
                borderBottomRadius={{ base: "100px", lg: "full" }}
                src={Main}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "none ", lg: "flex" }}
          flexDir={"column"}
          alignItems={"center"}
          mb={"28"}
          gap={5}
        >
          <Box>
            <IconButton
              onClick={scrollDown}
              variant={"unstyled"}
              border={"1px"}
              borderRadius={"full"}
              color={"primary.200"}
              fontSize={"4xl"}
              display={"flex"}
              icon={
                <motion.div
                  animate={{
                    scale: [1, 0.8, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                >
                  <BsArrowDownShort size={32} />
                </motion.div>
              }
            />
          </Box>
          <Heading
            as={"h2"}
            size={"sm"}
            fontWeight={"medium"}
            color={colorMode === "light" ? "neutrals.500" : "neutrals.25"}
          >
            SCROLL FOR MORE
          </Heading>
        </Box>
      </Box>
      <Box
        my={10}
        display={"flex"}
        gap={16}
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        <Stack gap={[1, 5]} direction={{ base: "row", lg: "column" }}>
          <HStack
            border={"2px"}
            borderColor={"primary.200"}
            gap={{ base: "2", lg: "5" }}
            px={5}
            py={{ base: "3", lg: "5" }}
            borderRadius={{ base: 20, lg: 20 }}
          >
            <Heading
              as={"h6"}
              size={{ base: "md", lg: "2xl" }}
              color={"primary.200"}
              fontWeight={"normal"}
            >
              8+
            </Heading>
            <Text width={"80%"} textAlign={"center"} fontSize={{ base: "sm", lg: "xl" }}>
              YEARS OF EXPERIENCE
            </Text>
          </HStack>
          <HStack
            border={"2px"}
            borderColor={"primary.200"}
            gap={{ base: "2", lg: "5" }}
            px={5}
            py={{ base: "3", lg: "5" }}
            borderRadius={{ base: 20, lg: 20 }}
          >
            <Heading
              as={"h6"}
              size={{ base: "md", lg: "2xl" }}
              color={"primary.200"}
              fontWeight={"normal"}
            >
              150+
            </Heading>
            <Text width={"80%"} textAlign={"center"} fontSize={{ base: "sm", lg: "xl" }}>
              Projects Completed
            </Text>
          </HStack>
        
        </Stack>
        <Stack gap={3} textAlign={{ base: "center", lg: "left" }}>
          <Heading
            as={"h6"}
            size={{ base: "sm", lg: "md" }}
            fontWeight={"normal"}
            color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
          >
            ABOUT ME
          </Heading>
          <Heading
            as={"h6"}
            size={{ base: "lg", lg: "3xl" }}
            fontWeight={"normal"}
          >
            <Text color={"primary.200"} as={"span"}>
              Empowering
            </Text>{" "}
            Lives through Android.
          </Heading>
          <Text
            color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
            fontSize={{ base: "lg", lg: "2xl" }}
            fontFamily={"custom"}
            fontWeight={"normal"}
          >
            My journey as an Android developer was driven by a noble purpose to
            create apps that empower individuals and improve lives. Combining
            his technical expertise with his passion for social impact
          </Text>
          <Box>
            <Link to={"/about"}>
              <Button
                variant={"unstyled"}
                gap={2}
                color={"primary.400"}
                fontWeight={"bold"}
                rightIcon={<BsArrowRight />}
              >
                READ MORE
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box mt={16} mb={10}>
        <Heading
          textAlign={"center"}
          as={"h6"}
          size={"3xl"}
          fontWeight={"normal"}
        >
          Featured{" "}
          <Text color={"primary.200"} as={"span"}>
            Projects
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
        <Box>
          {projects.map((item, index) => (
            <ProjectCard
              key={item.id}
              odd={index % 2 != 0 && true}
              id={item.id}
              image={item.mainImage}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
          
        </Box>
      </Box>
      <Box mt={20}>
        <Heading
          textAlign={["center", "left"]}
          fontWeight={"medium"}
          fontSize={"2xl"}
        >
          Some of my{" "}
          <Text as={"span"} color={"primary.200"}>
            Clients
          </Text>{" "}
          I have worked for
        </Heading>
        <PreviousCompnies />
      </Box>
      <Stack
        display={{ base: "none", lg: "flex" }}
        bgColor={"neutrals.30"}
        direction={"row"}
        mx={-16}
      >
        <Box w={"full"} display={"flex"} pos={"relative"}>
          <Image src={SectionBg} boxSize={"lg"} />
          <Image
            src={Springs}
            boxSize={"lg"}
            position={"absolute"}
            left={"-44"}
          />
          <Box
            color={"neutrals.0"}
            position={"absolute"}
            left={"36"}
            top={"48"}
          >
            <Box w={"64"}>
              <Heading size={"lg"}>Don’t Be Shy</Heading>
              <Text>
                Feel free to get in touch with me. I’m always open to discussing
                new projects, or creative ideas to be part of your vision.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={"full"} ml={-96}>
          <Heading
            my={10}
            textTransform={"uppercase"}
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
          >
            Get In Touch
          </Heading>
          <form>
            <VStack spacing={4} px={"28"} pb={5}>
              <FormControl id="name">
                <Input
                  border={"1px"}
                  borderColor={"neutrals.40"}
                  placeholder="Please enter your Name"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.60",
                  }}
                  fontFamily={"custom"}
                  type="text"
                  {...register("name", { required: true })}
                  bgColor={"neutrals.0"}
                />
                {errors.name && <span>This field is required</span>}
              </FormControl>
              <FormControl id="email">
                <Input
                  border={"1px"}
                  borderColor={"neutrals.40"}
                  placeholder="Please enter your Email"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.60",
                  }}
                  fontFamily={"custom"}
                  type="email"
                  {...register("email", { required: true })}
                  bgColor={"neutrals.0"}
                />
                {errors.email && <span>This field is required</span>}
              </FormControl>
              <FormControl id="thoughts">
                <Textarea
                  h={"36"}
                  border={"1px"}
                 borderColor={"neutrals.40"}
                  placeholder="Describe your thoughts"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.60",
                  }}
                  fontFamily={"custom"}
                  {...register("thoughts", { required: true })}
                  bgColor={"neutrals.0"}
                />
                {errors.thoughts && <span>This field is required</span>}
              </FormControl>

              <Box display={"flex"} justifyContent={"flex-start"} w={"full"}>
                <CustomButton
                  title={"Submit"}
                  onClickHandle={handleSubmit(onSubmit)}
                />
              </Box>
            </VStack>
          </form>
        </Box>
      </Stack>

      {mailResponse && (
        <Modal isOpen={mailResponse} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Email Response</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mailResponse}</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      <Stack
        bgGradient="linear(180deg, #96C0FF 0%, #358DF0 100%)"
        mx={{ base: -5, md: -16 }}
        textAlign={"center"}
        p={5}
        my={-1}
        gap={5}
        display={{ base: "flex", lg: "none" }}
      >
        <Heading size={"lg"}>Don’t Be Shy</Heading>
        <Text>
          Feel free to get in touch with me. I’m always open to discussing new
          projects, or creative ideas to be part of your vision.
        </Text>
        <Box>
          <Link to={"/contact"}>
            <CustomButton title="CONTACT ME" />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
