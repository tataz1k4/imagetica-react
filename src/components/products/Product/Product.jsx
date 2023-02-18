import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';
// import { mergeClasses } from '@material-ui/styles';

const Product = () => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent>
        <div classname={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Product
