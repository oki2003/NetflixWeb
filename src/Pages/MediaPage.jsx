import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediaItem from "../components/Media/MediaItem";
import apiService from "../config/api";

function MediaPage({ type }) {
  const title = {
    moviepopular: "Popular Movies",
    movienow_playing: "Now Playing Movies",
    movieupcoming: "Upcoming Movies",
    movietop_rated: "Top Rated Movies",
    tvpopular: "Popular TV Shows",
    tvairing_today: "TV Shows Airing Today",
    tvon_the_air: "Currently Airing TV Shows",
    tvtop_rated: "Top Rated TV Shows",
  };
  const location = useLocation();
  let [data, setData] = useState([]);
  let [genres, setGenres] = useState([]);
  let [filterGenres, setFilterGenres] = useState([]);

  useEffect(() => {
    fetchData();
  }, [location]);

  useEffect(() => {
    setFilterGenres([]);
  }, [type]);

  const handleFilter = (id) => {
    filterGenres.includes(id)
      ? setFilterGenres(filterGenres.filter((genreId) => genreId !== id))
      : setFilterGenres([...filterGenres, id]);
  };

  const fetchData = async () => {
    const arrGenres = await apiService.getGenresList(type);
    const arrData = await apiService.getMediaList(
      location.pathname === "/" ? "/movie/popular" : location.pathname
    );
    setData(arrData);
    setGenres(arrGenres);
  };

  return (
    <>
      <div id="content">
        <h1 className="pt-9 pb-9 font-semibold text-[30px] text-black">
          {title[`${type}${location.pathname.split("/")[2]}`]}
        </h1>
      </div>
      <div id="content" className="flex">
        <div className="w-70 h-fit flex-none text-black border border-[#e3e3e3] rounded-xl shadow-lg">
          <p className="pl-5 pt-5 pb-5">FILTER GENRES</p>
          <div className="border border-[#eeeeee] border-solid"></div>
          <div className="pl-5 pt-5 pb-5">
            {genres?.map((genre) => (
              <button
                key={genre.id}
                className={`border border-[#9e9e9e] rounded-3xl pt-[8px] pb-[8px] pl-[12px] pr-[12px] mr-3 mb-3 cursor-pointer hover:bg-[#01b4e4] hover:text-[white] ${
                  filterGenres.includes(genre.id)
                    ? "bg-[#01b4e4] text-[white]"
                    : ""
                }`}
                onClick={() => handleFilter(genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
          <div className="border border-[#eeeeee] border-solid"></div>
        </div>
        <div className="flex flex-wrap justify-between">
          {data?.map((item) => {
            if (filterGenres.length == 0) {
              return <MediaItem key={item.id} item={item} type={type} />;
            } else {
              for (let i = 0; i < filterGenres; i++) {
                if (item.genre_ids.includes(filterGenres[i])) {
                  if (i == filterGenres.length - 1) {
                    return <MediaItem key={item.id} item={item} type={type} />;
                  }
                }
              }
            }
          })}
        </div>
      </div>
    </>
  );
}

export default MediaPage;
