import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'


const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost 
      username
      />
      <FeedPost />
      <FeedPost />
      <FeedPost />

    </Container>
  )
}

export default FeedPosts