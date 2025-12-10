
import "../css/MovieCard.css";
import { useMovieContext } from "../../context/MovieContext";
function MovieCard({ movie }) {
 const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
 const favorite = isFavorite(movie.imdbID)
  function favouriteClick(e) {
   e.preventDefault()
   if(favorite) removeFromFavorites(movie.imdbID)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
        />

        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={favouriteClick}> {favorite ? "❤️" : "🤍"}
</button>

        </div>
      </div>

      <div className="movie-info">
        <h3 style={{color:"lightblue"}}>{movie.Title}</h3>
        <p style={{color:"white"}}>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
