import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Movies from "./page/Movies";
import MovieDetail from "./page/MovieDetail";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

//1. 3개의 페이지가 필요(홈페이지,movie페이지,movieDetail페이지)
//2. 홈페이지에서 배너를 볼수있다.
//3. 3가지 섹션의 영화를 볼수 있다.(popular,top rate,upcomimg )
//4. 각영화에 마우스를 올리면,제목,장르,점수,인기도,청불여부
//5. 영화를 슬라이드로 넘기면서 볼수 있다.
//6. 영화 디테일페이지에서 영화에 대한 디테일한 정보를 볼수 있다.
//7. trailer를 누르면 미리보기(trailer)를 볼수 있다.
//8. 영화에 리뷰도 볼 수 있다
//9. 관련된 영화를 볼수 있다.
//10. 영화검색을 할수있다.
//11. 영화정렬할수있다.
//12.  필터링을 할수있다.

function App() {
  return (
    <div className="wrap">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
