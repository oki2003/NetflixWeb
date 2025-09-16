import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Media from "../components/Media";
import apiService from "../config/api";
import Hero from "../components/Hero";
import LoadingMedia from "../components/LoadingMedia";

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
  const [loading, setLoading] = useState(true);

  const handleFilter = (id) => {
    filterGenres.includes(id)
      ? setFilterGenres(filterGenres.filter((genreId) => genreId !== id))
      : setFilterGenres([...filterGenres, id]);
  };

  const fetchData = async () => {
    try {
      const [resGenresList, resMediaList] = await Promise.all([
        apiService.getGenresList(type),
        apiService.getMediaList(
          location.pathname === "/" ? "/movie/popular" : location.pathname
        ),
      ]);

      const mediaList = resMediaList.results;
      const genresList = resGenresList.genres;

      setData(mediaList);
      setGenres(genresList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  useEffect(() => {
    setFilterGenres([]);
  }, [type]);

  return (
    <>
      {loading ? (
        <LoadingMedia />
      ) : (
        <div>
          <Hero item={data?.[0]} type={type} />
          <div className="py-8 px-6">
            <div className="container mx-auto">
              <h3 className="text-xl font-semibold text-[#f7f9fb] mb-4">
                Filter by Genre
              </h3>
              {genres?.map((genre) => (
                <button
                  key={genre.id}
                  className={`mr-4 mb-4 cursor-pointer border border-[#2e3440] px-3 py-2 rounded-md font-medium transition-colors text-sm ${
                    filterGenres.includes(genre.id)
                      ? "bg-[#ef4343] hover:bg-[#ef4343]/60"
                      : "bg-[#0e1014] hover:bg-[#f7c530] hover:text-[#0e1014]"
                  }`}
                  onClick={() => handleFilter(genre.id)}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-[#f7f9fb] mb-8">
                {title[`${type}${location.pathname.split("/")[2]}`]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.map((item) => {
                  if (filterGenres.length == 0) {
                    return <Media key={item.id} item={item} type={type} />;
                  } else {
                    for (let i = 0; i < filterGenres; i++) {
                      if (item.genre_ids.includes(filterGenres[i])) {
                        if (i == filterGenres.length - 1) {
                          return (
                            <Media key={item.id} item={item} type={type} />
                          );
                        }
                      }
                    }
                  }
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default MediaPage;
