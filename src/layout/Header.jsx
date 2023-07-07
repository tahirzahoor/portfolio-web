import {
  Box,
  Collapse,
  HStack,
  IconButton,
  Image,
  LinkBox,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import logoSvg from "../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./../components/ThemeToggle";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const location = useLocation();
  const buttonStyles = (pathname) => ({
    color:
      pathname === location.pathname
        ? "primary.200"
        : colorMode === "light"
        ? "neutrals.200"
        : "neutrals.50",
    mr: 2,
  });

  return (
    <Box>
      <HStack shadow={"md"} w={"full"} minH={{base:"12", md:"16", lg:"16"}} px={{base:"5", lg:"16"}}>
        <Box>
          <Image src={logoSvg} alt="logo" />
        </Box>
        <HStack
          display={{base:"none" , lg:"flex"}}
          w={"full"}
          justifyContent={"flex-end"}
          gap={10}
        >
          <Link variant={"unstyled"} as={Link} to="/">
            <Text _hover={{ color: "primary.200" }} {...buttonStyles("/")}>
              Home
            </Text>
          </Link>
          <Link variant={"unstyled"} as={Link} to="/about">
            <Text _hover={{ color: "primary.200" }} {...buttonStyles("/about")}>
              About Me
            </Text>
          </Link>
          <Link variant={"unstyled"} as={Link} to="/projects">
            <Text
              _hover={{ color: "primary.200" }}
              {...buttonStyles("/projects")}
            >
              Projects
            </Text>
          </Link>
          <Link variant={"unstyled"} as={Link} to="/contact">
            <Text
              _hover={{ color: "primary.200" }}
              {...buttonStyles("/contact")}
            >
              Contact
            </Text>
          </Link>
          <ThemeToggle />
        </HStack>

        <HStack
          display={{base:"flex", lg:"none"}}
          w={"full"}
          justifyContent={"flex-end"}
        >
          <ThemeToggle />
          <IconButton
            variant={"unstyled"}
            icon={<HamburgerIcon />}
            fontSize={"2xl"}
            onClick={onToggle}
          />
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box
          shadow="md"
          textAlign={"center"}
          onClick={onToggle}
          display={{base:"block", lg:"none"}}
        >
          <LinkBox py={"2"} shadow={"sm"}>
            <Link variant={"unstyled"} as={Link} to="/">
              <Text _hover={{ color: "primary.200" }} {...buttonStyles("/")}>
                Home
              </Text>
            </Link>
          </LinkBox>
          <LinkBox py={"2"} shadow={"sm"}>
            <Link variant={"unstyled"} as={Link} to="/about">
              <Text
                _hover={{ color: "primary.200" }}
                {...buttonStyles("/about")}
              >
                About Me
              </Text>
            </Link>
          </LinkBox>
          <LinkBox py={"2"} shadow={"sm"}>
            <Link variant={"unstyled"} as={Link} to="/projects">
              <Text
                _hover={{ color: "primary.200" }}
                {...buttonStyles("/projects")}
              >
                Projects
              </Text>
            </Link>
          </LinkBox>
          <LinkBox py={"2"} shadow={"sm"}>
            <Link variant={"unstyled"} as={Link} to="/contact">
              <Text
                _hover={{ color: "primary.200" }}
                {...buttonStyles("/contact")}
              >
                Contact
              </Text>
            </Link>
          </LinkBox>
        </Box>
      </Collapse>
    </Box>
  );
}
