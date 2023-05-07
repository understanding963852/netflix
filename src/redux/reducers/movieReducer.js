const initialState = {
  popularMovies: {},
  topRateMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    case "GET_MOVIES_SUCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRateMovies: payload.topRateMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
