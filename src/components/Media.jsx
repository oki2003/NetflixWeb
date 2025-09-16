import { Link } from "react-router-dom";

function Media({ item, type }) {
  return (
    <Link
      to={
        type === "tv"
          ? `/detailVideo/tv/${item.id}`
          : `/detailVideo/movie/${item.id}`
      }
      className="group block mb-5"
    >
      <div className="rounded-lg border bg-card text-[#f7f9fb] shadow-sm overflow-hidden bg-[#15181d] border-[#20242b] hover:border-[#ee4343] transition-all duration-300 transform hover:scale-105">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
            alt={type === "tv" ? item?.name : item?.title}
            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-2 right-2">
            <div className="rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent  bg-[#f7c530] text-[#0e1014] font-semibold flex items-center gap-1">
              <img src="/icons/black-star.svg" className="w-3 h-3" />
              {item?.vote_average.toFixed(1)}
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-[#f7f9fb] line-clamp-1 group-hover:text-[#ee4343] transition-colors">
            {type === "tv" ? item?.name : item?.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-[#94a3b7]">
            <img
              src="/icons/calendar.svg"
              className="w-4 h-4"
              alt="Calendar Icon"
            />
            {type === "tv"
              ? new Date(item?.first_air_date).getFullYear()
              : new Date(item?.release_date).getFullYear()}
          </div>
          <p className="text-sm text-[#94a3b7] line-clamp-2">
            {item?.overview}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Media;
