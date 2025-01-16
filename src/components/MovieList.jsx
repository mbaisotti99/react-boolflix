import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext"
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";


function MovieList() {

    const { moviesArr, tvArr } = useGlobalContext()
    const completeArr = [...moviesArr, ...tvArr]
    const [genreList, setGenreList] = useState([])
    const [selectedGen, setSelectedGen] = useState([...genreList])
    const [arrayByGen, setArrayByGen] = useState([...completeArr])

    const handleChange = (event) =>{
        setSelectedGen(event.target.value)
        // console.log(selectedGen);
        
    }

    useEffect(() =>{
        setArrayByGen(
            completeArr.filter((curMovie) =>{
                console.log(curMovie.genre_ids);
                
                return(curMovie.genre_ids.includes(selectedGen))
            }
            )
        )
        console.log(arrayByGen);
        
    },[selectedGen])

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/genre/movie/list", { params: { api_key: "9d5235dee5556b95d050a5c00ecfc6fc" } })
            .then((resp) => {
                setGenreList(resp.data.genres)
                console.log(genreList);
            }
            )
    }, [])

    // useEffect(() => {
    //     if (moviesArr.length > 0) {
    //         console.log((Array.from({ length: Math.ceil(moviesArr[0].vote_average) })).map(() => {
    //             return (
    //                 <i class="fa-regular fa-star"></i>
    //             )
    //         }))
    //     }
    // }, [moviesArr])
    return (
        <>
            <div className="container d-flex flex-wrap">
                <select class="form-select" onChange={handleChange}>
                    <option selected>Tutti</option>
                    {genreList.map((curGen) =>{
                        return(
                            <option value={curGen.id}>{curGen.name}</option>
                        )
                    })}
                </select>
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