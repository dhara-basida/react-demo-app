//import './MovieList.css';
import MovieTile from '../movie-tile/MovieTile';


function MovieList() {

    const movieInfo = {
        imageUrl: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Titanic',
        releaseYear: 2021,
        genres: ['DOCUMENTARY', 'COMEDY'],
    };

    const movieInfo1 = {
        imageUrl: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Universe',
        releaseYear: 2022,
        genres: ['DOCUMENTARY', 'HORROR'],
    };

    const movies = [
        movieInfo1, movieInfo
    ];

    return (
        <div className="movie-list-container" >
            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieTile
                        key={movie.name}
                        movieInfo={movie}
                        onTileClick={(selectedMovie) => {
                            console.log(`Selected movie: ${selectedMovie.name}`);
                        }}
                        onEditClick={(selectedMovie) => {
                            console.log(`Edit movie: ${selectedMovie.name}`);
                        }}
                        onDeleteClick={(selectedMovie) => {
                            console.log(`Delete movie: ${selectedMovie.name}`);
                        }}
                    />
                ))}

            </div>

        </div>
    );
}
export default MovieList;
