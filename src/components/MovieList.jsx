import { useGlobalContext } from "../contexts/GlobalContext"


function MovieList() {

    const { moviesArr } = useGlobalContext()

    return (
        <>
        <div className="container d-flex flex-wrap">
            {moviesArr.map((curMovie) => {
                return (

                    curMovie.title ? 

                    <div className="card m-5 w-50">
                        <img src={`https://image.tmdb.org/t/p/w342/${curMovie.poster_path}`} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{curMovie.title}</h5>
                                <h5 className="card-title">"{curMovie.original_title}"</h5>
                                <p className="card-text">Lingua: <img src={curMovie.original_language === "it" || curMovie.original_language === "en"  ? (`${curMovie.original_language}.png`):("placeholder.png")} /> </p>
                                <p className="card-text">Votazione: {Math.ceil(curMovie.vote_average)}</p>
                            </div>
                    </div>

                    :

                    <div className="card m-5 w-50 text-bg-dark">
                        <img src={`https://image.tmdb.org/t/p/w342/${curMovie.poster_path}`} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{curMovie.original_name}</h5>
                                <h5 className="card-title">"{curMovie.name}"</h5>
                                <p className="card-text">Lingua: <img src={curMovie.original_language === "it" || curMovie.original_language === "en"  ? (`${curMovie.original_language}.png`):("placeholder.png")} /> </p>
                                <p className="card-text">Votazione: {Math.ceil(curMovie.vote_average)}</p>
                            </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default MovieList