import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error('Error:', err));
  }, [category]);

  useEffect(() => {
    let sorted = [...products];
    if (sortOrder === 'low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFiltered(sorted);
  }, [sortOrder, products]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Products in {category}
      </Typography>

      {/* Filter/Sort */}
      <Box sx={{ mb: 2, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Sort by Price</InputLabel>
          <Select
            value={sortOrder}
            label="Sort by Price"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography>No products found in this category.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
