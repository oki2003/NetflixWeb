import { useEffect, useState } from "react";
import apiService from "../config/api";
import Cast from "../components/Cast";
import LoadingCast from "../components/LoangdingCast";

function CastPage() {
  const [data, setData] = useState([]);
  const [nameCast, setNameCast] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resCast = await apiService.getCastsList();
    setData(resCast.results);
    setLoading(false);
  };

  const filteredCast = data.filter(
    (cast) =>
      cast.name.toLowerCase().includes(nameCast.toLowerCase()) ||
      cast.original_name.toLowerCase().includes(nameCast.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <LoadingCast />
      ) : (
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black text-[#F9FAFB] mb-4">
                Popular <span className="text-[#E63939]">Cast</span>
              </h1>
              <p className="text-[#9AA8B8] text-xl max-w-2xl mx-auto">
                Discover talented actors and actresses from around the world
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-12 w-full h-10 flex">
              <div className="m-auto flex relative w-[40%] h-full rounded-lg bg-[#16181d] border border-[#20242b]">
                <img
                  src="/icons/search.svg"
                  alt="Icon Search"
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9AA8B8]"
                />
                <input
                  placeholder="Search cast members..."
                  value={nameCast}
                  onChange={(e) => setNameCast(e.target.value)}
                  className="flex-1 pl-10 text-[#F9FAFB] placeholder:text-[#9AA8B8] outline-0"
                />
              </div>
            </div>

            {/* Cast Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCast.map((cast) => (
                <Cast key={cast.id} cast={cast} />
              ))}
            </div>

            {filteredCast.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#9AA8B8] text-xl">
                  No cast members found matching your search.
                </p>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

export default CastPage;
