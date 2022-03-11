import React from 'react';
import Movie from '../../Movie';
import { Box, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {


  return (
    <Card raised sx={{width:300, margin: '0'}}>
      <Box sx={{ display:'flex' }}>

      <CardMedia component="img" sx={{width:'50%'}} image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt="poster" />
      <CardContent>
        <Typography component="div" variant="h6">{props.movie.original_title} ({props.movie.release_date.substring(0, 4)})</Typography>
        <Typography component="div" variant="body2" sx={{fontSize:"5px"}} color="text.secondary">{props.movie.overview}</Typography>
      </CardContent> 
      </Box>
    </Card>
  );
}