const apiService = {
  getMediaList: (pathname) =>
    fetch(`/api/MediaList?pathname=${pathname}`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error)),

  getMediaDetails: (type, id) =>
    fetch(`/api/MediaDetails?type=${type}&id=${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getReviewsList: (type, id) =>
    fetch(`/api/ReviewList?type=${type}&id=${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getVideosList: (type, id) =>
    fetch(`/api/VideoList?type=${type}&id=${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getGenresList: (type) =>
    fetch(`/api/GenresList?type=${type}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getCastsList: () =>
    fetch(`/api/CastList`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getCastDetails: (id) =>
    fetch(`/api/CastDetails?id=${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),

  getKnownMedia: (id) =>
    fetch(`/api/KnownMedia?id=${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error)),
};

export default apiService;
