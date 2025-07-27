import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Typography, Box } from "@mui/material";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=4")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <Box
      sx={{
        padding: "60px 20px",
        backgroundColor: "#000",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          mb: 8,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Trending Now
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id} // ✅ This was missing
            image={product.thumbnail}
            title={product.title}
            description={product.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductSection;
