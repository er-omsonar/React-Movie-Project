import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../../context/MovieContext'
function Favorites (){
  const {favorites} = useMovieContext()

  if(favorites){
    return(
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
      </div>
    )
  }
  return(
    <div className="favorites-empty">
      <h2>No favorites movies yet</h2>
      <p>Now you can start adding movies to favorite to add them in this list </p>
    </div>
  )
}

export default Favorites