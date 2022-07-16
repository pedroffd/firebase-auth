// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useAuth } from "@/providers/auth";

import { useForm } from "react-hook-form";

import {
  Button,
  Container,
  Box,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState();
  const { userLogin } = useAuth();
  const router = useRouter();

  const handleUserLogin = async (userData) => {
    try {
      const user = await userLogin(userData);

      if (user) {
        router.push("/admin/homepage");
      }
    } catch (err) {
      setError("User or password is invalid");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Container
      maxWidth={"auto"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgGradient='linear(to-l, #7928CA, #FF0080)' 
    >
      <Container>
        <Box
          
           >
          <Flex
            borderRadius={"4px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            padding={"2rem"}
          >
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"3xl"}
              textAlign={"center"}
              marginBottom={"1rem"}
            >
              Admin Login
            </Text>
            <form onSubmit={handleSubmit(handleUserLogin)}>
              <FormControl isInvalid={errors.name} isRequired>
                <FormLabel htmlFor={"email"}>Email</FormLabel>
                <Input
                  marginBottom={"1rem"}
                  id={"email"}
                  {...register("email")}
                />
                <FormLabel htmlFor={"password"}>Password</FormLabel>
                <Input
                  marginBottom={"1rem"}
                  id={"password"}
                  {...register("password")}
                  type={"password"}
                />
                {error && (
                  <Text
                    textAlign={"center"}
                    color={"red"}
                    marginBottom={"1rem"}
                  >
                    {error}
                  </Text>
                )}
                <Button
                  isLoading={isSubmitting}
                  type={"submit"}
                  display={"flex"}
                  margin={"0 auto"}
                  width={"180px"}
                >
                  Login
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
