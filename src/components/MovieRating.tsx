import { Badge } from "@chakra-ui/react";

interface Props {
  rating: string;
}

const MovieRating = ({ rating }: Props) => {
  const color = rating >= "7" ? "green" : rating > "5" ? "yellow" : "red";
  return (
    <Badge paddingX={2} borderRadius={5} colorScheme={color}>
      {rating}
    </Badge>
  );
};

export default MovieRating;
