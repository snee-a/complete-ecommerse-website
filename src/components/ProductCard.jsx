import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

const ProductCard = ({ id, image, title, description, price, small }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <MotionCard
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      sx={{
        maxWidth: small ? 250 : 300,
        mx: 'auto',
        my: 2,
        boxShadow: 3,
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: small ? 150 : 200,
          objectFit: 'contain',
          p: 1.5,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ₹{price}
        </Typography>
        
      </CardContent>
    </MotionCard>
  );
};

export default ProductCard;
