import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiArrowBack, BiMoviePlay } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import usePerson from "../hooks/usePerson";
import getImageURL from "../services/getImageURL";
import styles from "./../../styles/actorPageStyles";

const ActorDetailPage = () => {
  const { id } = useParams();
  const { data } = usePerson(id!);
  return data ? (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      templateColumns={{
        base: "1fr",
        md: "1fr",
        lg: "400px 1fr",
      }}
    >
      <Box justifySelf="center">
        <Image
          src={getImageURL(data?.profile_path)}
          borderRadius={20}
          boxShadow="dark-lg"
          height={500}
        />
      </Box>
      <Box>
        <Heading>{data.name}</Heading>
        <Text>Born: {new Date(data.birthday).toDateString()}</Text>
        <Text>{data.biography}</Text>
        <HStack marginY={3}>
          <Button rightIcon={<BiMoviePlay />} _hover={styles.hover}>
            <Link
              to={`https://www.imdb.com/name/${data.imdb_id}`}
              target="_blank"
            >
              IMDB
            </Link>
          </Button>
          <Button
            onClick={() => history.back()}
            marginX={5}
            _hover={styles.hover}
            leftIcon={<BiArrowBack className="arrow-back" />}
          >
            Go Back
          </Button>
        </HStack>
      </Box>
    </SimpleGrid>
  ) : null;
};

export default ActorDetailPage;
