import { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component{
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            price: 199,
            rating: 1,
            stars : 0,
            fav : false,
            isinCart : false
        }

    }
    render(){
        return(
            <>
            <MovieCard movies = {this.state}/>
            
            </>
        )
    }
}