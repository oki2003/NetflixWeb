function LoadingDetailCast() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="animate-pulse flex items-center justify-center w-full h-full bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-full h-full text-gray-200 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-black text-[#F9FAFB] mb-4">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </h1>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[#9AA8B8]">
                  <div className="animate-pulse h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#9AA8B8]">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-4">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              </div>

              <div className="mb-4">
                <h3 className="text-[#F9FAFB] font-semibold mb-2">
                  <div className="animate-pulse h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">
                Biography
              </h2>
              <div className="text-[#9AA8B8] leading-relaxed">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="animate-pulse h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">
                Known For
              </h2>
              <div className="h-2.5 bg-gray-200 rounded-full w-78 mb-4"></div>
              <div className="animate-pulse h-2.5 bg-gray-200 rounded-full w-58 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-58 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoadingDetailCast;
