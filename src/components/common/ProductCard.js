import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import {Link} from 'react-router-dom';

import './productCard.css'

const ProductCard = ({ticket}) => {


    return (
            
         <Grid container spacing={2} style={{ margin: "50px auto"}}>
           <Grid  md={9}>
            <Card >
                <Link to= {`/itemDetail/${ticket.id}`}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={ticket.image}
                    alt={ticket.title}
                   
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {ticket.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    ${ticket.price}
                  </Typography>
                 </CardContent>              
            </Card>
          </Grid>
        </Grid>
    );
}

export default ProductCard