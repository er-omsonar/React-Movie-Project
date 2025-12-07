import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home (){
  const [searchQuery,setSearchQuery] = useState("");
  const movies = [
    {id : 1 , title : "time movie", release_date: "2025"},
    {id : 2 , title : "terminator", release_date: "1999"},
    {id : 3 , title : "the matrix", release_date: "1998"},
  ];
     const handleSearch = (e) =>{
      e.preventDefault()
      
     }
  return(

    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text"
         placeholder="search for movies"
         className="search-input"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => 
        (
          <MovieCard movie={movie} key={movie.id}/>
        )
        )}
      </div>
    </div>

    );


}

export default Home