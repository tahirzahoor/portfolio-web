import { ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react';

const primary = {
  50:"#e6f0ff",
  75:"#96c0ff",
  100:"#6ba6ff",
  200:"#2b7fff",
  300:"#0065ff",
  400:"#0047b3",
  500:"#003e9c",
};
const neutrals = {
  0:"#ffffff",
  10:"#fafafa",
  20:"#f5f5f5",
  30:"#ebebeb",
  40:"#dededf",
  50:"#bfbfc2",
  60:"#b0b0b3",
  70:"#a3a3a7",
  80:"#949498",
  90:"#858589",
  100:"#75757b",
  200:"#66666c",
  300:"#57575d",
  400:"#57575d",
  500:"#3b3b42",
  600:"#2e2e36",
  700:"#1c1c25",
  800:"#0d0d16",
  900:"#00000a",
};

const fonts = {
  body:"Lato , sans-serif",
  custom:"'Source Sans 3', sans-serif"
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? '#FAFAFA' : '#1A202C', // Specify different colors for light and dark themes
      },
    }),
  },
  colors: {
    
    primary,
    neutrals
  },
  fonts,

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
