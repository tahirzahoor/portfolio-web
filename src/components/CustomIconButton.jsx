import { IconButton, Link } from "@chakra-ui/react";

export default function CustomIconButton({ IconOption , type , link }) {
  if(type=="email"){
    link = `mailto:${link}`
  }else if(type=="whatsapp"){
    link=`https://wa.me/${link}`
  }
  
  return (
    <Link href={link} isExternal>
    <IconButton
      _hover={{
        bgColor: "primary.200",
        borderColor: "primary.200",
        color: "neutrals.0",
      }}
      variant={"unstyled"}
      border={"1px"}
      borderRadius={"full"}
      display={"flex"}
      textAlign={"center"}
      fontSize={{base:"xl", lg:"2xl"}}
      icon={IconOption}
    />
    </Link>
  );
}
