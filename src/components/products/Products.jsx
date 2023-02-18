import React from 'react';
import Grid from '@material-ui/core'

const products = [
  { id: 1, name: 'Blusa Eva', description: '100% algodão.'},
  { id: 2, name: 'Cortina de plantas', description: 'Cortina de plantinhas tecidas em fio 100% algodão.'},
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}

    </Grid>
  </main>
}

export default Products;
