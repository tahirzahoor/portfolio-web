import {
  Box,
  Button,
  Card,
  FormControl,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Address from "../assets/icons/Address.svg";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import Springs from "../assets/images/springs.svg";
import Phone_1 from "../assets/images/Phone_1.svg";
import Emai_1 from "../assets/images/Email_1.svg";
import { useForm } from "react-hook-form";
import sendEmail from "../utils/sendEmail";

const CustomCard = ({ image, heading, description }) => (
  <Card
    direction={"row"}
    gap={5}
    alignItems={"center"}
    py={{base:8, lg:12}}
    m={{base:0, lg:5}}
    px={10}
    w={"full"}
    borderRadius={"2xl"}
    border={"1px"}
    borderColor={"neutrals.50"}
    shadow={"md"}
  >
    <Image boxSize={"50px"} src={image} />
    <Box>
      <Heading size={"md"} fontWeight={"medium"}>
        {heading}
      </Heading>
      <Text>{description}</Text>
    </Box>
  </Card>
);

export default function Contact() {
 
  const [mailResponse, setMailResponse] = useState(false);
  const { colorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
 
  useEffect(()=>{
    window.scrollTo({ top: "0px"});
  },[])
  const onSubmit = (data) => {
    sendEmail(data);
    setMailResponse("Email Sent Successfully");
  };
  const handleCloseModal = () => {
    setMailResponse(false);
    reset()
    
  };
  return (
    <Box >
     <Stack h={{lg:"80vh"}} justifyContent={"center"} mb={{lg:20}}>
     <Heading textAlign={"center"} fontWeight={"medium"} my={10}>
        Contact Me
      </Heading>
      <Stack direction={{base:"column", lg:"row"}}>
        <CustomCard
          image={Address}
          heading={"Address"}
          description={"Abcd city, Country."}
        />
        <CustomCard
          image={Phone_1}
          heading={"Phone Number"}
          description={"+92-123-456-789-00"}
        />
        <CustomCard
          image={Emai_1}
          heading={"Email"}
          description={"Example@abc.com"}
        />
      </Stack>
     </Stack>

      <Box
        bgColor={colorMode === "light" ? "neutrals.30" : "gray.900"}
        py={5}
        mt={5}
        mx={{base:"-5", lg:"-16"}}
       position={"relative"}
       overflow={"hidden"}
        justifyContent={"center"}
      >
          <Box mx={{base:"5", lg:"96"}}>
          <Text my={5} color={"neutrals.90"}>
            Send Message
          </Text>
          <Heading
            textTransform={"uppercase"}
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
            my={5}
          >
            Get In Touch
          </Heading>
          <form>
          <Image
            boxSize={"xl"}
            src={Springs}
            position={"absolute"}
            right={{base:"-44", md:"-72", lg:"-64"}}
            top={{base:-10, lg:-20}}
          />
            <VStack spacing={4} px={{base:"0", lg:"28"}} pb={5}>
           
              <FormControl id="name">
                <Input
                  border={"1px"}
                  borderColor={"neutrals.50"}
                  placeholder="Please enter your Name"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
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
                  borderColor={"neutrals.50"}
                  placeholder="Please enter your Email"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
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
                  borderColor={"neutrals.50"}
                  placeholder="Describe your thoughts"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
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
        </Box>
      
        
      </Box>
    </Box>
  );
}
