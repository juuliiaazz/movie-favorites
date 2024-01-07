/* eslint-disable react/prop-types */
import { createContext, useEffect, useCallback, useState } from "react";
import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { Loading } from "./components/Loading";
import { ErrorMessage } from "./components/ErrorMessage";
import { NavBar } from "./components/NavBar";
import { MainPage } from "./components/MainPage";
import { MovieBox } from "./components/MovieBox";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { FavoritesSummary } from "./components/FavoritesSummary";
import { FavoritesMoviesList } from "./components/FavoritesMoviesList";
import GlobalStyles from "./styles/GlobalStyles";
import { FirstContainer, MainRow } from "./ui/Main";

// Prop drilling:
// NumResults behöver "const [movies, setMovies] = useState(tempMovieData);" från MovieList. Den närmsta föräldern är App-funktionen.
// Så därför lyfter vi "const [movies, setMovies] = useState(tempMovieData);" till App-funktionen och skickar movies-arrayen till main
// med "movies={movies}". I main lägger vi till "{movies}" som en prop och skickar sedan movies-arrayen till ListBox.
// och sedan gör vi samma sak med ListBox och MovieList och då får både NumResults och MovieList tillgång till:
// "const [movies, setMovies] = useState(tempMovieData);" i App-funktionen.
// Kortfattat: Vi lägger den i App, som skickar till Main, som skickar till ListBox, som skickar till MovieList

// Förenkla problemet med Composition:
// För att göra prop-drilling mer simpelt kan vi istället använda oss av {children}. Logo, Search och NumResults är nu mera children
// till NavBar. Så vi skickar Movies direkt från App-funktionen till de funktioner som behöver det (NumResults och MovieList)

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const KEY = "c16ff6b";

//1. create new context:
export const MovieContext = createContext();

// API-problem. Länk som inte fungerar:
//f84fc31d
//http://www.omdbapi.com/?apikey=${KEY}&s=interstellar

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = useCallback(function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }, []);

  function handleCloseMovie() {
    setSelectedId(null);
  }

  //test
  // function handleCloseList() {
  //   setQuery("");
  // }

  const handleAddFavorites = useCallback(function handleAddFavorites(movie) {
    setFavorites((favorites) => [...favorites, movie]);
  }, []);

  function handleDeleteFavorites(id) {
    setFavorites((favorites) =>
      favorites.filter((movie) => movie.imdbID !== id)
    );
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "false") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  // 2. Provide value to child component:
  return (
    <>
      <GlobalStyles />
      <MovieContext.Provider
        value={{
          onSelectMovie: handleSelectMovie,
          movies,
          onCloseMovie: handleCloseMovie,
          onAddFavorites: handleAddFavorites,
          onDeleteFavorites: handleDeleteFavorites,
          favorites,
          // onCloseList: handleCloseList,
        }}
      >
        <FirstContainer>
          <NavBar>
            <Logo />
            <Search query={query} setQuery={setQuery} />
          </NavBar>
          <MainPage>
            <MainRow>
              <MovieBox>
                {selectedId ? (
                  <MovieDetails selectedId={selectedId} />
                ) : (
                  <>
                    <FavoritesSummary />
                    <FavoritesMoviesList />
                  </>
                )}
              </MovieBox>
              <MovieBox>
                {isLoading && <Loading />}
                {!isLoading && !error && <MovieList />}
                {error && <ErrorMessage message={error} />}
              </MovieBox>
            </MainRow>
          </MainPage>
        </FirstContainer>
      </MovieContext.Provider>
    </>
  );
}
