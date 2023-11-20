import {NavLink,Outlet} from "react-router-dom"

function About() {
  return (
    <>
    <div className="home-page">
      <h1 className=" text-xl text-red-500 font-bold mb-3">About Gichenga</h1>
      <p>
      Welcome to Gichenga App, your go-to destination for all things movies.
      We are passionate about the world of cinema and are dedicated to helping
      you discover, explore, and enjoy your favorite films like never before.
      </p>
     

      <h1 className="text-red-500 text-xl mt-10 font-semibold">
        Our Mission
      </h1>
      <p>
      At Gichenga, our mission is simple: to connect
      movie enthusiasts with the magic of cinema. We believe that movies have
      the power to inspire, entertain, and provoke thought. Whether you're a
      casual moviegoer or a die-hard cinephile, we're here to enhance your
      movie-watching experience.  We've curated a vast database of movies from every genre, era,
      and corner of the globe. Our goal is to provide you with easy access to
      information about your favorite films and those you're yet to discover.
      </p>
      
    </div>
    <NavLink to='contact'><button className="search-button mb-5">Contact</button></NavLink>
    <Outlet/>
    </>
  );
}

export default About;
