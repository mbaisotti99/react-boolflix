import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import NavBar from "./components/NavBar"
import MovieList from "./components/MovieList"


function App() {

  return(
    <GlobalContextProvider >
      <NavBar />
      <MovieList />
    </GlobalContextProvider>
  )

}

export default App
