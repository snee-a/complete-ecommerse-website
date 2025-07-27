import React, { useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../assets/shoe.jpg';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#c6dec6',
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 16 }, // Increased bottom padding for more space
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        filter: 'brightness(1.15)',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', mb: 2 }}
          data-aos="fade-up"
        >
          Shop Smarter. Live Better.
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 4 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Discover products that fit your style and budget.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={{
            color: '#c6dec6',
            borderColor: '#c6dec6',
            '&:hover': {
              backgroundColor: '#c6dec6',
              color: '#020402',
            },
          }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Explore Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
