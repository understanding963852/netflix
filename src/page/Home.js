import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux"; //액션을 호출하려면 dispatch가 필요하다.
import Banner from "../component/Banner";
import MoviSlide from "../component/MoviSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upComingMovies, loading } = useSelector(
    (state) => state.movie //index.js에서
  );
  console.log("Home", popularMovies);

  //커지자마자 자료가 불러와져야하므로 useEffect를 사용한다
  useEffect(() => {
    //redux에서 api호출을 한다(리덕스미들웨어를 사용한다)
    dispatch(movieAction.getMovies());
  }, []);

  //loading이 true가 되는 경우는 데이터를 도착하기전-->loading spinner를 보여주기
  //loading이 false가 되는 경우는 데이터를 도착한후,에러가 났을때-->데이터를 보여주기

  if (loading) {
    return <ClipLoader color="#fff" loading={loading} size={150} />;
  }
  return (
    <div>
      {/* useEffect는 랜더를 하고 호출한다 (return이 먼저실행되고 호출된다)*/}
      {/* {popularMovies.results && <Banner movie={popularMovies.results[0]} />} */}
      {/* loadingspinner가 있기때문에 그냥적어도 된다 */}
      <Banner movie={popularMovies.results[0]} />

      <h2>Popular Movies</h2>
      <MoviSlide movies={popularMovies} />
      <h2>Top Rated Movies</h2>
      <MoviSlide movies={topRateMovies} />
      <h2>UpComing Movies</h2>
      <MoviSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
