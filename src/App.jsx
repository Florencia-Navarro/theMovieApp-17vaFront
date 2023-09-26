import CardDetail from "./components/CardDetail/CardDetail"
import ContainCards from "./components/ContainCards/ContainCards"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SlideShowBanner from "./components/SlideshowBanner/SlideshowBanner"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  const [ allMovies, setAllMovies ] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try{
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
        setAllMovies(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])

  console.log(allMovies)

  // https://api.themoviedb.org/3/movie/popular?api_key=a5c720fc0d8fdad4f6cd196d4c5cf58a    populares
  // https://api.themoviedb.org/3/movie/now_playing?api_key=a5c720fc0d8fdad4f6cd196d4c5cf58a    ultimos lanzamientos

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SlideShowBanner />}/>
          <Route path="/ultimosLanzamientos" element={<ContainCards allMovies={allMovies}/>}/>
          <Route path="/populares" element={<ContainCards allMovies={allMovies}/>}/>
          <Route path="" element={<CardDetail />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
