import "./SearchRes.css";
import Loading from "./ui/Loading";
import Anime from "./ui/Anime";
import { useEffect, useState } from "react";

function SearchRes({ search }) {
  const [sortOption, setSortOption] = useState("");

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  function sortSearchResults(results, sortOption) {
    switch (sortOption) {
      case "new":
        return [...results].sort((a, b) => b.startDate.year - a.startDate.year);
      case "old":
        return [...results].sort((a, b) => a.startDate.year - b.startDate.year);
      case "trending":
        return [...results].sort((a, b) => b.trending - a.trending);
      case "popular":
        return [...results].sort((a, b) => b.popularity - a.popularity);
      default:
        return [...results].sort((a, b) => b.trending - a.trending);
    }
  }

  const [sortedSearch, setSortedSearch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSortedSearch(sortSearchResults(search, sortOption));
    }, 500);
  }, [search, sortOption]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="results__header">
            <h2 className="subtitle">Search results</h2>
            <select
              name=""
              id="filter"
              onChange={handleSortChange}
              defaultValue={""}
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="new">New to old</option>
              <option value="old">Old to new</option>
              <option value="trending">Trending now</option>
              <option value="popular">Popular</option>
            </select>
          </div>

          <div className="anime__list results__list">
            {sortedSearch.length > 0 ? (
              sortedSearch.map((anime) => (
                <Anime
                  title={anime.title.romaji}
                  cover={anime.coverImage.extraLarge}
                  url={anime.siteUrl}
                  id={anime.id}
                  key={anime.id}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchRes;
