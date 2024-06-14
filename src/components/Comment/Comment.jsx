import { Avatar, Flex, Text } from "@chakra-ui/react"


const Comment = (props) => {
  return (
    <>
    <Flex gap={4}>
      <Avatar src={props.profilePic} name={props.username} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12} >
            {props.username}
          </Text>
            <Text fontSize={14} >
                {props.text}
            </Text>
        </Flex>
        <Text fontSize={14} color={"gray"}>
                {props.createdAt}
            </Text>
      </Flex>


    </Flex>
    </>
  )
}

export default Comment