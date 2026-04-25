import React from "react";

export default class MovieCard extends React.Component {

    
    
    render() {
        const {movies, addstars, decstars,onClickFav,onClickAddtocart} = this.props
        const {title, plot, price, rating, star,fav,isInCart} = this.props.movies;
        return (
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                    alt="Decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                    onClick={() => {decstars(movies)}}
                                />
                                <img className="stars"
                                    alt="stars"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={() => {addstars(movies)}}
                                />
                                <span className="starCount">{star}</span>
                            </div>

                            <button className={fav?"favourite-btn":"unfavourite-btn"} onClick={() => onClickFav(movies)}>{fav?"favourite":"unfavourite"}</button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"} onClick={() => onClickAddtocart(movies)}>{isInCart?"apply":"is card"}</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
