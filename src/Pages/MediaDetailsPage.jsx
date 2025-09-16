import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SmallWindow from "../components/SmallWindow";
import apiService from "../config/api";
import { Link } from "react-router-dom";
import LoadingMedia from "../components/LoadingMedia";

function MediaDetailsPage() {
  const [data, setData] = useState({});
  const [arrReviewing, setArrReviewing] = useState([]);
  const [arrVideo, setArrVideo] = useState([]);
  const [smallWindow, setSmallWindow] = useState({ data: {}, show: false });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const type = useLocation().pathname.split("/")[2];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resMediaDetails, resReviewing, resVideoList] = await Promise.all([
        apiService.getMediaDetails(type, id),
        apiService.getReviewsList(type, id),
        apiService.getVideosList(type, id),
      ]);

      setData(resMediaDetails);
      setArrReviewing(resReviewing.results);
      setArrVideo(resVideoList.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingMedia />
      ) : (
        <div>
          <section className="relative pt-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${`https://image.tmdb.org/t/p/w1920${data?.backdrop_path}`})`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,16,20,0.9), rgba(238,67,67,0.3))",
              }}
            />

            <div className="relative z-10 container mx-auto px-6 py-16">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#f7f9fb] hover:opacity-80 transition-colors mb-8"
              >
                <img src="/icons/arrow-left.svg" className="w-5 h-5" />
                Back to Movies
              </Link>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                  alt={data.title}
                  className="w-80 h-auto rounded-lg"
                  style={{ boxShadow: "0 25px 50px -12px rgba(14,16,20,0.8)" }}
                />

                <div className="flex-1 space-y-6">
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-black text-[#f7f9fb] mb-4">
                      {type === "tv" ? data?.name : data?.title}
                    </h1>
                    <p className="text-lg text-[#94a3b7] italic mb-4">
                      {data?.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img src="/icons/star.svg" className="w-5 h-5" />
                        <span className="text-[#f7c530] font-semibold text-xl">
                          {data?.vote_average?.toFixed(1)}
                        </span>
                        <span className="text-[#94a3b7]">
                          ({data?.vote_count} votes)
                        </span>
                      </div>
                      <div className="w-1 h-6 bg-[#20242b]" />
                      <div className="flex items-center gap-2 text-[#94a3b7]">
                        <img
                          src="/icons/calendar.svg"
                          className="w-4 h-4"
                          alt="Calendar Icon"
                        />
                        {type === "tv"
                          ? new Date(data?.first_air_date).getFullYear()
                          : new Date(data?.release_date).getFullYear()}
                      </div>
                      {data?.runtime && (
                        <>
                          <div className="w-1 h-6 bg-[#20242b]" />
                          <div className="flex items-center gap-2 text-[#94a3b7]">
                            <img
                              src="/icons/clock.svg"
                              className="w-4 h-4 mr-2"
                              alt="Play Icon"
                            />
                            {data?.runtime} min
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {data?.genres?.map((genre) => (
                        <div
                          key={genre.id}
                          className="border-transparent px-2 py-1 rounded-lg bg-[#20242b] text-[#f7f9fb] border-none"
                        >
                          {genre.name}
                        </div>
                      ))}
                    </div>

                    <p className="text-lg text-[#94a3b7] leading-relaxed mb-8">
                      {data?.overview}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#trailer"
                        className="flex items-center bg-[#ee4343] hover:bg-[#ee4343]/90 text-[#f7f9fb] border-none px-8 py-2 cursor-pointer text-lg font-semibold rounded-xl"
                        style={{ boxShadow: "0 0 30px rgba(238,67,67,0.3)" }}
                      >
                        <img
                          src="/icons/play.svg"
                          className="w-4 h-4 mr-2"
                          alt="Play Icon"
                        />
                        Watch Trailer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-[#f7f9fb] mb-8">
                Reviews & Ratings
              </h2>

              <div className="grid gap-6">
                {arrReviewing.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-lg border bg-[#15181d] text-[#f7f9fb] shadow-sm border-[#20242b]"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                          <img
                            className="aspect-square h-full w-full"
                            src={
                              review.author_details.avatar_path
                                ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                                : "/images/avatar.png"
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold leading-none tracking-tight text-[#f7f9fb]">
                              {review.author}
                            </h3>
                            {review.author_details.rating && (
                              <div className="rounded-full border font-medium flex items-center px-2.5 py-0.5 text-xs transition-colors border-transparent bg-[#f7c530] text-[#0e1014]">
                                <img
                                  src="/icons/black-star.svg"
                                  className="w-3 h-3 mr-2"
                                />
                                {review.author_details.rating}/10
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-[#94a3b7]">
                            {new Date(review.created_at).toLocaleDateString(
                              "vi-VN"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-[#94a3b7] leading-relaxed whitespace-pre-line">
                        {review.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section id="trailer" className="py-16 px-6 bg-[#15181d]">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-[#f7f9fb] mb-8">
                Trailers & Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arrVideo.map((video, index) => (
                  <div
                    key={index}
                    className="rounded-lg border text-[#f7f9fb] shadow-sm bg-[#20242b] border-[#94a3b7] overflow-hidden group cursor-pointer hover:border-[#ee4343] transition-all"
                    onClick={() =>
                      setSmallWindow({
                        data: {
                          key: video.key,
                          title: video.type,
                        },
                        show: true,
                        type: "video",
                      })
                    }
                  >
                    <div
                      className="aspect-video bg-[#0e1014] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)`,
                      }}
                    >
                      <img
                        src="/icons/play.svg"
                        className="w-12 h-12 text-[#ee4343] group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-[#0e1014]/50 group-hover:bg-[#0e1014]/30 transition-colors" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#f7f9fb] mb-1">
                        {video.name}
                      </h3>
                      <p className="text-sm text-[#94a3b7]">{video.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {smallWindow.show && (
            <SmallWindow data={smallWindow} setSmallWindow={setSmallWindow} />
          )}
        </div>
      )}
    </>
  );
}

export default MediaDetailsPage;
