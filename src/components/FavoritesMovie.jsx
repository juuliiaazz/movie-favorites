import { useContext } from "react";
import { MovieContext } from "../App";
import Button from "../ui/Button";
import { List, ListImage, ListTitle, ListDiv } from "../ui/List";
import { Paragraph } from "../ui/Paragraph";

export function FavoritesMovie({ movie }) {
  const { onDeleteFavorites } = useContext(MovieContext);
  return (
    <List>
      <ListImage src={movie.poster} alt={`${movie.title} poster`} />
      <ListTitle>{movie.title}</ListTitle>
      <ListDiv>
        <Paragraph>
          <box-icon
            name="bookmark"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <span>{movie.imdbRating}</span>
        </Paragraph>
        <Paragraph>
          <box-icon
            name="star"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <span>{movie.userRating}</span>
        </Paragraph>
        <Paragraph>
          <box-icon
            name="hourglass"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <span>{movie.runtime} min</span>
        </Paragraph>

        <Button type="delete" onClick={() => onDeleteFavorites(movie.imdbID)}>
          X
        </Button>
      </ListDiv>
    </List>
  );
}
