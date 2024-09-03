import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchResults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // Fetch data from the API
  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      setHasSearched(true);

      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );

      setResults(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input w-72"
        />
        <button type="submit" className="search-button">
          Submit
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Show "No results found" if a search has been triggered and no results */}
      {hasSearched && results.length === 0 && !loading  && (
        <p>No results found</p>
      )}

      {/* Results Grid */}
      <div className="search-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {results.length > 0 &&
          results
            .slice(0, 8)
            .filter((result) => result.show.image !== null)
            .map((result) => (
              <div className="search-result" key={result.show.id}>
                <Link to={`/${result.show.id}`}>
                  <div className="hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={result.show.image.medium}
                      alt={result.show.name}
                      className="w-full h-60 object-cover"
                    />
                    <h2 className="text-xl font-semibold text-center mt-2">
                      {result.show.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default SearchResults;
