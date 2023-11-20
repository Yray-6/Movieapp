import Carousels from "../components/Carousel";
import SearchResults from "../components/SearchResults";

function Home() {
  return (
    <div className="home-page">
      <h1
        style={{ marginBottom: 20 }}
        className="md:text-2xl font-bold text-center text-lg mt-20 "
      >
        Welcome to Gichenga App - Your Ultimate Movie Companion!
      </h1>

      <Carousels />

      <p className="text-base lg:text-lg">
         Effortless Search and Discovery: Our user-friendly search
        functionality makes finding movies a breeze. Looking for
        recommendations? Explore curated lists and discover hidden gems you
        might have missed.
      </p>

      <div className="search">
        <h2 className="text-2xl font-semibold text-red-600">Search Movies</h2>
        <SearchResults />
      </div>
      <div className="hero">
        <h3> Discover. Explore. Enjoy.</h3>
        <p>
          At Gichenga App we've curated an extensive database of movies from
          every genre, era, and corner of the globe. Whether you're into
          heart-pounding action, heartwarming dramas, or side-splitting
          comedies, we've got something special for everyone.
        </p>
      </div>
    </div>
  );
}

export default Home;
