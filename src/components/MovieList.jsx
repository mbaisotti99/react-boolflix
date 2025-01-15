import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext"
import '@fortawesome/fontawesome-free/css/all.css';


function MovieList() {

    const { moviesArr, tvArr } = useGlobalContext()
    const completeArr = [...moviesArr, ...tvArr]
    useEffect(() => {
        if (moviesArr.length > 0) {
            console.log((Array.from({ length: Math.ceil(moviesArr[0].vote_average) })).map(() => {
                return (
                    <i class="fa-regular fa-star"></i>
                )
            }))
        }
    }, [moviesArr])
    return (
        <>
            <div className="container d-flex flex-wrap">
                {completeArr.map((curMovie) => {
                    // let stars = ""
                    // for (let i = 0; i < Math.ceil(curMovie.vote_average); i++) {
                    //     stars += <i class="fa-regular fa-star"></i>
                    // }
                    return (

                        curMovie.title ?

                            <div key={curMovie.id} className="card m-5 w-50 clipCard text-center">
                                <img src={`https://image.tmdb.org/t/p/w342/${curMovie.poster_path}`} className="card-img-top" />
                                <div className="card-body hidden">
                                    <h5 className="card-title">{curMovie.title}</h5>
                                    <h5 className="card-title">"{curMovie.original_title}"</h5>
                                    <p className="card-text">Lingua: <img width={200} src={curMovie.original_language === "it" || curMovie.original_language === "en" ? (`${curMovie.original_language}.png`) : ("placeholder.png")} /> </p>
                                    <p className="card-text">Votazione: {curMovie.vote_average ? (Array.from({ length: Math.ceil(curMovie.vote_average / 2) })).map(() => {
                                        return (
                                            <i class="fa-regular fa-star"></i>
                                        )
                                    })
                                        :
                                        "N/A"
                                    } </p>
                                    <p className="card-text"> {curMovie.overview} </p>
                                    
                                </div>
                            </div>

                            :

                            <div key={curMovie.id} className="card m-5 w-50 text-bg-dark clipCard text-center">
                                <img src={`https://image.tmdb.org/t/p/w342/${curMovie.poster_path}`} className="card-img-top" />
                                <div className="card-body hidden">
                                    <h5 className="card-title">{curMovie.original_name}</h5>
                                    <h5 className="card-title">"{curMovie.name}"</h5>
                                    <p className="card-text">Lingua: <img width={100} src={curMovie.original_language === "it" || curMovie.original_language === "en" ? (`${curMovie.original_language}.png`) : ("placeholder.png")} /> </p>
                                    <p className="card-text">Votazione: {!curMovie.vote_average ? "N/A" :
                                        (Array.from({ length: Math.ceil(curMovie.vote_average / 2) })).map(() => {
                                            return (
                                                <i class="fa-regular fa-star"></i>
                                            )
                                        })
                                    }</p>
                                    <p className="card-text"> {curMovie.overview} </p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </>
    )
}

export default MovieList