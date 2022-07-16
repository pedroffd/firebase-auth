import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Link,
    useColorModeValue,
    useDisclosure,
    Image,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
  } from "@chakra-ui/icons";
  import { useRouter } from "next/router";
  import { useAuth } from "@/providers/auth";
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const router = useRouter();
    const auth = useAuth();
   
    return (
      <Box w="100%"
      >
        <Flex
          h='100px' bgGradient='linear(to-l, #7928CA, #FF0080)' 
          color={useColorModeValue("white", "white")}
          minH={"75px"}
          minW={"100%"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex ml={{ base: -2 }} mr="2" display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} color="black" />
                ) : (
                  <HamburgerIcon w={5} h={5} color="black" />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justifyContent={{ base: "space-between", md: "start" }}
          >
            <Link href="/">
              <Image
                src="https://hero99.com.br/wp-content/themes/HERO99/assets/images/hero99-white.svg"
                alt="logo"
              />
            </Link>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
            </Flex>
          </Flex>
          {auth.user === null ? (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                borderRadius={"4px"}
                px={6}
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
            </Stack>
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                onClick={() => router.push("/login")}
              >
                Logged in
              </Button>
            </Stack>
          )}
        </Flex>
      </Box>
    );
  }