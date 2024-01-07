import { SearchBar } from "../ui/Search";

// Sökruta i navbar

export function Search({ query, setQuery }) {
  return (
    <SearchBar
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
