import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../public/felixLogo.png";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1440px"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <HStack spacing={4} alignItems={"center"}>
          <Image src={Logo} alt="Logo" boxSize="40px" />
          <Text
            fontSize={{ base: "35", sm: "30" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            <Link to={"/"}>Crazy Product Store</Link>
          </Text>
        </HStack>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
