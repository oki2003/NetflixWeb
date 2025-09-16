import { Link } from "react-router-dom";

function Hero({ item, type }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920${item?.backdrop_path})`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(14,16,20,0.9), rgba(238,67,67,0.3))",
        }}
      />

      <div className="z-10 container mx-auto px-6 text-center max-w-4xl">
        <span className=" rounded-2xl mb-6 bg-[#ee4343] text-[#f7f9fb] border-none px-4 py-2 text-sm font-medium">
          Trending {type == "tv" ? "TV" : "Movie"}
        </span>

        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#f7f9fb] leading-tight">
          {type === "tv" ? item?.name : item?.title}
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-red-400">
            <img src="/icons/star.svg" className="w-5 h-5" />
            <span className="text-[#f7c530] font-semibold text-lg">
              {item?.vote_average}
            </span>
          </div>
          <div className="w-1 h-6 bg-[#20242b]" />
          <span className="text-[#94a3b7] font-medium">
            {type === "tv"
              ? new Date(item?.first_air_date).getFullYear()
              : new Date(item?.release_date).getFullYear()}
          </span>
        </div>

        <p className="text-xl text-[#94a3b7] leading-relaxed mb-12 max-w-3xl mx-auto">
          {item?.overview}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="flex items-center bg-[#ee4343] hover:bg-[#ee4343]/90 text-[#f7f9fb] border-none px-8 py-2 cursor-pointer text-lg font-semibold rounded-xl"
            style={{ boxShadow: "0 0 30px rgba(238,67,67,0.3)" }}
          >
            <img
              src="/icons/play.svg"
              className="w-4 h-4 mr-2"
              alt="Play Icon"
            />
            Watch Trailer
          </button>
          <Link to={`/detailVideo/movie/${item?.id}`}>
            <button className="flex items-center border bg-[#111111] border-[#f7f9fb] text-[#f7f9fb] cursor-pointer hover:bg-[#f7f9fb] hover:text-[#0e1014] px-8 py-2 text-lg font-semibold rounded-xl">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
