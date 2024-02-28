import React, { useState, useEffect } from "react";
import { Col, Row, Image } from "antd";
import axios from "axios";

function SearchResults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call fetchData function when the form is submitted
    fetchData();
  };



  // Define an async function to fetch data from the API
  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      // Make the API request using Axios or your preferred HTTP client
      const response = await axios.get(
        ` https://api.tvmaze.com/search/shows?q=${query}`
      );

      // Update the results state with the fetched data
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
      {error && <p>Error: error</p>}
      <div className="search-results">
        <div className="px-2 lg:px-10 ">
          {results.length > 0 &&
            results
              .slice(0, 8)
              .filter((result) => result.show.image !== null)
              .map((result) => (
                <div className="search-result" key={result.id}>
                  {result.show.image && (
                    <>
                      <h1 className="md:h-16 md:text-4xl text-red-400 h-12 text-xl font-semibold">
                        {result.show.name}
                      </h1>
                      <div className="lg:px-2 pb-2 lg:grid lg:grid-cols-3">
                        <div className="lg:col-span-1">
                          <img
                            src={result.show.image.medium}
                            className="overflow-hidden object-cover h-84"
                          />
                          <section className="mt-10">
                            <a
                              className="search-button"
                              href={`https://www.google.com/search?q=${encodeURIComponent(
                                result.show.name
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              See Details
                            </a>
                          </section>
                        </div>
                        <div className="lg:col-span-2 mt-7 ">
                          <div> 
                            <div className="text-lg font-semibold">
                              <span className="text-red-500"> Genre:</span>{" "}
                              {result.show.genres[0]}
                            </div>
                            {result.show.summary.includes("<") ? (
                              <div
                                className="text-base leading-7 font-semibold"
                                dangerouslySetInnerHTML={{
                                  __html: result.show.summary,
                                }}
                              />
                            ) : (
                              <div className="text-base font-semibold">
                                {result.show.summary}
                              </div>
                            )}

                            <div className="text-lg font-semibold">
                              <span className=" text-red-500">
                                Average Ratings:
                              </span>{" "}
                              {result.show.rating.average}
                            </div>
                            <div className="text-lg font-semibold">
                              <span className="text-red-500">
                                Show Premiered:
                              </span>{" "}
                              {result.show.premiered}
                            </div>
                            <div className="text-lg font-semibold">
                              <span className="text-red-500">Ended: </span>
                              {result.show.ended}
                            </div>
                            <div className="text-lg font-semibold">
                              <span className="text-red-500">
                                Official Site:
                              </span>{" "}
                              <span>{result.show.officialSite}</span>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
