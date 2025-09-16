import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apiService from "../config/api";
import { formatDate, calculateAge } from "../utils/calculation";
import Media from "../components/Media";
import LoadingDetailCast from "../components/LoadingDetailCast";

function CastDetailsPage() {
  const { id } = useParams();
  const [cast, setCast] = useState({});
  const [knownFor, setKnownFor] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [detailCast, arrKnownFor] = await Promise.all([
        apiService.getCastDetails(id),
        apiService.getKnownMedia(id),
      ]);

      setCast(detailCast);
      setKnownFor(arrKnownFor.cast);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingDetailCast />
      ) : (
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <Link
              to="/cast"
              className="inline-flex items-center gap-2 hover:opacity-80 mb-8"
            >
              <img
                src="/icons/arrow-left.svg"
                alt="Arrow Left Icon"
                className="w-5 h-5"
              />
              Back to Cast
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`}
                    alt={cast?.name}
                    className="w-full rounded-lg shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-2">
                <h1 className="text-5xl font-black text-[#F9FAFB] mb-4">
                  {cast?.name}
                </h1>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/trending-up.svg"
                      className="w-5 h-5"
                      alt="Trending Up Icon"
                    />
                    <span className="text-[#9AA8B8]">
                      Popularity:{" "}
                      <span className="text-[#F9FAFB] font-semibold">
                        {cast?.popularity?.toFixed(1)}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/gold-calendar.svg"
                      className="w-5 h-5"
                      alt="Gold Calendar Icon"
                    />
                    <span className="text-[#9AA8B8]">
                      {formatDate(cast?.birthday)} (
                      {calculateAge(cast?.birthday)} years old)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/map-pin.svg"
                      className="w-5 h-5"
                      alt="MapPin Icon"
                    />
                    <span className="text-[#9AA8B8]">
                      {cast?.place_of_birth}
                    </span>
                  </div>
                </div>

                {/* Department & Also Known As */}
                <div className="mb-8">
                  <div className="mb-4">
                    <span className="inline-block bg-[#E63939] text-[#F9FAFB] px-3 py-1 rounded-full text-sm font-semibold">
                      {cast?.known_for_department}
                    </span>
                  </div>

                  {cast?.also_known_as?.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-[#F9FAFB] font-semibold mb-2">
                        Also Known As:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cast?.also_known_as?.slice(0, 5).map((name, index) => (
                          <span
                            key={index}
                            className="bg-[#14181C] text-[#9AA8B8] px-2 py-1 rounded text-sm border border-[#1F2429]"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Biography */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">
                    Biography
                  </h2>
                  <div className="text-[#9AA8B8] leading-relaxed">
                    {cast?.biography?.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Known For Movies */}
                <div>
                  <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">
                    Known For
                  </h2>
                  <div
                    className="w-full overflow-x-scroll flex"
                    id="scrollbarStyle"
                  >
                    {knownFor.map((item) => (
                      <div className="w-60 flex-none m-5">
                        <Media
                          key={item.id}
                          item={item}
                          type={item.media_type}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Links */}
                {cast?.homepage && (
                  <div className="mt-8">
                    <button
                      className="flex items-center bg-[#E63939] hover:bg-[#E63939]/90 text-[#F9FAFB] border-none px-8 py-2 cursor-pointer text-lg font-semibold rounded-xl"
                      style={{ boxShadow: "0 0 30px rgba(230,57,57,0.3)" }}
                    >
                      <a
                        href={cast?.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Official Website
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default CastDetailsPage;
