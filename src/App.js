import { useEffect, useState } from "react";
import MainMovieCard from "./components/MainMovieCard";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MovieSummary from "./components/MovieSummary";
import BookMovie from "./components/BookMovie";

const App = () => {

  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState("")

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = (() => {
    const fetchmo = async () => {
      const allMoviesFetch = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
      const allMovies = await allMoviesFetch.json();

      setMovies(allMovies);
    }
    fetchmo();
  });


  return (
    <Router>

      <Routes>

        <Route path="/" element={
          <div className="App">

            <div className="flex items-center flex-col">

              <div className="mt-10 space-x-2">
                <input onChange={handleOnChange} type="text" placeholder="Search movies/shows" className="w-64 md:w-96 text-xl py-1 px-2 rounded focus:outline-none" />
                <button onClick={handleSearch} className="bg-yellow-300 rounded-md text-xl font-bold py-1 px-4">
                  Search
                </button>
              </div>

              {movies.length === 0 && <div className="font-semibold text-xl text-red-500 m-6">Nothing to show here :(</div>}

              {movies.map((movie, id) => (
                <div key={id} className="flex flex-col w-full px-3 md:px-10 justify-center max-w-6xl">
                  <MainMovieCard movie={movie} />
                </div>
              ))}

            </div>

          </div>
        } />

        <Route path={`/summary/:id`} element={
          <div className="flex justify-center h-screen">
            <div className="flex flex-col w-full px-3 md:px-10 max-w-6xl">
              <MovieSummary />
            </div>
          </div>
        } />

        <Route path={`/book/:id`} element={
          <div className="flex justify-center">
            <div className="flex flex-col w-full px-3 md:px-10 justify-center max-w-6xl">
              <BookMovie />
            </div>
          </div>
        } />

      </Routes>

    </Router>)
}

export default App;
