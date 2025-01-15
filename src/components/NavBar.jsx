import axios from "axios"
import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"

function NavBar() {

    const [searchValue, setSearchValue] = useState("")
    const { setMoviesArr, setTvArr } = useGlobalContext()

    const onChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        axios
            .get("https://api.themoviedb.org/3/search/movie",
                {
                    params: {
                        api_key: "9d5235dee5556b95d050a5c00ecfc6fc",
                        query: searchValue
                    }
                })
            .then((resp) => {
                console.log(resp);

                setMoviesArr(resp.data.results)
            })


        axios
            .get("https://api.themoviedb.org/3/search/tv",
                {
                    params: {
                        api_key: "9d5235dee5556b95d050a5c00ecfc6fc",
                        query: searchValue
                    }
                }
            )
            .then((resp) => {
                console.log(resp);
                
                setTvArr(resp.data.results)
            })


    }



    return (

        <header>
            <div className="row">
                <div className="col-6">
                    <img src="netflix.png" width={500} />
                </div>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" value={searchValue} onChange={onChange} />
                        <button type="submit" className="btn btn-primary px-5 mx-5">
                            Cerca
                        </button>
                    </form>
                </div>
            </div>
        </header>

    )

}

export default NavBar