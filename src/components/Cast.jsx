import { Link } from "react-router-dom";

function Cast({ key, cast }) {
  return (
    <Link key={key} to={`/person/${cast.id}`}>
      <div className="mb-5 rounded-lg border bg-[#14181C] text-[#F9FAFB] shadow-sm group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-[#1F2429] overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#F9FAFB] text-lg mb-1 line-clamp-1">
            {cast.name}
          </h3>
          <p className="text-[#9AA8B8] text-sm mb-2 line-clamp-1">
            {cast.original_name}
          </p>
          <p className="text-[#FACC3C] text-xs font-medium mb-1">
            {cast.known_for_department}
          </p>
          <p className="text-[#9AA8B8] text-xs line-clamp-1">
            Known for:{" "}
            {cast.known_for[0]?.title || cast.known_for[0]?.name || "Unknown"}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#E63939] text-xs font-bold">
              Popularity: {cast.popularity.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cast;
