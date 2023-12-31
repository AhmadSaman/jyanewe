import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/userContext";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const Links = [
  {
    path: "/events",
    text: "Events",
  },
  {
    path: "/people",
    text: "People",
  },
  {
    path: "/companies",
    text: "Companies",
  },
  {
    path: "/archive",
    text: "Archive",
  },
  {
    path: "/accomplishments",
    text: "Accomplishments",
  },
  {
    path: "/aboutUs",
    text: "About Us",
  },
];
// const Links = [
//   "events",
//   "People",
//   "Companies",
//   "Archive",
//   "Accomplishments",
//   "About Us",
// ];

const NavLink = ({ children, path }: { path: string; children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={path}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { user, signOut } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return (
    <Flex direction={"column"} border={"solid 1px black"} minHeight={"100vh"}>
      <Box
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("green.50", "green.900")}
        px={4}
        boxShadow={"sm"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{ backgroundColor: "#F0FFF4" }}
            backgroundColor={"transparent"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={logo} boxSize={"50px"} objectFit={"cover"} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ path, text }) => (
                <NavLink key={path} path={path}>
                  {text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={user.user_metadata.avatar_url} />
              </MenuButton>
              <MenuList>
                <MenuItem>My Events</MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={async () => {
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ path, text }) => (
                <NavLink key={path} path={path}>
                  {text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Center p={4} height={"full"} flex={1} alignContent={"center"}>
        <Outlet />
      </Center>
      <Footer />
    </Flex>
  );
}
