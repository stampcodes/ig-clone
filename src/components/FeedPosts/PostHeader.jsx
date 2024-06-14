import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

const PostHeader = (props) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"cneter"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={props.avatar} alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          {props.username}
          <Box color={"gray.500"}>1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
