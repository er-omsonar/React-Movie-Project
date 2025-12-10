
import "../css/MovieCard.css";
function MovieCard({ movie }) {
  function favouriteClick() {
    alert("Favorite clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
        />

        <div className="movie-overlay">
          <button className="favorite-btn" onClick={favouriteClick}>🤍</button>
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
