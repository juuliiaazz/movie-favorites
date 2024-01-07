import { useContext, useEffect, useMemo, useState } from "react";
import RatingSystem from "./RatingSystem";
import { Loading } from "./Loading";
import { MovieContext, KEY } from "../App";
import { Button } from "../ui/Button";
import {
  DetailsBox,
  DetailsHeader,
  DetailsImage,
  DetailsOverview,
  DetailsRating,
  DetailsSection,
  DetailsTitle,
} from "../ui/Details";
import { Paragraph } from "../ui/Paragraph";

// Detaljer för varje film

export function MovieDetails({ selectedId }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const { onCloseMovie, onAddFavorites, favorites } = useContext(MovieContext);

  const isFavorites = useMemo(
    () => favorites.map((movie) => movie.imdbID).includes(selectedId),
    [favorites, selectedId]
  );

  const favoritesUserRating = favorites.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Poster: poster,
    Year: year,
    Runtime: runtime,
    imdbRating,
    Released: released,
    Plot: plot,
    Director: director,
    Actors: actors,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newFavoritesMovie = {
      imdbID: selectedId,
      year,
      title,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
    };

    onAddFavorites(newFavoritesMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
        );

        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie: ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  return (
    <DetailsBox>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailsHeader>
            <Button type="back" onClick={onCloseMovie}>
              <box-icon name="chevron-left" color="#29293f"></box-icon>
            </Button>
            <DetailsImage src={poster} alt={`Image of ${movie} movie`} />
            <DetailsOverview>
              <DetailsTitle>{title}</DetailsTitle>
              <Paragraph>
                <span>
                  <box-icon
                    name="calendar"
                    color="#fb903d"
                    size="sm"
                  ></box-icon>
                </span>{" "}
                {released}{" "}
                <span>
                  <box-icon
                    name="hourglass"
                    type="solid"
                    color="#fb903d"
                    size="sm"
                  ></box-icon>
                </span>{" "}
                {runtime}
              </Paragraph>
              <Paragraph>{genre}</Paragraph>
              <Paragraph>
                <box-icon
                  name="bookmark"
                  type="solid"
                  color="#fb903d"
                  size="sm"
                ></box-icon>
                {imdbRating} IMDb rating
              </Paragraph>
            </DetailsOverview>
          </DetailsHeader>

          <DetailsSection>
            <DetailsRating>
              {!isFavorites ? (
                <>
                  <RatingSystem
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <Button type="add" onClick={handleAdd}>
                      + Add to favorites
                    </Button>
                  )}
                </>
              ) : (
                <Paragraph>
                  Your rating for this movie is {favoritesUserRating}{" "}
                  <box-icon
                    name="star"
                    type="solid"
                    color="#fb903d"
                    size="md"
                  ></box-icon>
                </Paragraph>
              )}
            </DetailsRating>
            <Paragraph>
              <em>{plot}</em>
            </Paragraph>
            <Paragraph>Starring {actors}</Paragraph>
            <Paragraph>Directed by {director}</Paragraph>
          </DetailsSection>
        </>
      )}
    </DetailsBox>
  );
}
