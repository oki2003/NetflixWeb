import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apiService from "../config/api";

function CastDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [knownFor, setKnownFor] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const arrData = await apiService.getCastDetails(id);
    const arrKnownFor = await apiService.getKnownMedia(id);
    setData(arrData);
    setKnownFor(arrKnownFor);
  };
  return (
    <div id="content" className="pt-[75px] flex">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
        className="h-[450px] rounded-xl flex-none"
        alt="Can't not load this image"
      />
      <div className="text-black ml-[32px] overflow-hidden">
        <h1 className="font-bold text-[34px]">{data.name}</h1>
        <p className="font-semibold  text-[22px] pt-9">Biography</p>
        <p>{data.biography}</p>
        <p className="font-semibold  text-[22px] pt-9">Personal Info</p>
        <div className="flex w-full justify-between">
          <div>
            <p className="font-semibold  text-[18px]">Stage Name</p>
            <p>{data.also_known_as?.[0]}</p>
          </div>
          <div>
            <p className="font-semibold  text-[18px]">Know For</p>
            <p>{data.known_for_department}</p>
          </div>
          <div>
            <p className="font-semibold  text-[18px]">Known Credits</p>
            <p>25</p>
          </div>
          <div>
            <p className="font-semibold  text-[18px]">Gender</p>
            <p>{data.gender == 1 ? "Female" : "Male"}</p>
          </div>
          <div>
            <p className="font-semibold  text-[18px]">Place of Birth</p>
            <p>{data.place_of_birth}</p>
          </div>
          <div>
            <p className="font-semibold  text-[18px]">Also Known As</p>
            {console.log(data.also_known_as)}
            {data.also_known_as?.map((know, index) => (
              <p key={index}>{know}</p>
            ))}
          </div>
        </div>
        <p className="font-semibold  text-[22px] pt-7 pb-2">Known For</p>
        <div className="fade-right">
          <div
            className="w-full overflow-x-scroll flex scrollLeft"
            id="scrollbarStyle"
          >
            {knownFor.map((item) => {
              if (item.poster_path !== null) {
                return (
                  <div
                    key={item.id}
                    className="h-[264px] w-[130px] mb-4 flex-none text-center mr-7"
                  >
                    <Link
                      to={
                        item.media_type === "tv"
                          ? `/detailVideo/tv/${item.id}`
                          : `/detailVideo/movie/${item.id}`
                      }
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        className="h-3/4 rounded-t-xl mb-3 rounded-xl"
                        alt="Can't not load this image"
                      />
                    </Link>
                    <Link
                      to={
                        item.media_type === "tv"
                          ? `/detailVideo/tv/${item.id}`
                          : `/detailVideo/movie/${item.id}`
                      }
                      className=" text-black hover:text-[#01b4e4] cursor-pointer"
                    >
                      <p className="pl-2 pr-2 pb-[3px] line-clamp-2">
                        {item.name || item.title}
                      </p>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastDetailsPage;
