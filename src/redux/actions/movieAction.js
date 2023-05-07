import api from "../api";

//const API_KEY = `7503fec09692f78b681000cec1a9bba2`;
// api_key는 주민등록번호와 같다. 악용될수 있다

//.env파일에 있는 API_KEY 불러오기
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

function getMovies() {
  //미들웨어는 함수가 함수를 호출한다
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      }); //api호출하기전에 spinner를 호출한다.
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRateApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      //장르
      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [
        popularMovies,
        topRateMovies,
        upComingMovies,
        genreList,
      ] = await Promise.all([
        //매개변수를 array를 넣는다// 모두다 올때까지 한번만 기다려라
        popularMovieApi,
        topRateApi,
        upComingApi,
        genreApi,
      ]);

      console.log(popularMovies);
      console.log(topRateMovies);
      console.log(upComingMovies);
      console.log("genreList" + genreList);

      dispatch({
        type: "GET_MOVIES_SUCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRateMovies: topRateMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });

      //Get Popular
      // let url = `https://api.themoviedb.org/3/movie/popular?api_key=7503fec09692f78b681000cec1a9bba2&language=en-US&page=1`;

      // //Get Top Rated
      // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=7503fec09692f78b681000cec1a9bba2&language=en-US&page=1`;

      // //Get Upcoming
      // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=7503fec09692f78b681000cec1a9bba2&language=en-US&page=1`;
    } catch (error) {
      //에러 핸들링
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
}

export const movieAction = {
  getMovies,
};
