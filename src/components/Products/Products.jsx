import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Blusa Eva', description: '100% algodão.', price: 'R$ 280', image: 'https://i.pinimg.com/originals/50/5e/7a/505e7ac93d8f4a1dab2a059622242dc9.jpg'},
  { id: 2, name: 'Cortina de plantas', description: 'Cortina de plantinhas tecidas em fio 100% algodão.', price:'R$ 350', image: 'https://i.pinimg.com/originals/50/5e/7a/505e7ac93d8f4a1dab2a059622242dc9.jpg'},
];

const Products = () => {
  const classes = useStyles();

  return (
  <main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
  )
}

export default Products;
