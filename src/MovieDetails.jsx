import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const movie = useLoaderData();

  useEffect(() => {
    if (movie) {
      setLoading(false); // Set loading to false once the movie data is available
    }
  }, [movie]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Your loading animation/spinner */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="md:h-16 md:text-4xl text-red-400 h-12 text-xl font-semibold">
        {movie.name}
      </h1>
      <div className="lg:px-2 pb-2 lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1">
          <img
            src={movie.image.medium}
            className="overflow-hidden object-cover h-84"
          />
        </div>
        <div className="lg:col-span-2 mt-7">
          <div>
            <div className="text-lg font-semibold">
              <span className="text-red-500">Genre:</span> {movie.genres[0]}
            </div>
            {movie.summary.includes("<") ? (
              <div
                className="text-base leading-7 font-semibold"
                dangerouslySetInnerHTML={{
                  __html: movie.summary,
                }}
              />
            ) : (
              <div className="text-base font-semibold">{movie.summary}</div>
            )}

            <div className="text-lg font-semibold">
              <span className="text-red-500">Average Ratings:</span>{" "}
              {movie.rating.average}
            </div>
            <div className="text-lg font-semibold">
              <span className="text-red-500">Show Premiered:</span>{" "}
              {movie.premiered}
            </div>
            <div className="text-lg font-semibold">
              <span className="text-red-500">Ended:</span> {movie.ended}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

  return response.json();
};
