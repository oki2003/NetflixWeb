import { Link } from "react-router-dom";

function MediaItem({ item, type }) {
  return (
    <div className="h-93 w-45 mb-8 border border-solid border-[#e3e3e3] rounded-xl ml-8 shadow-lg">
      <Link
        to={
          type === "tv"
            ? `/detailVideo/tv/${item.id}`
            : `/detailVideo/movie/${item.id}`
        }
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          className="h-3/4 mb-3"
          alt="Can't not load this image"
        />
      </Link>
      <Link
        to={
          type === "tv"
            ? `/detailVideo/tv/${item.id}`
            : `/detailVideo/movie/${item.id}`
        }
        className=" text-black hover:text-[#01b4e4] cursor-pointer"
      >
        <p className="pl-4 pb-[3px] pr-4 line-clamp-2">
          {type === "tv" ? item.name : item.title}
        </p>
      </Link>
      <p className="pl-4 text-[#0009]">
        {type === "tv" ? item.first_air_date : item.release_date}
      </p>
    </div>
  );
}

export default MediaItem;
