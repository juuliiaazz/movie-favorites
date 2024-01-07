import { useContext } from "react";
import { MovieContext } from "../App";
import { Movie } from "./Movie";
import { ListMovie } from "../ui/List";

// Lista som visar upp filmer man söker på

export function MovieList() {
  const { movies } = useContext(MovieContext);
  return (
    <>
      <ListMovie>
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID}></Movie>
        ))}
      </ListMovie>
    </>
  );
}
