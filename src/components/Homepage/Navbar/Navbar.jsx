"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/user/user.types";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );

  const nav = useNavigate();
  return (
    <>
      <Box
        boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
        bg={useColorModeValue("yellowgreen")}
        px={4}
        position={"fixed"}
        w={"100%"}
        zIndex={"1000"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontWeight={"bold"}
            color={"white"}
            onClick={() => {
              nav("/");
            }}
            cursor={"pointer"}
          >
            Note App
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} alignItems={"Center"}>
              <Button
                display={auth === true ? "block" : "none"}
                bg={"yellow"}
                color={"green"}
                onClick={() => {
                  nav("/notes");
                }}
              >
                All Notes
              </Button>
              <Button
                display={auth === true ? "none" : "block"}
                bg={"yellow"}
                color={"green"}
                onClick={() => {
                  nav("/login");
                }}
              >
                Login
              </Button>
              <Button
                display={auth === true ? "none" : "block"}
                bg={"yellow"}
                color={"green"}
                onClick={() => {
                  nav("/register");
                }}
              >
                SignUp
              </Button>

              <Button bg={"yellow"} color={"green"} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  border={"2px solid yellow"}
                  padding={2}
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => dispatch({ type: LOGOUT })}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
