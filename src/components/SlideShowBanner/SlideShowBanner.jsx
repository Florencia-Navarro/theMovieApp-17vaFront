import MoviesList from "../MoviesList/MoviesLists"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { useParams } from "react-router-dom"
import axios from "axios"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SlideShowBanner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [ allMovies, setAllMovies ] = useState([])
  
  const { categoryMovie } = useParams()

  useEffect(() => {
    const getMovies = async () => {
      try{
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_APY_KEY}&language=es-ES`) 
        setAllMovies(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [categoryMovie])

  // console.log(allMovies)

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

        {allMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div>
              <div
                style={{
                  height: "60vh",
                  width: "100vw",
                  position: "relative",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  

                }}
              >
              </div>
              <div style={{position: "absolute", top: 300, width: "100%", height: "30%", opacity: 0.6, }}>
                <div style={{width: "80%", backgroundColor: 'orange', opacity: 0.8, margin: "0 auto", padding: "30px"}}>
                    <h4 style={{fontWeight: "bold"}}>{movie.title}</h4>
                    <p style={{fontWeight: "bold"}}>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <MoviesList />
    </>
  );
}

export default SlideShowBanner

