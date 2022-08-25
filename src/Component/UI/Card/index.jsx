import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard( item ) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.item.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.item.first_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.item.last_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
