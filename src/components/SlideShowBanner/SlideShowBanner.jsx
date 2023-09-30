import MoviesList from "../MoviesList/MoviesLists"
import useMovies from "../useMovies";

import { Link, useParams } from "react-router-dom"

import  { useEffect, useRef, useState } from 'react';

import './../../styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Button, Stack } from "@mui/material";

import { PuffLoader } from "react-spinners";


function SlideShowBanner() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [ loading, setLoading ] = useState(true)

  const { data, getMovies } = useMovies([])
  
  const { categoryMovie } = useParams()

  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_APY_KEY}&language=es-ES`)

    setLoading(false)
  }, [categoryMovie])


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
        <PuffLoader color="#36d7b7" loading={loading} size={150}/>
        {data.map((movie, index) => (
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
              <div style={{position: "absolute", top: 250, width: "100%", height: "30%", opacity: 0.6, }}>
                <div style={{width: "80%", backgroundColor: '#2b4c7e', opacity: 0.98, margin: "0 auto 10px ", padding: "5px"}}>
                    <h4 style={{fontFamily: "couture", color: "white", fontSize: "0.9rem"}}>{movie.title}</h4>
                    <p style={{fontFamily: "couture", color: "white", fontSize: "0.9rem"}}>{movie.overview}</p>
                    <Link to={`/movieDetail/${movie.id}`} key={movie.id} style={{textDecoration: "none", width: "90%"}}>
                      <Stack spacing={2} >
                        <Button variant="outlined" sx={{color: "white", padding:"10px 50px"}}>Ver mas...</Button>
                      </Stack>
                    </Link>
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

