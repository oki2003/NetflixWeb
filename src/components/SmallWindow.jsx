function SmallWindow({ data, setSmallWindow }) {
  document.body.style.overflow = "hidden";
  return (
    <div className="w-full h-full bg-[rgba(6,6,6,0.7)] fixed z-70 flex top-0 left-0 ">
      {data.type === "video" ? (
        <div className="h-[90%] m-auto rounded-xl bg-black shadow text-[17px]">
          <div className="flex justify-between pl-6 pr-6 pt-6 pb-3">
            <h1 className="text-[20px]">{data.data.title}</h1>
            <button
              onClick={() => {
                setSmallWindow({ show: false });
                document.body.style.overflow = "";
              }}
              className="cursor-pointer"
            >
              &#10006;
            </button>
          </div>
          <div className="h-[90%] aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${data.data.key}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div
          id="scrollbarStyle"
          className="relative pt-[50px] overflow-y-scroll flex flex-col items-center h-[90%] w-[90%] m-auto rounded-xl bg-white shadow-2xl text-[17px]"
        >
          <button
            onClick={() => {
              setSmallWindow({ show: false });
              document.body.style.overflow = "";
            }}
            className="cursor-pointer text-black absolute top-0 right-0 p-10"
          >
            &#10006;
          </button>
          {data.data.map((review) => (
            <div className="w-[85%] border border-solid mb-10 border-[#e3e3e3] rounded-xl shadow p-[21px] text-[17px]">
              <div className="flex">
                <img
                  src={
                    review.author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`
                      : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                  }
                  className="mb-3 w-[46px] h-[46px] rounded-full mr-[21px]"
                  alt="Can't not load this image"
                />
                <div>
                  <h2 className="font-bold text-[20px] text-black">{`A review by ${review.author}`}</h2>
                  {review.author_details.rating * 10 > 0 ? (
                    <span className="p-[2px] pl-[12px] pr-[12px] rounded-[6px] bg-[#032541] text-white mr-[10px]">{`${
                      review.author_details.rating * 10
                    }%`}</span>
                  ) : (
                    <span></span>
                  )}
                  <span className="text-[#646464]">
                    Written by{" "}
                    <span className="text-black">{review.author}</span>{" "}
                    {`on ${data.getDate(review.created_at)}`}
                  </span>
                </div>
              </div>
              <p className="text-black">{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SmallWindow;
