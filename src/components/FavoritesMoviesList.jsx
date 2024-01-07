import { useContext } from "react";
import { MovieContext } from "../App";
import { FavoritesMovie } from "./FavoritesMovie";
import { Lists } from "../ui/List";

export function FavoritesMoviesList() {
  const { favorites } = useContext(MovieContext);

  return (
    <Lists>
      {favorites.map((movie) => (
        <FavoritesMovie movie={movie} key={movie.imdbID} />
      ))}
    </Lists>
  );
}
