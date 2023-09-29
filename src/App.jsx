import CardDetail from "./components/CardDetail/CardDetail"
import ContainCards from "./components/ContainCards/ContainCards"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SlideShowBanner from "./components/SlideshowBanner/SlideshowBanner"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchMovieInput from "./components/SearchMovieInput/SearchMovieInput"
import { useState } from "react"

function App() {
  const [ nameMovie, setNameMovie ] = useState()

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SlideShowBanner />}/>
          <Route path="/movieList/:categoryMovie" element={<ContainCards />}/>
          <Route path="/movieDetail/:movie_id" element={<CardDetail />}/>
          <Route path="/searchMovie/:movieName" element={<><SearchMovieInput setNameMovie={setNameMovie }/>
          <ContainCards nameMovie={nameMovie}/>
          </>}/>
          <Route path="*" element={<h1>NOT FOUND</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
