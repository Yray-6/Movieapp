import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/breadcrumbs";


export default function RootLayout() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <div className="root-layout bg-hero bg-blend-overlay overlay-dark min-h-[500px] lg:min-h-[700px]">
      <nav className={`py-5 top-0 fixed right-0 left-0 grid md:grid-cols-6 grid-cols-5  z-30 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
        
        <h2 className="md:text-2xl pl-8 md:pl-20 text-base pt-2 text-red-500  font-bold md:col-span-5 col-span-3">
          GICHENGA-APP
        </h2>
        <div className=" md:col-span-1 col-span-2 pt-2">
          <NavLink className=" text-sm mr-4 p-2 md:text-base " to="/">
            Home
          </NavLink>
          <NavLink className=" text-sm p-2 md:text-base" to="about">
            About
          </NavLink>
        </div>
      </nav>
      <div className="mt-16 md:mt-16">
        <Breadcrumbs />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}
