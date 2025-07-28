import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 4,
        backgroundColor: '#111',
        color: 'white',
        borderTop: '1px solid #444',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              ShopEase
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for the latest products in fashion, electronics, and more.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/products" color="inherit" underline="hover">Products</Link>
              <Link href="/cart" color="inherit" underline="hover">Cart</Link>
              <Link href="/wishlist" color="inherit" underline="hover">Wishlist</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: support@shopease.com
            </Typography>
            <Typography variant="body2">
              Phone: +91-987654XXX
            </Typography>
            <Typography variant="body2">
              Address: 123 Ecom Street, India
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 4, opacity: 0.7 }}>
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
