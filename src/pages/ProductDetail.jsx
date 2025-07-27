import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Paper,
} from '@mui/material';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);

        const catRes = await axios.get(
          `https://dummyjson.com/products/category/${res.data.category}`
        );
        setCategoryProducts(catRes.data.products.filter(p => p.id !== res.data.id));
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <Box textAlign="center" mt={10}><CircularProgress /></Box>;

  const renderStars = (count) => {
    return [...Array(Math.floor(count))].map((_, i) => (
      <StarIcon key={i} sx={{ color: '#ffa726', fontSize: 20 }} />
    ));
  };

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', pt: 10, px: 3 }}>
      {/* Product Details Section */}
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 5,
          p: 4,
          mb: 6,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={product.thumbnail}
              alt={product.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {product.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" mb={2}>
              {product.description}
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h6" color="green" mr={2}>
                ₹{product.price * 80}
              </Typography>
              <Chip
                label={`${product.discountPercentage}% OFF`}
                color="secondary"
              />
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              {renderStars(product.rating)}
              <Typography ml={1} variant="body2" color="text.secondary">
                {product.rating.toFixed(1)} / 5
              </Typography>
            </Box>

            <Typography variant="body2" gutterBottom><b>Brand:</b> {product.brand}</Typography>
            <Typography variant="body2" gutterBottom><b>Stock:</b> {product.stock}</Typography>
            <Typography variant="body2" gutterBottom><b>Category:</b> {product.category}</Typography>

            <Box mt={3}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add to Cart
              </Button>
              <Button variant="outlined" color="secondary">
                Buy Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Reviews Section */}
        <Box mt={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Reviews
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((num) => (
              <Grid item xs={12} md={4} key={num}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    User{num}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={1}>
                    {renderStars(product.rating)}
                    <Typography ml={1} variant="body2" color="text.secondary">
                      {product.rating.toFixed(1)}
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    Great product! Totally worth it. Will recommend to others.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* More Products */}
      <Divider sx={{ bgcolor: '#fff', mb: 4 }} />
      <Box>
        <Typography variant="h5" color="white" mb={2}>
          More Products in "{product.category}"
        </Typography>
        <Grid container spacing={2}>
          {categoryProducts.map(p => (
            <Grid item xs={12} sm={6} md={3} key={p.id}>
              <ProductCard
                id={p.id}
                image={p.thumbnail}
                title={p.title}
                description={p.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetail;
