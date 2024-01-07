import { useContext } from "react";
import { MovieContext } from "../App";
import { ListDiv, ListImage, ListTitle, MovieLists } from "../ui/List";
import { Paragraph } from "../ui/Paragraph";

export function Movie({ movie }) {
  const { onSelectMovie } = useContext(MovieContext);

  return (
    <MovieLists onClick={() => onSelectMovie(movie.imdbID)}>
      <ListImage src={movie.Poster} alt={`${movie.Title} poster`} />
      <ListTitle>{movie.Title}</ListTitle>
      <ListDiv>
        <Paragraph>
          <span>
            <box-icon name="calendar" color="#fb903d" size="sm"></box-icon>
          </span>
          <span>{movie.Year}</span>
        </Paragraph>
      </ListDiv>
    </MovieLists>
  );
}
