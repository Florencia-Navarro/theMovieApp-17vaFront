import { Link } from "react-router-dom"

import { Button, Card, CardMedia, Stack } from "@mui/material"

function CardsMovie({ id, title, poster_path }){

    console.log(id)

    return(
            <Card sx={{ maxWidth: 300, maxHeight: 800, margin: "20px", boxShadow: "-6px -5px 22px 8px rgba(0,0,0,0.75)"}}>
            
                <CardMedia
                    component="img"
                    height="450"
                    image={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                />
                <Link to={`/movieDetail/${id}`} key={id} style={{textDecoration: "none", width: "90%"}}>
                    <Stack spacing={2} >
                        <Button variant="outlined" sx={{color: "black", padding:"10px 50px"}}>Ver mas...</Button>
                    </Stack>
                </Link>
                    
            </Card>

       
    )
}

export default CardsMovie

