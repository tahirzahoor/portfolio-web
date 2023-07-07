import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant={"unstyled"}
      icon={
        colorMode === "light" ? (
          <MoonIcon ml={4} fontSize={"2xl"} />
        ) : (
          <SunIcon ml={4} fontSize={"2xl"} />
        )
      }
      onClick={toggleColorMode}
      aria-label="Toggle theme"
    />
  );
};
