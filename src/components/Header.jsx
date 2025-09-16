import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = useState("");
  return (
    <nav className="fixed top-0 w-full z-30 bg-[#0e1014]/90 backdrop-blur-md border-b border-[#20242b]">
      <div className="container mx-auto px-6 h-20 flex">
        <div className="w-full flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-[#ee4343] hover:text-[#ee4343]/80 transition-colors"
          >
            <img
              rel="icon"
              src="/icons/vite.svg"
              className="group-hover:opacity-80"
            />
            <span className="text-2xl font-black">Netflix</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="cursor-pointer group relative text-[#f7f9fb] hover:text-[#ee4343] transition-colors font-medium">
              Movies
              <div className="absolute hidden left-0 top-full w-full group-hover:block z-40">
                <div className="grid w-[200px] gap-3 py-3 bg-[#15181d] border border-[#20242b] rounded-lg">
                  <Link
                    to="/movie/popular"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Popular
                  </Link>
                  <Link
                    to="/movie/now_playing"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Now Playing
                  </Link>
                  <Link
                    to="/movie/upcoming"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Up Coming
                  </Link>
                  <Link
                    to="/movie/top_rated"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Top Rated
                  </Link>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative text-[#f7f9fb] hover:text-[#ee4343] transition-colors font-medium">
              TV shows
              <div className="absolute hidden left-0 top-full w-full group-hover:block z-40">
                <div className="grid w-[200px] gap-3 py-3 bg-[#15181d] border border-[#20242b] rounded-lg">
                  <Link
                    to="tv/popular"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Popular
                  </Link>
                  <Link
                    to="tv/airing_today"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Airing Today
                  </Link>
                  <Link
                    to="tv/on_the_air"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    On TV
                  </Link>
                  <Link
                    to="tv/top_rated"
                    className="block pl-4 font-normal p-3 transition-colors hover:bg-[#0e1014] hover:text-[#ee4343] text-[#f7f9fb]"
                  >
                    Top Rated
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/person"
              className="text-[#f7f9fb] hover:text-[#ee4343] transition-colors font-medium"
            >
              Cast
            </Link>
          </div>

          <div className="w-64 h-10 flex items-center justify-between rounded-lg pl-3 bg-[#15181d] border-[#20242b]">
            <img
              src="/icons/search.svg"
              className={`h-[60%] mr-4 ${value == "" && "opacity-60"}`}
              alt="Search Icon"
            />
            <input
              placeholder="Search movies..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onKeyDown={(e) => {
                if (e.target.value != "" && e.key === "Enter") {
                  alert("Chức năng này sẽ thêm sau!");
                }
              }}
              className="flex-1  text-[#f7f9fb] placeholder:text-[#94a3b7] outline-0 "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
