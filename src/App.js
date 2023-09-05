import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// 4404f138

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=4404f138"

// const movie1 = {
//   Title: 'Superman, Spiderman or Batman',
//   Year: '2011',
//   imdbID: 'tt2084949',
//   Type: 'movie',
//   Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg'
// }

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className='app'>
      <h1>Movie Recommendation</h1>
      <div className='search'>
        <input placeholder='Search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <img src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(search)} />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found!!!</h2>
            </div>
          )
      }


    </div>

  );
}

export default App;
