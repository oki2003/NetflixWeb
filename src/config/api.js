const API_KEY = import.meta.env.VITE_API_KEY;

const apiService = {
  getMediaList: (pathname) =>
    fetch(`https://api.themoviedb.org/3${pathname}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.error("Error:", error)),

  getMediaDetails: (type, id) =>
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getReviewsList: (type, id) =>
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.error("Error:", error)),

  getVideosList: (type, id) =>
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.error("Error:", error)),

  getGenresList: (type) =>
    fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => data.genres)
      .catch((error) => console.error("Error:", error)),

  getCastsList: () =>
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.error("Error:", error)),

  getCastDetails: (id) =>
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getKnownMedia: (id) =>
    fetch(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data.cast)
      .catch((error) => console.error("Error:", error)),
};

export default apiService;
