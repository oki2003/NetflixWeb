import ReactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

function Header() {
  console.log(Math.random());
  return (
    <div className="w-full h-16 bg-[#032541] flex justify-center items-center">
      <div className="wrapperContent">
        <Link
          to="/"
          target="_blank"
          className="flex jusify-center items-center"
        >
          {/* <img src={ReactLogo} className="h-12" alt="React logo" /> */}
          <img rel="icon" src="/vite.svg" />
        </Link>
        <ul className="flex h-1/2">
          <li className="p-2 ml-3 mr-3 flex justify-center items-center cursor-pointer relative group">
            Movies
            <div className="absolute left-0 top-full bg-white text-black w-35 h-32 pt-2 pb-2 rounded-sm hidden group-hover:block z-3">
              <ul className="h-full flex flex-col">
                <Link
                  to="/movie/popular"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Popular
                </Link>
                <Link
                  to="/movie/now_playing"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Now Playing
                </Link>
                <Link
                  to="/movie/upcoming"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Upcoming
                </Link>
                <Link
                  to="/movie/top_rated"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Top Rated
                </Link>
              </ul>
            </div>
          </li>
          <li className="p-2 ml-3 mr-3 flex justify-center items-center cursor-pointer relative group">
            TV Shows
            <div className="absolute left-0 top-full bg-white text-black w-35 h-32 pt-2 pb-2 rounded-sm hidden group-hover:block z-3">
              <ul className="h-full flex flex-col">
                <Link
                  to="tv/popular"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Popular
                </Link>
                <Link
                  to="tv/airing_today"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Airing Today
                </Link>
                <Link
                  to="tv/on_the_air"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  On TV
                </Link>
                <Link
                  to="tv/top_rated"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Top Rated
                </Link>
              </ul>
            </div>
          </li>
          <li className="p-2 ml-3 mr-3 flex justify-center items-center cursor-pointer relative group">
            People
            <div className="absolute left-0 top-full bg-white text-black w-35 h-11 pt-2 pb-2 rounded-sm hidden group-hover:block z-3">
              <ul className="h-full flex flex-col">
                <Link
                  to="/person"
                  className="pl-4 flex-1 flex items-center hover:bg-[#dee2e6]"
                >
                  Popular People
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
