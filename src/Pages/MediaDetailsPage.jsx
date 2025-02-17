import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SmallWindow from "../components/Detail/SmallWindow";
import CircleProgress from "../components/CircleProgress";
import apiService from "../config/api";

function MediaDetailsPage() {
  const [data, setData] = useState({});
  const [arrReviewing, setArrReviewing] = useState([]);
  const [arrVideo, setArrVideo] = useState([]);
  const [showBtnMore, setShowBtnMore] = useState(false);
  const [smallWindow, setSmallWindow] = useState({ data: {}, show: false });
  const reviewRef = useRef(null);
  const { id } = useParams();
  const type = useLocation().pathname.split("/")[2];

  const getDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Ho_Chi_Minh",
    });

    return formattedDate;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const arrData = await apiService.getMediaDetails(type, id);
    const arrDataReviewing = await apiService.getReviewsList(type, id);
    const arrDataVideo = await apiService.getVideosList(type, id);
    setData(arrData);
    setArrReviewing(arrDataReviewing);
    setArrVideo(arrDataVideo);
  };

  useEffect(() => {
    if (reviewRef.current?.scrollHeight > reviewRef.current?.clientHeight) {
      setShowBtnMore(true);
    }
  }, [reviewRef.current?.scrollHeight]);

  return (
    <>
      <div
        className={`text-black bg-right filter h-[600px] bg-contain bg-no-repeat bg-[url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path}')]`}
      >
        <div id="content" className="flex items-center h-full z-1 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            className="w-[330px] h-[487px] rounded-xl"
            alt="Can't not load this image"
          />
          <div className="text-white ml-[40px]">
            <h1 className="font-bold text-[44px]">
              {data?.original_title || data?.name}
              <span className="font-medium text-[#c4bfbf]">{` (${
                data?.release_date?.split("-")[0] ||
                data?.first_air_date?.split("-")[0]
              })`}</span>
            </h1>
            <div className="flex items-center mb-[27px]">
              <span>
                {`${
                  data?.release_date?.split("-")[2] ||
                  data?.first_air_date?.split("-")[2]
                }/${
                  data?.release_date?.split("-")[1] ||
                  data?.first_air_date?.split("-")[1]
                }/${
                  data?.release_date?.split("-")[0] ||
                  data?.first_air_date?.split("-")[0]
                }`}
              </span>
              <span className="bg-white block w-[6px] h-[6px] rounded-[100%] m-2"></span>
              <span>{data?.genres?.map((genre) => genre.name).join(", ")}</span>
              <span className="bg-white block w-[6px] h-[6px] rounded-[100%] m-2"></span>
              <span>1h 50m</span>
            </div>
            <div className="mb-[35px]">
              <div className="flex items-center">
                <CircleProgress
                  size={60}
                  progress={Math.round(data?.vote_average * 10)}
                  strokeWidth={5}
                />
                <span className="w-1 ml-[12px] font-bold">User Score</span>
              </div>
              <button className="bg-[#053257] rounded-4xl pt-[14px] pb-[14px] pl-[21px] pr-[21px] cursor-pointer hover:bg-[#032541] mt-5">
                Play Trailer
              </button>
            </div>
            <p className="text-[#c4bfbf] font-semibold text-[17px]">
              {data?.tagline}
            </p>
            <p className="font-semibold text-[22px] leading-[47px]">Overview</p>
            <p className="text-[17px]">{data?.overview}</p>
            <div></div>
          </div>
        </div>
        <div id="content">
          <h1 className="font-semibold mt-9 text-[30px]">Review</h1>
          <div className="border border-solid border-[#e3e3e3] rounded-xl shadow p-[21px] text-[17px]">
            {arrReviewing.length !== 0 ? (
              <div className="flex">
                <img
                  src={
                    arrReviewing[0]?.author_details?.avatar_path
                      ? `https://image.tmdb.org/t/p/w500${arrReviewing[0]?.author_details?.avatar_path}`
                      : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                  }
                  className="mb-3 w-[46px] h-[46px] rounded-full mr-[21px]"
                  alt="Can't not load this image"
                />
                <div>
                  <h2 className="font-bold text-[20px]">{`A review by ${arrReviewing[0]?.author}`}</h2>
                  <span className="p-[2px] pl-[12px] pr-[12px] rounded-[6px] bg-[#032541] text-white mr-[10px]">{`${
                    arrReviewing[0]?.author_details?.rating * 10
                  }%`}</span>
                  <span className="text-[#646464]">
                    Written by{" "}
                    <span className="text-black">
                      {arrReviewing[0]?.author_details?.name}
                    </span>{" "}
                    {`on ${getDate(arrReviewing[0]?.created_at)}`}
                  </span>
                </div>
              </div>
            ) : (
              <span>There is 0 review</span>
            )}
            <p className="line-clamp-6" ref={reviewRef}>
              {arrReviewing[0]?.content}
            </p>
            <span
              className={
                showBtnMore
                  ? "underline font-semibold cursor-pointer hover:text-[#646464]"
                  : "hidden"
              }
            >
              see the rest
            </span>
          </div>
          {arrReviewing.length != 0 ? (
            <p className="pt-[30px] pb-[37px]  text-[17px] ">
              <span
                onClick={() =>
                  setSmallWindow({
                    show: true,
                    data: arrReviewing,
                    type: "review",
                    getDate: (isoString) => getDate(isoString),
                  })
                }
                className="font-semibold cursor-pointer hover:text-[#646464]"
              >
                Read All Reviews
              </span>
            </p>
          ) : (
            <span></span>
          )}
        </div>
        <div id="content" className="pb-10">
          <h1 className="font-semibold mt-9 text-[30px]">Media</h1>
          <div
            className="flex border border-solid border-[#e3e3e3] rounded-xl shadow text-[17px] overflow-x-scroll"
            id="scrollbarStyle"
          >
            {arrVideo.map((video) => {
              if (video.site === "YouTube") {
                return (
                  <div
                    key={video.id}
                    className="play flex-none cursor-pointer"
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
                    <img
                      className="h-[292px]"
                      src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {smallWindow.show ? (
        <SmallWindow data={smallWindow} setSmallWindow={setSmallWindow} />
      ) : (
        <span></span>
      )}
    </>
  );
}

export default MediaDetailsPage;
