import { useEffect, useState } from "react";
import MainMovieCard from "./components/MainMovieCard";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MovieSummary from "./components/MovieSummary";

const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchmo = async () => {
      const allMoviesFetch = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const allMovies = await allMoviesFetch.json();

      setMovies(allMovies);
    }
    fetchmo();
  }, []);


  return (
    <Router>

      <Routes>

        <Route path="/" element={
          <div className="App">


            <div className=" flex items-center flex-col">

              {movies.map((movie) => (
                <div className="flex flex-col w-full px-10 justify-center max-w-6xl">
                  <MainMovieCard movie={movie} />
                </div>
              ))}

            </div>

          </div>
        } />

        <Route path={`/summary/:name`} element={<MovieSummary />} />

      </Routes>

    </Router>)
}

export default App;
