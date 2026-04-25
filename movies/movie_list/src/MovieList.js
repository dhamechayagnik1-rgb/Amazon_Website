import { Component } from "react";
import MovieCard from "./MovieCard";


export default class MovieList extends Component {
  

  render() {
    const { movies ,addstars, decstars,onClickFav,onClickAddtocart} = this.props;
    return (

      <>
        {movies.map((movie, index) =>
          <MovieCard movies={movie} key={index}
           addstars = {addstars}
           decstars={decstars}
           onClickFav ={onClickFav}
           onClickAddtocart={onClickAddtocart}
          />)}


      </>
    )
  }
}