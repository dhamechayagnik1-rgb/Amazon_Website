//import Students from "./student";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Component } from "react";
import { movie } from "./moviesData";


class App extends Component() {
  constructor() {
    super();
    this.state = {
      movies: movie
    }

  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star >= 5) {
      return;
    }

    movies[movieId].star += 0.5;
    this.setState({
      movies: movies
    })
  }
  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star <= 0) {
      return;
    }

    movies[movieId].star -= 0.5;
    this.setState({
      movies: movies
    })
  }
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
      movies
    })
  }
  /*return (
    <>
    <h1>Movie App</h1>
   <Students name ="yagnik" marks={90}/>
   <Students name ="dax" marks={87}/>
   <Students name ="dad" marks={43}/>
   <Students />
    </>
  );*/
render(){
  const { movies } = this.state
  return(
    <>
    <Navbar/>
    <MovieList movies={movies} 
            addstars={this.handleAddStars}
            decstars={this.handleDecStars}
            onClickFav={this.handleToggleFav}
            onClickAddtocart={this.handleAddtocart}/></>
  )}
}
/*Students.defaultProps = {
  name : "Students",
  marks: "N.A"
}*/

export default App;
