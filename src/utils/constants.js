const TMDB_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmYyZDMxMDUwNThhNjdkODI1NTlkY2ZjNGEyMzkwNyIsInN1YiI6IjY1YzIxZGY3ZWZlYTdhMDE2MzUxZmY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9T_J8qkOGMjd7HBi3bItgUL92UuwljkwbMCTnDOl6qo";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
